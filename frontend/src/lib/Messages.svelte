<script>
	import SendMessage from './SendMessage.svelte'
	import { Message } from '../design-system/index'
	export let socket
	export let messages

	$: sorted = messages.sort(function (a, b) {
		return b.time - a.time
	})
</script>

<h5 style="margin-top: var(--space-xl); margin-bottom: var(--space-sm)">Messages</h5>
<SendMessage {socket} />
{#each sorted as message, i}
	<Message type="message" dateTime={message.time} message={message.message} user={message.user} />
{/each}
