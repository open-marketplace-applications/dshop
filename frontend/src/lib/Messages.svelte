<script>
  import SendMessage from './SendMessage.svelte'
  import { Message } from '../design-system/index'
	export let socket
	export let messages
</script>

<h5 style="margin-top: var(--space-xl); margin-bottom: var(--space-sm)">Messages</h5>
<SendMessage socket={socket} />
{#each messages.reverse() as message, i}
  <Message
    type='message'
    dateTime={'04.01.'}
    message={message}
  ></Message>
{/each}