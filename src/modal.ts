import { App, Modal, TFile } from 'obsidian';

import { generateTikTickCreateTaskContent, generateTikTickCreateTaskURL } from './model';
import type { Task } from './model';
import CreateTaskModalComponent from './views/CreateTaskModal.svelte';

export class CreateTaskModal extends Modal {
  task: Task;

  constructor(app: App, file: TFile) {
    super(app);
    this.task = {
      title: file.basename,
      content: generateTikTickCreateTaskContent(file.path, app.vault.getName()),
    };
  }

  onOpen() {
    new CreateTaskModalComponent({
      target: this.contentEl,
      props: {
        task: this.task,
        onCreateClick: () => {
          this.onCreate(this.task);
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
    console.debug('create Task:', url);
    window.open(url);
    this.close();
  }
}
