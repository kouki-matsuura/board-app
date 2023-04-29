<script lang="ts">
  import Card, {
    Content,
    Actions,
  } from '@smui/card';
  import { Label } from '@smui/button';
    export let id : number;
    export let content: string;
</script>

<div class="card-container block bg-white shadow-md rounded-md p-4 transition duration-300 hover:bg-gray-100 mb-4">
  <Card width="800px">
    <Content class="text-lg font-bold mb-2">{content}</Content>
    <a href={`detail/${id}`}>
      <Actions fullBleed>
        <Label>スレッドの詳細を見る</Label>
        <i class="material-icons" aria-hidden="true">→</i>
      </Actions>
    </a>
  </Card>
</div>



