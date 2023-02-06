<script lang="ts">
    import {goto} from "$app/navigation";
	import type { PageData } from "./$types";
    export let data: PageData
</script>
<main>
   <h1>スレッド一覧</h1>
    <button type="button"  on:click={() => goto("/post")}>投稿する</button>
    {#each data.threads as thread }
        <div>
        {thread.content}
        <button type="button" on:click={() => goto(`/${thread.id}`)}>詳細を見る</button>
        </div>
    {/each}
</main>