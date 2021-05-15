<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Image from './Image.svelte'

	const beeImage =
		'https://cdn.discordapp.com/attachments/818556348585082890/818594410815553556/Bee_Short0.jpg'
	const chrysalisImage =
		'https://cdn.discordapp.com/attachments/818556348585082890/818594418201722960/Chrysalis_Short0.jpg'
	const fireflyImage =
		'https://cdn.discordapp.com/attachments/818556348585082890/818594436849991740/Firefly_Short0.jpg'
</script>

<Meta
	title="💧 Atoms / Image"
	component={Image}
	argTypes={{
		imageUrl: { control: 'text' },
		class: {
			control: {
				type: 'text'
			}
		}
	}}
/>

<Template let:args>
	<Image {...args} />
</Template>

<Story
	name="Bee"
	args={{
		imageUrl: beeImage
	}}
/>

<Story
	name="Chrysalis"
	args={{
		imageUrl: chrysalisImage
	}}
/>

<Story
	name="Firefly"
	args={{
		imageUrl: fireflyImage
	}}
/>
