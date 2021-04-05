<script lang="ts">
	import { Section, Image, Video } from '../../design-system/index'
</script>

<Section dark>
	<div class="hero">
		<div class="artwork">
			<!-- <Image
				imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F83%2FNeugierige-Katze.JPG%2F1280px-Neugierige-Katze.JPG&f=1&nofb=1"
			/> -->
			<Video 
				loop={true}
				poster='https://cdn.discordapp.com/attachments/818556348585082890/818594418201722960/Chrysalis_Short0.jpg'
				url='https://cdn.discordapp.com/attachments/773470188141805607/817513478213730334/Chrysalis_Short_1.mp4' 
			/>
		</div>
	</div>
</Section>

<style>
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.artwork {
		width: 100%;
		margin: 0 var(--space-lg);
	}

	:global(.artwork .aspect) {
		margin: 0 auto !important;
	}
</style>
