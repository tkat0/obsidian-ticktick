import { App, PluginSettingTab } from 'obsidian';

import type TickTickPlugin from './main';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TickTickPluginSettings {}

export const DEFAULT_SETTINGS: TickTickPluginSettings = {};

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
  }
}
