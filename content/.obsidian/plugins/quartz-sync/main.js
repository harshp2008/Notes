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
        
        let wasEnabled = false;
        try {
            // 1. [TEST] Disable backup disabled for diagnostic
            /*
            if (plugins.enabledPlugins.has(pluginId)) {
                wasEnabled = true;
                console.log('[QuartzSync] Pausing Remotely Save...');
                await plugins.disablePlugin(pluginId);
            }
            */
            
            // 2. Prepare Command
            const gitUser = await this.getGitUser(projectPath);
            const finalMsg = userMsg.trim() || `sync from ${gitUser}`;
            const cmd = `npx quartz sync -m --no-pull "${finalMsg}"`;

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

                // 4. [TEST] Re-enable disabled for diagnostic
                /*
                console.log('[QuartzSync] Sync finished. Attempting recovery...');
                
                let attempts = 0;
                const maxAttempts = 3;
                
                const tryEnable = async () => {
                    attempts++;
                    console.log(`[QuartzSync] Attempt ${attempts}: Re-enabling ${pluginId}...`);
                    
                    try {
                        if (wasEnabled) {
                            await plugins.enablePlugin(pluginId);
                            console.log('[QuartzSync] SUCCESS: Remotely Save is back.');
                            new Notice('Backup active again.');
                        }
                        console.log('--- SYNC FINISHED ---');
                    } catch (e) {
                        console.error(`[QuartzSync] Attempt ${attempts} error:`, e);
                        if (attempts < maxAttempts) {
                            const nextDelay = 4000 * attempts;
                            setTimeout(tryEnable, nextDelay);
                        } else {
                            new Notice('Could not re-enable backup automatically.');
                        }
                    }
                };

                setTimeout(tryEnable, 3000);
                */
            });

        } catch (e) {
            console.error('Setup Error:', e);
            // if (wasEnabled) await plugins.enablePlugin(pluginId);
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