<script lang='ts'>
	import { Card } from '../design-system/index'
	type Type = 'user-connected' | 'user-disconnected' | 'purchase'

	export let message
	export let type: Type = 'purchase'
	export let volume: number = 42000
	export let unit: string = 'MI'
	export let owner: string = '@iotaBen'
	export let author: string = '@johnDoe'
	export let dateTime: string = '04.01.2021 at 10:42am'

	let response = ''

	if (type === 'purchase') {
		response = `${owner} transfered ownership to ${author} for ${volume} ${unit}.`
	} else if (type === 'user-connected') {
		response = `${author} joined the chat.`
	} else if (type === 'user-disconnected') {
		response = `${author} disconnected from the chat.`
	}
</script>

<Card>
	<p>
		{response}
	</p>
</Card>
<span class="time">{dateTime}</span>


<style>
	p {
		margin: 0;
	}
	:global(.card) {
		display: block;
	}
	
	.time {
		font-size: 12px;
		margin-left: var(--space-xs);
		margin-top: var(--space-xs);
		margin-bottom: var(--space-lg);
	}
</style>