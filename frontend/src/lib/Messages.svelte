<script lang="ts">
  import SendMessage from './SendMessage.svelte'
  
	export let socket
	export let messages
</script>

<h5 style="margin-top: var(--space-xl); margin-bottom: var(--space-sm)">Messages</h5>
<SendMessage socket={socket} />
{#each messages.reverse() as message, i}
  <li>{message}</li>
  <!-- <Message
    type='user-connected' 
    author='@johnDoe'
    dateTime='04.01.2021 at 9:52am'
  />
  <Message 
    type='purchase' 
    volume={42000}
    unit='MI'
    owner='@iotaben'
    author='@johnDoe'
    dateTime='04.01.2021 at 9:42am'
  />
  <Message 
    type='user-disconnected' 
    author='@johnDoe'
    dateTime='04.01.2021 at 9:24am'
  /> -->
{/each}