import { App, PluginSettingTab, Setting } from 'obsidian';

import type TickTickPlugin from './main';

export interface TickTickPluginSettings {
  defaultTags: string;
  defaultList: string;
}

export const DEFAULT_SETTINGS: TickTickPluginSettings = {
  defaultTags: '',
  defaultList: 'Inbox',
};

export class TickTickPluginSettingTab extends PluginSettingTab {
  plugin: TickTickPlugin;

  constructor(app: App, plugin: TickTickPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();
    containerEl.createEl('h2', { text: 'TickTick Settings' });

    containerEl.createEl('h3', { text: 'Create a new task' });

    new Setting(containerEl)
      .setName('Default Tags')
      .setDesc('The default tags for a new task')
      .addText((toggle) => {
        toggle.setValue(this.plugin.settings.defaultTags).onChange(async (value) => {
          this.plugin.settings.defaultTags = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName('Default List')
      .setDesc('The default list for a new task')
      .addText((toggle) => {
        toggle.setValue(this.plugin.settings.defaultList).onChange(async (value) => {
          this.plugin.settings.defaultList = value;
          await this.plugin.saveSettings();
        });
      });
  }
}
