<script lang="ts">
	type avatarSize = 'md' | 'sm' | 'lg' | 'xl'

	export let imageUrl: string
	export let size: avatarSize = 'md'

	// TODO: Handle fallback if no image provided
</script>

<div 
	class={`avatar-image ${size}`} 
	style="background-image: url('{imageUrl}')"
/>

<style>
	.avatar-image {
		border-radius: 100%;
		margin-right: var(--space-xs);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.avatar-image.sm {
		height: var(--space-xl);
		width: var(--space-xl);
	}

	.avatar-image.md {
		height: var(--space-xxl);
		width: var(--space-xxl);
	}

	.avatar-image.lg {
		--dimension: calc(var(--space-xxl) + var(--space-xs));
		width: var(--dimension);
		height: var(--dimension);
	}
	.avatar-image.xl {
		--dimension: calc(100vw - (var(--space-lg) * 2));
		width: var(--dimension);
		height: var(--dimension);
	}

	@media (min-width: 720px) {		
		.avatar-image.xl {
			--dimension: calc((var(--space-xxxl) * 5));
			height: var(--dimension);
			width: var(--dimension);
		}
	}
</style>
