<script lang="ts">
	import { onMount } from 'svelte'
    import { variables } from '$lib/variables';

    let WS_URL = variables.ws_url

	$: amount = 0

	let messages = []
	let socket = {
		emit: function (x, y) {
			console.log('not loadet yet.')
		}
	}

	onMount(async () => {
		console.log('onMount')


		// socket = io(WS_URL)
		socket = io("http://localhost:5000")
		// socket = io("https://oma-dshop.herokuapp.com/")

		console.log('socket', socket)

		socket.on('update', function(message) {
			let data = JSON.parse(message)
			console.log('update', data)
			if (data) {
				if (data.type === 'amount_update') {
					amount = data.amount
				} else if(data.type === 'connect_user') {
					console.log('set', data.message)
				} else {
					console.log('whatever type')
				}
			}
		})

	})
</script>
