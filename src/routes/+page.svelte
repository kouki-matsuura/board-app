<script lang="ts">
    import {goto} from "$app/navigation";
	import type { PageData } from "./$types";
    import Thread from "$lib/Thread.svelte";
    export let data: PageData
</script>
<main class="max-w-2xl mx-auto p-4 flex-wrap items-center">
  <h1 class="text-3xl font-bold mb-4 w-full">スレッド一覧</h1>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4" 
          on:click={() => goto("/post")}>投稿する</button>
    <div class="w-full">
    {#each data.threads as thread }
       <Thread  id={thread.id} content={thread.content} />
    {/each}
    </div>
</main>