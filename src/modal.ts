import { App, MarkdownView, Modal, TFile } from 'obsidian';

import { generateTikTickCreateTaskTitle, generateTikTickCreateTaskURL } from './model';
import type { Task } from './model';
import type { TickTickPluginSettings } from './setting';
import CreateTaskModalComponent from './views/CreateTaskModal.svelte';

export class CreateTaskModal extends Modal {
  task: Task;

  constructor(app: App, view: MarkdownView, file: TFile, settings: TickTickPluginSettings) {
    super(app);

    const content = view.editor.getSelection();

    this.task = {
      title: generateTikTickCreateTaskTitle(file.basename, file.path, app.vault.getName()),
      content,
      list: settings.defaultList,
      tags: settings.defaultTags,
    };
  }

  onOpen() {
    new CreateTaskModalComponent({
      target: this.contentEl,
      props: {
        task: this.task,
        onCreateClick: (task: Task) => {
          this.onCreate(task);
        },
      },
    });
  }

  onClose() {
    this.contentEl.empty();
  }

  onCreate(task: Task) {
    // open url
    const url = generateTikTickCreateTaskURL(task);
    console.debug('create TickTick Task:', url);
    window.open(url);
    this.close();
  }
}
