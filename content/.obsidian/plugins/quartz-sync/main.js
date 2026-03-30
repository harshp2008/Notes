const { Plugin, Notice } = require('obsidian');
const { exec } = require('child_process');

module.exports = class QuartzSyncPlugin extends Plugin {
    async onload() {
        this.addRibbonIcon('paper-plane', 'Run Quartz Sync', async () => {
            // Find your specific plugin ID (usually 'remotely-save')
            const pluginId = 'remotely-save'; 
            const plugins = this.app.plugins;

            try {
                // 1. Stop the file-lock conflict
                await plugins.disablePluginAndSave(pluginId);
                new Notice('Paused Remotely Save to prevent file locks.');

                new Notice('Starting Quartz Sync... check the web in a few minutes.');

                // 2. Execute the sync
                // Replace the path with your actual Quartz root folder
                const cmd = 'npx quartz sync -m "Updates from Obsidian"';
                const options = { cwd: 'C:/Users/harsh/OneDrive/Documents/GITHUB PROJECTS/Notes' };

                exec(cmd, options, async (error, stdout, stderr) => {
                    if (error) {
                        new Notice(`Sync Error: ${error.message}`);
                        console.error(stderr);
                    } else {
                        new Notice('Quartz Sync Complete!');
                    }

                    // 3. Bring the backup back online
                    await plugins.enablePluginAndSave(pluginId);
                    new Notice('Remotely Save is active again.');
                });
            } catch (e) {
                new Notice('Failed to toggle plugin. Check the ID.');
                console.error(e);
            }
        });
    }
}