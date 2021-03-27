<script lang="ts">
	import Counter from '$lib/Counter.svelte';

	import { onMount } from 'svelte'

	let files: any;
	let ipfs: any;
	$: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(files);
		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}

	onMount(async () => {
		ipfs = window.IpfsApi('157.90.18.110', 4001) // Connect to IPFS
		console.log("ipfs", ipfs);
		let ping = ipfs.ping()
		console.log("ipfs ping", ping);
    })

	function upload() {
      const reader = new FileReader();
      reader.onloadend = function() {
        const buf = buffer.Buffer(reader.result) // Convert data into buffer
        ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
          if(err) {
            console.error(err)
            return
          }
          let url = `https://ipfs.io/ipfs/${result[0].hash}`
          console.log(`Url --> ${url}`)
          document.getElementById("url").innerHTML= url
          document.getElementById("url").href= url
          document.getElementById("output").src = url
        })
      }
      reader.readAsArrayBuffer(files[0]); // Read Provided File
    }
</script>

<main>
	<h1>Hello world!</h1>

	<label for="avatar">Upload a picture:</label>
	<input
		accept="image/png, image/jpeg"
		bind:files
		id="avatar"
		name="avatar"
		type="file"
	/>

	{#if files}
		<button on:click="{upload}">Upload</button>
		<h2>Selected files:</h2>
		{#each Array.from(files) as file}
			<p>{file.name} ({file.size} bytes) </p>
		{/each}
	{/if}	

	<Counter />

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
