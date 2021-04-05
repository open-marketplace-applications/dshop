<script lang="ts">
	import Message from '$lib/Message.svelte'

	import { Form, Button } from '../design-system/index'
  
	export let socket
	export let messages
	
  let new_message = ''
	const sendMessage = () => {
		console.log('sendMessage called 2:', new_message)
		// socket.emit("new_message", new_message )
        socket.emit("new_message", new_message, (data) => {
            console.log(data); // data will be "woot"
        });
    console.log("socket", socket)
	}
</script>

<h5 style="margin-top: var(--space-xl); margin-bottom: var(--space-sm)">Messages</h5>
<Form>
  <input 
    type="text" 
    placeholder="Drop a line" 
    bind:value={new_message}
  >
  <Button 
    callback={sendMessage} 
    type='submit'
  >
    Send message
  </Button>
</Form>
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