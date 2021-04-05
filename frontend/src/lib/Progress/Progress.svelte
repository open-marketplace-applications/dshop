<script>
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	export let max = 100
	export let value = 25
</script>

<progress {max} {value} />

<style lang="scss">
	@-webkit-keyframes animate-stripes {
		100% {
			background-position: -100px 0px;
		}
	}

	@keyframes animate-stripes {
		100% {
			background-position: -100px 0px;
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

	progress[value]::-webkit-progress-bar {
		position: relative;
		background-color: var(--color-element);
		border-radius: calc(var(--radius) / 4);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset;
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
		background-size: 35px 20px, 100% 100%, 100% 100%;

		-webkit-animation: animate-stripes 5s linear infinite;
		animation: animate-stripes 5s linear infinite;
	}
</style>
