<script lang="ts">
	import { Section, Image } from '../../design-system/index'
	export let image: string
</script>

<Section>
	<div class="hero">
		<div class="artwork">
			<Image imageUrl={image} />
		</div>
	</div>
</Section>

<style>
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.artwork {
		width: 100%;
		/* margin: 0 var(--space-lg); */
	}

	:global(.artwork .aspect) {
		margin: 0 auto !important;
	}
</style>
