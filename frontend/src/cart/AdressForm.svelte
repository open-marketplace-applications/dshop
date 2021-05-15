<script>
	import { Input, Form } from '../design-system/index'
	import { getCountries } from '../cart/countries'

	let counties = getCountries()
	export let values

	const submitHandler = () => {
		alert(JSON.stringify(values, null, 2))
	}
</script>

<h3>Lieferadresse</h3>
<Form>
	<Input
		type="text"
		name="first_name"
		label="Vorname"
		bind:value={values.first_name}
		placeholder="Vorname"
	/>
	<Input
		type="text"
		name="last_name"
		label="Nachname"
		bind:value={values.last_name}
		placeholder="Nachname"
	/>
	<Input type="text" name="email" label="Email" bind:value={values.email} placeholder="Email" />
	<Input
		type="text"
		name="address"
		label="Address"
		bind:value={values.address}
		placeholder="Straße, Hausnummer"
	/>
	<Input
		type="text"
		name="zipcode"
		label="Postleitzahl"
		bind:value={values.zip_code}
		placeholder="PLZ"
	/>
	<Input type="text" name="city" label="Stadt" bind:value={values.city} placeholder="Stadt" />
	<select bind:value={values.country}>
		{#each counties as country}
			<option value={country.name}>
				{country.name}
			</option>
		{/each}
	</select>
</Form>

<style>
	h3 {
		margin-bottom: 20px;
	}
</style>
