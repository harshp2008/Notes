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
            .setDesc('Empty field defaults to your GitHub username')
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
        console.log('Quartz Sync Plugin: Loaded');
        this.addRibbonIcon('paper-plane', 'Run Quartz Sync', () => {
            new CommitModal(this.app, (result) => {
                this.runSync(result);
            }).open();
        });
    }

    async runSync(userMsg) {
        // IMPORTANT: Verify this ID matches your folder name in .obsidian/plugins/
        const pluginId = 'remotely-save'; 
        const plugins = this.app.plugins;
        const projectPath = 'C:/Users/harsh/OneDrive/Documents/GITHUB PROJECTS/Notes';

        console.log('--- Sync Process Started ---');
        console.log(`Working Directory: ${projectPath}`);

        try {
            if (plugins.enabledPlugins.has(pluginId)) {
                console.log(`Disabling plugin: ${pluginId}`);
                await plugins.disablePluginAndSave(pluginId);
                new Notice('Syncing... Editor stabilized.');
            } else {
                console.log(`Plugin ${pluginId} was already disabled or not found.`);
            }

            console.log('Fetching GitHub username...');
            let gitUser = 'Harsh';
            try {
                const { stdout: gitUserRaw } = await execPromise('git config user.name', { cwd: projectPath });
                gitUser = gitUserRaw.trim() || 'Harsh';
                console.log(`Username found: ${gitUser}`);
            } catch (e) {
                console.error('Failed to get git user.name, using fallback.');
            }

            const finalMsg = userMsg.trim() !== '' ? userMsg : `commit from ${gitUser}`;
            console.log(`Executing: npx quartz sync -m "${finalMsg}"`);

            const { stdout, stderr } = await execPromise(`npx quartz sync -m "${finalMsg}"`, { cwd: projectPath });
            
            console.log('Quartz Sync Output:', stdout);
            if (stderr) console.error('Quartz Sync Errors:', stderr);
            
            new Notice('Quartz Sync Complete!');

        } catch (e) {
            console.error('CRITICAL SYNC ERROR:', e);
            new Notice(`Sync failed: ${e.message}`);
        } finally {
            console.log(`Attempting to re-enable: ${pluginId}`);
            if (plugins.manifests[pluginId]) {
                await plugins.enablePluginAndSave(pluginId);
                console.log(`${pluginId} successfully re-enabled.`);
                new Notice('Backup system back online.');
            } else {
                console.error(`ERROR: Plugin ID "${pluginId}" not found in manifests. Check your spelling.`);
            }
            console.log('--- Sync Process Finished ---');
        }
    }
}