<script>
	import { regSchema } from './schema'
	let values = {}

	const submitHandler = () => {
		alert(JSON.stringify(values, null, 2))
	}
</script>

<div>
	<input type="text" name="name" bind:value={values.name} placeholder="Your name" />
</div>
<div>
	<input type="text" name="email" bind:value={values.email} placeholder="Your email" />
</div>
<div>
	<input type="text" name="username" bind:value={values.username} placeholder="Choose username" />
</div>
<div>
	<input type="password" name="password" bind:value={values.password} placeholder="Password" />
</div>
<div>
	<input
		type="password"
		name="passwordConfirm"
		bind:value={values.passwordConfirm}
		placeholder="Confirm password"
	/>
</div>
