<script lang='ts'>
	import Card from '../../atoms/Card/Card.svelte'
	type Type = 'message' | 'user-connected' | 'user-disconnected' | 'purchase'

	export let type: Type
	export let message: string
	export let volume: number
	export let unit: string
	export let owner: string
	export let author: string
	export let dateTime: string

	let response = ''

	if (type === 'purchase') {
		response = `${owner} transfered ownership to ${author} for ${volume} ${unit}.`
	} else if (type === 'user-connected') {
		response = `${author} joined the chat.`
	} else if (type === 'user-disconnected') {
		response = `${author} disconnected from the chat.`
	} else if (type === 'message') {
		response = message
	}
</script>

<Card class={`message-card ${$$props.class}`}>
	<p>
		{response}
	</p>
</Card>
<span class="time">{dateTime}</span>


<style>
	p {
		margin: 0;
		font-weight: 400;
	}
	:global(.card) {
		display: block;
	}
	
	.time {
		font-size: 12px;
		font-weight: 400;
		margin-left: var(--space-xs);
		margin-top: var(--space-xs);
		margin-bottom: var(--space-lg);
	}
</style>