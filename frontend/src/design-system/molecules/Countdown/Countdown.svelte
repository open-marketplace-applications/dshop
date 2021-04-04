<script lang="ts">
	export let countdown: string = 'May 24, 2021 15:37:25'
	export let block: boolean = false
	let countDownDate = new Date(countdown).getTime()

	let days = 0
	let hours = 0
	let minutes = 0
	let seconds = 0

	let x = setInterval(function () {
		// Get today's date and time
		let now = new Date().getTime()

		// Find the distance between now and the count down date
		let distance = countDownDate - now

		// Time calculations for days, hours, minutes and seconds
		days = Math.floor(distance / (1000 * 60 * 60 * 24))
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		seconds = Math.floor((distance % (1000 * 60)) / 1000)

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x)
		}
	}, 1000)
</script>

<div class={`countdown ${block ? 'block' : ''} ${$$props.class}`}>
	<div class="container">

		{#if days > 0}
			<div class="timer">
				<h4>{days}</h4>
				<span>Days</span>
			</div>
		{/if}
		{#if hours > 0 || days > 0}
			<div class="timer">
				<h4>{hours}</h4>
				<span>Hours</span>
			</div>
		{/if}
		{#if minutes > 0 || hours > 0}
			<div class="timer">
				<h4>{minutes}</h4>
				<span>Minutes</span>
			</div>
		{/if}
		{#if seconds > 0 || minutes > 0}
			<div class="timer">
				<h4>{seconds}</h4>
				<span>Seconds</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.countdown {
		display: inline-block;
		background: var(--color-element-light);
		border: var(--border);
		border-radius: var(--radius);
		padding: var(--space-xs);
	}

	.countdown.block {
		display: block;
	}
	
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.timer {
		margin: 0 var(--space-sm);
		text-align: center;
	}

	.timer span {
		font-size: var(--space-sm);
	}

	.timer h4 {
		margin-bottom: 0;
	}
</style>
