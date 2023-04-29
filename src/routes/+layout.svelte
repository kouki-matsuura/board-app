<script lang="ts">
  import { page } from '$app/stores'
  import "../styles.css";
</script>
<header class="bg-gray-800">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
      <div class="text-white text-xl font-bold">掲示板アプリ</div>
      <div class="flex justify-end items-center">
        {#if !$page.data.user}
            <a href="/login" class="text-gray-300 hover:text-gray-400 mr-4">ログイン</a>
            <a href="/register" class="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">新規登録</a>
        {:else}
            <form action="/logout?/logout" method="POST">
                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors">ログアウト</button>
            </form>
        {/if}
      </div>
    </div>
  </header>
<slot />

<style>header {
    background-color: #1F2937;
  }
  
  header a {
    color: #E5E7EB;
  }
  
  header a:hover {
    color: #9CA3AF;
  }
  
  header button {
    background-color: #60A5FA;
    color: #F3F4F6;
  }
  
  header button:hover {
    background-color: #2563EB;
  }
  

</style>