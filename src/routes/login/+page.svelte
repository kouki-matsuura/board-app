<script lang="ts">
    import type {ActionData} from './$types';
    export let form: ActionData
</script>

 <h1 class="text-3xl font-bold mb-4 mt-10 text-center">ログイン画面</h1>
<div class="flex justify-center">
  <div class="w-1/2 p-6 bg-white rounded-lg shadow-lg">  
    {#if form?.message}
    <p class="text-red-500 mb-4">{form.message}</p>
    {/if}
    <form method="POST" action="?/login" class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-2">
        <label for="name" class="text-lg font-medium mb-1">名前</label>
        <input name="name" type="text" id="name" class="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"/>
    </div>
    <div class="flex flex-col space-y-2">
        <label for="password" class="text-lg font-medium mb-1">パスワード</label>
        <input name="password" type="password" id="password" class="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"/>
    </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors w-full md:w-auto">ログイン</button>
</form>
  </div>
</div>
