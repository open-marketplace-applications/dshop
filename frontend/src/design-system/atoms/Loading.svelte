<script lang="ts">
	type Color = 'light' | 'dark'
	type Orientation = 'horizontal' | 'vertical'
	type Size = 'sm' | 'md' | 'lg' | 'xl'

	export let color: Color = 'dark'
	export let orientation: Orientation = 'horizontal'
	export let size: Size = 'md'
	export let label: string = ''
</script>

<div class={`loading ${orientation}`}>
	<div class={`loading-square ${color} ${orientation} ${size}`}>
		<div />
		<div />
	</div>
	<span>Loading...</span>
</div>

<style style="scss">
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loading.vertical {
	}

	.loading.horizontal {
		flex-direction: column;
	}

	.loading span {
		margin-left: var(--space-md);
		font-size: var(--space-sm);
		font-weight: bold;
	}

	.loading-square,
	.loading-square > div {
		position: relative;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.loading-square {
		display: block;
		font-size: 0;
	}

	.loading-square.light {
		color: #fff;
	}

	.loading-square.dark {
		color: var(--color-darker);
	}

	.loading-square > div {
		display: inline-block;
		float: none;
		background-color: currentColor;
		border: 0 solid currentColor;
	}

	.loading-square {
		width: 32px;
		height: 32px;
	}

	.loading-square > div:nth-child(1),
	.loading-square > div:nth-child(2) {
		position: absolute;
		left: 0;
		width: 100%;
	}

	.loading-square > div:nth-child(1) {
		top: -25%;
		z-index: 1;
		height: 100%;
		border-radius: 10%;
		-webkit-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
		-moz-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
		-o-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
		animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
	}

	.loading-square > div:nth-child(2) {
		bottom: -9%;
		height: 10%;
		background: #000;
		border-radius: 50%;
		opacity: 0.2;
		-webkit-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
		-moz-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
		-o-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
		animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
	}

	.loading-square.sm {
		width: 16px;
		height: 16px;
	}

	.loading-square.lg {
		width: 64px;
		height: 64px;
	}

	.loading-square.xl {
		width: 96px;
		height: 96px;
	}

	/*
 * Animations
 */
	@-webkit-keyframes square-jelly-box-animate {
		17% {
			border-bottom-right-radius: 10%;
		}
		25% {
			-webkit-transform: translateY(25%) rotate(22.5deg);
			transform: translateY(25%) rotate(22.5deg);
		}
		50% {
			border-bottom-right-radius: 100%;
			-webkit-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
			transform: translateY(50%) scale(1, 0.9) rotate(45deg);
		}
		75% {
			-webkit-transform: translateY(25%) rotate(67.5deg);
			transform: translateY(25%) rotate(67.5deg);
		}
		100% {
			-webkit-transform: translateY(0) rotate(90deg);
			transform: translateY(0) rotate(90deg);
		}
	}
	@-moz-keyframes square-jelly-box-animate {
		17% {
			border-bottom-right-radius: 10%;
		}
		25% {
			-moz-transform: translateY(25%) rotate(22.5deg);
			transform: translateY(25%) rotate(22.5deg);
		}
		50% {
			border-bottom-right-radius: 100%;
			-moz-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
			transform: translateY(50%) scale(1, 0.9) rotate(45deg);
		}
		75% {
			-moz-transform: translateY(25%) rotate(67.5deg);
			transform: translateY(25%) rotate(67.5deg);
		}
		100% {
			-moz-transform: translateY(0) rotate(90deg);
			transform: translateY(0) rotate(90deg);
		}
	}
	@-o-keyframes square-jelly-box-animate {
		17% {
			border-bottom-right-radius: 10%;
		}
		25% {
			-o-transform: translateY(25%) rotate(22.5deg);
			transform: translateY(25%) rotate(22.5deg);
		}
		50% {
			border-bottom-right-radius: 100%;
			-o-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
			transform: translateY(50%) scale(1, 0.9) rotate(45deg);
		}
		75% {
			-o-transform: translateY(25%) rotate(67.5deg);
			transform: translateY(25%) rotate(67.5deg);
		}
		100% {
			-o-transform: translateY(0) rotate(90deg);
			transform: translateY(0) rotate(90deg);
		}
	}
	@keyframes square-jelly-box-animate {
		17% {
			border-bottom-right-radius: 10%;
		}
		25% {
			-webkit-transform: translateY(25%) rotate(22.5deg);
			-moz-transform: translateY(25%) rotate(22.5deg);
			-o-transform: translateY(25%) rotate(22.5deg);
			transform: translateY(25%) rotate(22.5deg);
		}
		50% {
			border-bottom-right-radius: 100%;
			-webkit-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
			-moz-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
			-o-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
			transform: translateY(50%) scale(1, 0.9) rotate(45deg);
		}
		75% {
			-webkit-transform: translateY(25%) rotate(67.5deg);
			-moz-transform: translateY(25%) rotate(67.5deg);
			-o-transform: translateY(25%) rotate(67.5deg);
			transform: translateY(25%) rotate(67.5deg);
		}
		100% {
			-webkit-transform: translateY(0) rotate(90deg);
			-moz-transform: translateY(0) rotate(90deg);
			-o-transform: translateY(0) rotate(90deg);
			transform: translateY(0) rotate(90deg);
		}
	}
	@-webkit-keyframes square-jelly-box-shadow {
		50% {
			-webkit-transform: scale(1.25, 1);
			transform: scale(1.25, 1);
		}
	}
	@-moz-keyframes square-jelly-box-shadow {
		50% {
			-moz-transform: scale(1.25, 1);
			transform: scale(1.25, 1);
		}
	}
	@-o-keyframes square-jelly-box-shadow {
		50% {
			-o-transform: scale(1.25, 1);
			transform: scale(1.25, 1);
		}
	}
	@keyframes square-jelly-box-shadow {
		50% {
			-webkit-transform: scale(1.25, 1);
			-moz-transform: scale(1.25, 1);
			-o-transform: scale(1.25, 1);
			transform: scale(1.25, 1);
		}
	}
</style>
