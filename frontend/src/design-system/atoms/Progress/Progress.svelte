<script lang='ts'>
	type Size = 'sm' | 'md' | 'lg'

	export let label: string
	export let max: number
	export let value: number
	export let showValue: boolean = true
	export let size: Size = 'md'
</script>

<div class={`progress
		${size}
		${showValue ? 'showValue' : ''}
		${$$props.class}`
	} >
	<div class="labels">
		{#if label} 
			<span class="label">{label}</span>
		{/if}
		{#if showValue}
			<span class="values">
				{value} <span class="total">/ {max}</span>
			</span>
		{/if}
	</div>
	<progress {max} {value} class={size} />
</div>

<style lang="scss">
	.progress {
		width: 100%;
		margin-bottom: var(--space-md);
		
		.labels {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: var(--space-xxs);

			span {
				font-size: var(--space-md);
				font-weight: bold;
			}
			.total {
				opacity: .25;
			}
		}
	}

	progress {
		position: relative;
	}

	progress[value] {
		-webkit-appearance: none;
		position: relative;
		appearance: none;
		width: 100%;
		height: var(--space-lg);
	}

	progress[value].sm {
		height: var(--space-md);
	}

	progress[value].lg {
		height: var(--space-xl);

		&::-webkit-progress-value {
			background-size: 60px 32px, 100% 100%, 100% 100%;
		}
	}

	progress[value]::-webkit-progress-bar {
		position: relative;
		background-color: var(--color-element);
		border-radius: calc(var(--radius) / 4);
		/* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset; */
		height: inherit;
	}

	progress[value]::-webkit-progress-value {
		position: relative;
		height: inherit;

		background-image: -webkit-linear-gradient(
				-45deg,
				transparent 33%,
				rgba(0, 0, 0, 0.1) 33%,
				rgba(0, 0, 0, 0.1) 66%,
				transparent 66%
			),
			-webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
			-webkit-linear-gradient(left, var(--color-primary), var(--color-primary-light));

		border-radius: calc(var(--radius) / 4);
		background-size: 35px 25px, 100% 100%, 100% 100%;

		-webkit-animation: animate-stripes 5s linear infinite;
		animation: animate-stripes 5s linear infinite;
	}
</style>
