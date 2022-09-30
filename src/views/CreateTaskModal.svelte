<script lang="ts">
  import type { Task } from 'src/model';

  export let task: Task;
  export let onCreateClick: () => void;
</script>

<h1 class="mb-5 text-2xl">Create a new task to TickTick</h1>

<form>
  <div class="mb-5">
    <label class="mb-3 block font-medium" for="title">Title</label>
    <input class="block w-full" type="text" value={task.title} />
  </div>

  <div class="mb-5">
    <label class="mb-3 block font-medium" for="description">Description</label>
    <textarea
      id="description"
      rows="10"
      class="block w-full px-[14px] py-[5px] focus:border-interactive-accent"
      value={task.content}
    />
  </div>

  <button class="mod-cta w-full px-[20px] py-[6px]" on:click={onCreateClick}>Create and Open TickTick</button>
</form>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
