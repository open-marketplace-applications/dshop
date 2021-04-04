<script>
	import Progress from '../Progress/Progress.svelte'
	import { Col, Row } from '../../design-system/index'
	export let amount = 200
	export let max = 500
</script>

<h6>Availability</h6>
<Progress {max} value={amount} />
<div class="labels">
	<span>{amount}</span>
	<span>{max}</span>
</div>

<style>
	h6 {
		margin-bottom: var(--space-sm);
	}

	.labels {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: var(--space-xxs);
		margin-bottom: var(--space-lg);
	}

	span {
		font-size: var(--space-sm);
		font-weight: bold;
		opacity: 0.5;
	}
</style>
