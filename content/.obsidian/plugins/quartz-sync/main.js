const { Plugin, Notice, Modal, Setting } = require('obsidian');
const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);

class CommitModal extends Modal {
    constructor(app, onSubmit) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h2', { text: 'Quartz Sync' });

        let commitMessage = '';

        new Setting(contentEl)
            .setName('Commit Message')
            .setDesc('Leave blank to use your GitHub username')
            .addText((text) =>
                text.onChange((value) => {
                    commitMessage = value;
                })
            );

        new Setting(contentEl)
            .addButton((btn) =>
                btn
                    .setButtonText('Sync to Web')
                    .setCta()
                    .onClick(() => {
                        this.close();
                        this.onSubmit(commitMessage);
                    })
            );
    }

    onClose() {
        this.contentEl.empty();
    }
}

module.exports = class QuartzSyncPlugin extends Plugin {
    async onload() {
        this.addRibbonIcon('paper-plane', 'Run Quartz Sync', () => {
            new CommitModal(this.app, (result) => {
                this.runSync(result);
            }).open();
        });
    }

    async runSync(userMsg) {
        const pluginId = 'remotely-save'; // Double-check this matches your folder name
        const plugins = this.app.plugins;
        const projectPath = 'C:/Users/harsh/OneDrive/Documents/GITHUB PROJECTS/Notes';

        try {
            // Kill the conflict
            await plugins.disablePluginAndSave(pluginId);
            new Notice('Syncing... Editor stabilized.');

            // Get GitHub username if message is blank
            const { stdout: gitUserRaw } = await execPromise('git config user.name', { cwd: projectPath });
            const gitUser = gitUserRaw.trim() || 'User';
            const finalMsg = userMsg.trim() !== '' ? userMsg : `commit from ${gitUser}`;

            // Run sync
            await execPromise(`npx quartz sync -m "${finalMsg}"`, { cwd: projectPath });
            new Notice('Quartz Sync Complete!');

        } catch (e) {
            new Notice(`Sync failed: ${e.message}`);
            console.error(e);
        } finally {
            // This runs NO MATTER WHAT
            await plugins.enablePluginAndSave(pluginId);
            new Notice('Remotely Save is back online.');
        }
    }
}