<script lang="ts">
	import { onMount } from 'svelte'
	
	export let loop: boolean
	export let poster: string
	export let url: string

	let MyVideoPlayer

	onMount(async () => {
		const module = await import('./VideoPlayer.svelte');
		MyVideoPlayer = module.default;
	})
</script>

<svelte:component
	this={MyVideoPlayer}
	loop={loop}
	url={url}
	poster={poster} 
/>
