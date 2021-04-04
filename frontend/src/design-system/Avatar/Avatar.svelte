<script lang="ts">
	type avatarSize = 'md' | 'sm' | 'lg'

	export let imageUrl: string
	export let size: avatarSize = 'md'
</script>

<div class={`avatar-image ${size}`} style="background-image: url('{imageUrl}')" />

<style>
	.avatar-image {
		border-radius: 100%;
		border: var(--border);
		margin-right: var(--space-xs);
		background-size: cover;
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
		--dimension: calc(100vw - (var(--space-lg) * 2));
		width: var(--dimension);
		height: var(--dimension);
	}

	@media (min-width: 720px) {
		.avatar-image.lg {
			height: 400px;
			width: 400px;
		}
	}
</style>
