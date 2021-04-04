<script lang="ts">
	export let imageUrl: string
	export let name: string

	import Avatar from '../Avatar/Avatar.svelte'
</script>

<div class="user-info">
	<Avatar {imageUrl} />
	<span>{name}</span>
</div>

<style>
	.user-info {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
	}
</style>
