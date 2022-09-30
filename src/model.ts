// https://support.ticktick.com/hc/en-us/articles/360007930051-TickTick-iOS-URL-Scheme
export interface Task {
  title: string;
  content: string;
  list?: string;
  tags?: string;
}

export const generateTikTickCreateTaskURL = (task: Task): string => {
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

export const generateTikTickCreateTaskContent = (filePath: string, vault: string): string => {
  let content = '';

  const url = `obsidian://open?vault=${vault}&file=${filePath}`;

  content += `[obsidian file](${encodeURIComponent(url)})`;
  content += '\n\n';
  return content;
};
