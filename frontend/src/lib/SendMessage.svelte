<script>
  import { Input, Form, Button } from '../design-system/index'
  
  export let socket
  
  $: new_message = ''

	const sendMessage = () => {
    socket.emit("new_message", new_message, (data) => {
      console.log(data); // data will be "woot"
    })
    new_message = ''
	}
</script>

<Form onSubmit={sendMessage}>
  <Input 
    type="text" 
    name="new-message"
    placeholder="Drop a line here"
    min={1}
    bind:value={new_message}
  />
  <Button type='submit' block size='lg' class='m-b-lg'>
    Send message
  </Button>
</Form>

<style>
  :global(.input) {
    margin-bottom: 0 !important;
  }

  :global(input) {
    border-radius: var(--radius) var(--radius) 0 0  !important;
  }

  :global(form button) {
    border-radius: 0 0 var(--radius) var(--radius) !important;
  }
</style>