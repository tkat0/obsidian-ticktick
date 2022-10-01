import { App, MarkdownView, Notice, Platform, Plugin } from 'obsidian';
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
      id: 'create-task',
      name: 'Create a Task of the current page',
      checkCallback: (checking: boolean) => {
        const file = this.app.workspace.getActiveFile();
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        const isMacOS = Platform.isDesktop && Platform.isMacOS;

        if (file && view) {
          if (!checking) {
            if (!isMacOS) {
              new Notice('Error: Unsupported platform');
              return;
            }
            new CreateTaskModal(this.app, view, file, this.settings).open();
          }
          return true;
        }

        return false;
      },
      hotkeys: [{ modifiers: ['Meta'], key: 't' }],
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
