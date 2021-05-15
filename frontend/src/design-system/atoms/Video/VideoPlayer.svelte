<script lang="ts">
	import VideoPlayer from 'svelte-video-player'

	export let loop: boolean
	export let poster: string
	export let url: string
</script>

<VideoPlayer
	{poster}
	source={url}
	{loop}
	color="var(--color-primary)"
	width="400px"
	height="400px"
/>

<style>
	:global(.aspect) {
		width: 400px !important;
		height: 400px !important;
		padding: 0 !important;
		overflow: hidden !important;
	}
	:global(.aspect > div) {
		width: inherit !important;
	}
	:global(.poster) {
		width: inherit !important;
	}
</style>
