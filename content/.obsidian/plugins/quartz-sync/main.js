const { Plugin, Notice, Modal, Setting } = require('obsidian');
const { exec } = require('child_process');

class CommitModal extends Modal {
    constructor(app, onSubmit) {
        super(app);
        this.onSubmit = onSubmit;
    }
    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h2', { text: 'Quartz Sync' });
        let msg = '';
        new Setting(contentEl).setName('Commit Message').addText(t => t.onChange(v => msg = v));
        new Setting(contentEl).addButton(b => b.setButtonText('Sync').setCta().onClick(() => {
            this.close();
            this.onSubmit(msg);
        }));
    }
    onClose() { this.contentEl.empty(); }
}

module.exports = class QuartzSyncPlugin extends Plugin {
    async onload() {
        console.log('Quartz Sync: Ready');
        this.addRibbonIcon('paper-plane', 'Run Quartz Sync', () => {
            new CommitModal(this.app, (m) => this.runSync(m)).open();
        });
    }

    async runSync(userMsg) {
        const pluginId = 'remotely-save'; 
        const plugins = this.app.plugins;
        const projectPath = 'C:/Users/harsh/OneDrive/Documents/GITHUB PROJECTS/Notes';

        console.log('--- SYNC START ---');
        
        try {
            // 1. Disable backup
            if (plugins.enabledPlugins.has(pluginId)) {
                console.log('Disabling Remotely Save...');
                await plugins.disablePluginAndSave(pluginId);
            }

            // 2. Prepare Command
            const gitUser = await this.getGitUser(projectPath);
            const finalMsg = userMsg.trim() || `sync from ${gitUser}`;
            const cmd = `npx quartz sync -m "${finalMsg}"`;

            // 3. Execute
            new Notice('Quartz Syncing... stay on this page.');
            console.log(`Running: ${cmd}`);

            exec(cmd, { cwd: projectPath }, async (error, stdout, stderr) => {
                console.log('STDOUT:', stdout);
                if (stderr) console.warn('STDERR:', stderr);

                if (error) {
                    new Notice(`Sync failed! Check console.`);
                    console.error('EXEC ERROR:', error);
                } else {
                    new Notice('Quartz Sync Complete!');
                }

                // 4. THE FIX: Wait for the "dust to settle"
                // This gives Windows/OneDrive/Git 2 seconds to release file locks
                console.log('Waiting 2s for file system to settle...');
                setTimeout(async () => {
                    console.log('Attempting re-enable...');
                    try {
                        await plugins.enablePluginAndSave(pluginId);
                        console.log('SUCCESS: Remotely Save is back.');
                        new Notice('Backup active again.');
                    } catch (e) {
                        console.error('Re-enable failed:', e);
                    }
                    console.log('--- SYNC FINISHED ---');
                }, 2000);
            });

        } catch (e) {
            console.error('Setup Error:', e);
            // Emergency fallback to turn it back on
            await plugins.enablePluginAndSave(pluginId);
        }
    }

    getGitUser(path) {
        return new Promise((resolve) => {
            exec('git config user.name', { cwd: path }, (err, stdout) => {
                resolve(stdout.trim() || 'Harsh');
            });
        });
    }
}