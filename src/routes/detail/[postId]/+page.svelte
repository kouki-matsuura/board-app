<script lang="ts">
    import type {  ActionData, PageData } from "./$types";
    export let data: PageData
    export let form: ActionData
    type comment = {
    user: {
        name: string
    }
    content: string
    created_at: Date
    }

    const threadAuthor : string = data.user.name
    const threadContent : string = data.threadDetail.content
    const threadCreatedAt: Date = data.threadDetail.created_at
    const comments : comment[] = data.threadDetail.Comment
</script>
  
  <main class="max-w-2xl mx-auto p-4">
    <div class="my-4">
        <a href="/" class="text-blue-500 hover:text-blue-700">&lt; 一覧に戻る</a>
      </div>
    <h1 class="text-3xl font-bold mb-4">スレッド詳細</h1>
    <h2 class="text-xl font-bold mb-2">{threadContent}</h2>
    <p class="text-gray-600 mb-4">作成者：{threadAuthor} 作成日時：{threadCreatedAt}</p>
    <h2 class="text-xl font-bold mb-2">コメント</h2>
    {#if comments.length}
      <div class="space-y-4">
        {#each comments as comment}
          <div class="bg-white shadow-md rounded-md p-4">
            <p class="text-gray-600">名前：{comment.user.name}</p>
            <p class="text-gray-600">日時：{comment.created_at}</p>
            <p class="text-gray-800 mt-2">{comment.content}</p>
          </div>
        {/each}
      </div>
    {:else}
      <p>コメントはありません</p>
    {/if}
    
    <div class="my-4">
      {#if form?.message}
        <p class="text-red-500">{form.message}</p>
      {/if}
    </div>
    <form method="POST" action="?/comment" class="border-t border-gray-300 pt-4 mt-4">
      <input name="comment" type="text" class="w-9/12 py-1 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="コメントを入力してください" required />
      <button type="submit" class="w-1/12 bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded">送信</button>
    </form>
  </main>
