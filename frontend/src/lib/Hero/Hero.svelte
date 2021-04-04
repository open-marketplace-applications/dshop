<script lang="ts">
	import { Section, Image } from '../../design-system/index'
</script>

<Section dark>
	<div class="hero">
		<div class="artwork">
			<Image
				imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F83%2FNeugierige-Katze.JPG%2F1280px-Neugierige-Katze.JPG&f=1&nofb=1"
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
</style>
