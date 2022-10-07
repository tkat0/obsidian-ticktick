<script lang="ts">
  import { setIcon } from 'obsidian';
  import { onMount } from 'svelte';

  export let iconId: string;
  export let size: number | undefined = undefined;

  let ref: HTMLElement;

  onMount(() => {
    setIcon(ref, iconId, size);
  });
</script>

<span bind:this={ref} class="first:inline-block" />
