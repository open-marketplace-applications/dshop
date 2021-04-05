<script lang="ts">
	// import VideoPlayer from 'svelte-video-player'

	// export let loop: boolean = false
	// export let poster: string = 'https://cdn.discordapp.com/attachments/818556348585082890/818594436849991740/Firefly_Short0.jpg'
	// export let url: string = 'https://cdn.discordapp.com/attachments/773470188141805607/817513458684657715/Firefly_Short_1.mp4'
</script>

<!-- 
<VideoPlayer
	poster={poster}
	source={url}
	color= 'var(--color-primary)'
	{loop}
	width="400px"
	height="400px"
/> -->

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
