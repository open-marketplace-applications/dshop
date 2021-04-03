<div class='user-info'>
  <Avatar imageUrl={imageUrl} />
  <span>{name}</span>
</div>

<script lang='ts'>
  export let imageUrl: string
  export let name: string

  import Avatar from '../Avatar/Avatar.svelte'
</script>

<style>
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
</style>
