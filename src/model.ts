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
  if (task.tags) {
    // NOTE: I'm not sure the way to specify multiple tags.
    //  If I specify a comma-separated string like `a,b`, it creates three tags `a`, `b`, and `a,b`.
    //  I'm asking TickTick.
    url += `&tags=${encodeURIComponent(task.tags)}`;
  }

  // TODO: doesn't work
  url += `&x-success=${encodeURIComponent(`obsidian://ticktick`)}`;

  return url;
};

export const generateTikTickCreateTaskTitle = (title: string, filePath: string, vault: string): string => {
  const url = `obsidian://open?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(filePath)}`;

  return `[${title}](${url})`;
};
