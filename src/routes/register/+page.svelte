<script lang="ts">
    import type { ActionData } from "./$types"
    export let form: ActionData

    
</script>
<h1 class="text-3xl font-bold text-center mt-10 mb-4">ユーザー登録</h1>
<div class="flex justify-center">
  <div class="w-1/2 bg-white p-6 rounded-lg">
    {#if form?.message}
      <p class="text-red-500 mb-4 text-center">{form?.message}</p>
    {/if}
    
    <form method="post" action="?/register" class="flex flex-col space-y-4">
  <div class="flex flex-col space-y-2">
    <label for="name" class="text-lg font-medium mb-1">名前</label>
    <input name="name" type="text" id="name" class="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"/>
  </div>
  <div class="flex flex-col space-y-2">
    <label for="password" class="text-lg font-medium mb-1">パスワード</label>
    <input name="password" type="password" id="password" class="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"/>
  </div>
  <div class="flex flex-col space-y-2">
    <label for="password_confirm" class="text-lg font-medium mb-1">パスワードの確認</label>
    <input name="password_confirm" type="password" id="password_confirm" class="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"/>
  </div>
  <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors">登録する</button>
</form>

  </div>
</div>



