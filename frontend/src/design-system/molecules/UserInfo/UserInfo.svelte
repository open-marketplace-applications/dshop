<script lang="ts">
	export let image: string
	export let name: string

	import Avatar from '../../atoms/Avatar/Avatar.svelte'
</script>

<div class="user-info">
	<Avatar imageUrl={image} />
	<span>{name}</span>
</div>

<style>
	.user-info {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
	}
</style>
