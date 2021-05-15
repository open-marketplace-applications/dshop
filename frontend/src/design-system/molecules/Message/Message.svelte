<script lang="ts">
	import Card from '../../atoms/Card/Card.svelte'
	type Type = 'message' | 'user-connected' | 'user-disconnected' | 'purchase'

	export let type: Type
	export let message: string
	export let volume: number | null
	export let unit: string | null
	export let owner: string | null
	export let author: string | null
	export let dateTime: string | null
	export let user: string | null

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
		{message}
	</p>
</Card>
<span class="time">@{user} - {new Date(dateTime).toLocaleString()}</span>

<style>
	p {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
	}

	:global(.card) {
		display: block;
		padding: var(--space-xs) !important;
	}

	.time {
		font-size: 12px;
		font-weight: 400;
		margin-left: var(--space-xs);
		margin-top: var(--space-xs);
		margin-bottom: var(--space-lg);
	}
</style>
