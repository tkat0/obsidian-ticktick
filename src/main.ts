import { App, Plugin } from 'obsidian';
import type { PluginManifest } from 'obsidian';

import { CreateTaskModal } from './modal';
import { TickTickPluginSettingTab } from './setting';
import type { TickTickPluginSettings } from './setting';
import { DEFAULT_SETTINGS } from './setting';

export default class TickTickPlugin extends Plugin {
  settings: TickTickPluginSettings;

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new TickTickPluginSettingTab(this.app, this));

    this.addCommand({
      id: 'add-task',
      name: 'Create Task',
      checkCallback: (checking: boolean) => {
        const file = this.app.workspace.getActiveFile();

        if (file) {
          if (!checking) {
            new CreateTaskModal(this.app, file).open();
          }
          return true;
        }

        return false;
      },
    });
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  saveSettings = async () => {
    await this.saveData(this.settings);
  };
}
