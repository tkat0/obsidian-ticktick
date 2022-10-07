<script lang="ts">
  import { Notice } from 'obsidian';
  import type { Task } from 'src/model';

  import Icon from './Icon.svelte';

  export let task: Task;
  export let onCreateClick: (task: Task) => void;

  function onCopyClick() {
    navigator.clipboard.writeText(task.title);
    new Notice('Copied task title to clipboard');
  }
</script>

<h1 class="mb-5 text-2xl">Create a new task to TickTick</h1>

<form>
  <div class="mb-5">
    <label class="mb-1 block font-medium" for="title">Title</label>
    <p class="mb-3 text-sm ">Default: The link to the current note</p>
    <div class="flex items-center">
      <input class="grow" type="text" bind:value={task.title} />
      <div class="p-1">
        <button type="button" class="p-1" on:click={onCopyClick}>
          <Icon iconId="ClipboardCopy" size={16} />
        </button>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <label class="mb-1 block font-medium" for="description">Description</label>
    <p class="mb-3 text-sm ">Default: The selected strings</p>
    <textarea
      id="description"
      rows="10"
      class="block w-full px-[14px] py-[5px] focus:border-interactive-accent"
      bind:value={task.content}
    />
  </div>

  <div class="mb-5">
    <label class="mb-3 block font-medium" for="description">List</label>
    <input class="block w-full" type="text" bind:value={task.list} />
  </div>

  <div class="mb-5">
    <label class="mb-1 block font-medium" for="description">Tags</label>
    <p class="mb-3 text-sm ">The prefix `#` is not necessary (e.g. "obsidian")</p>
    <input class="block w-full" type="text" bind:value={task.tags} />
  </div>

  <button
    type="button"
    class="mod-cta mt-3 w-full px-[20px] py-[6px]"
    on:click={() => {
      onCreateClick(task);
    }}>Create and Open TickTick</button
  >
</form>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
