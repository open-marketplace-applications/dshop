<script>
  export let socket

  import { Form, Button } from '../design-system/index'

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