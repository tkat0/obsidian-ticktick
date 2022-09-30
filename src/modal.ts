import { App, Modal, Setting, TFile } from 'obsidian';

// https://support.ticktick.com/hc/en-us/articles/360007930051-TickTick-iOS-URL-Scheme
interface Task {
  title: string;
  content: string;
  list?: string;
  tags?: string;
}

const generateTikTickCreateTaskURL = (task: Task): string => {
  let url = 'ticktick://x-callback-url/v1/add_task?';
  url += `title=${encodeURIComponent(task.title)}`;
  if (task.content.length > 0) {
    url += `&content=${encodeURIComponent(task.content)}`;
  }
  if (task.list) {
    url += `&list=${encodeURIComponent(task.list)}`;
  }
  return url;
};

const generateTikTickCreateTaskContent = (file: TFile, vault: string): string => {
  let content = '';

  const url = `obsidian://open?vault=${vault}&file=${file.path}`;

  content += `[obsidian file](${encodeURIComponent(url)})`;
  content += '\n\n';
  return content;
};

export class CreateTaskModal extends Modal {
  task: Task;

  constructor(app: App, file: TFile) {
    super(app);
    this.task = {
      title: file.basename,
      content: generateTikTickCreateTaskContent(file, app.vault.getName()),
    };
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl('h1', { text: 'Create Task to TickTick' });

    new Setting(contentEl).setName('Title').addText((text) =>
      text.setValue(this.task.title).onChange((value) => {
        this.task.title = value;
      }),
    );

    // TODO: expand field. rewrite with svelte
    new Setting(contentEl).setName('Description').addTextArea((text) =>
      text.setValue(this.task.content).onChange((value) => {
        this.task.content = value;
      }),
    );

    new Setting(contentEl).addButton((btn) =>
      btn
        .setButtonText('Create')
        .setCta()
        .onClick(() => {
          this.close();
          this.onSubmit();
        }),
    );
  }

  onClose() {
    this.contentEl.empty();
  }

  onSubmit() {
    // open url
    const url = generateTikTickCreateTaskURL(this.task);
    console.debug('create Task:', url);
    window.open(url);
  }
}
