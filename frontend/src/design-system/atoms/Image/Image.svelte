<script lang="ts">
	export let imageUrl: string
</script>

<div class="image" style="background-image: url('{imageUrl}')" />

<style>
	.image {
		--dimension: calc(100vw - (var(--space-lg) * 2));
		background-size: cover;
		background-position: center;
		width: var(--dimension);
		height: var(--dimension);
		margin: 0 auto;
		margin-bottom: var(--space-xl);
		border-radius: var(--radius);
	}

	@media (min-width: 720px) {
		.image {
			width: 450px;
			height: 450px;
		}
	}
</style>
