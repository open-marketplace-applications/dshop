<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Message from './Message.svelte'
</script>

<Meta
	title="💧 Atoms / Message"
	component={Message}
	argTypes={{
		type: {
			control: {
				type: 'select',
				options: ['user-connected', 'user-disconnected', 'purchase']
			}
		},
		volume: {
			control: {
				type: 'number'
			}
		},
		unit: {
			control: {
				type: 'text'
			}
		},
		owner: {
			control: {
				type: 'string'
			}
		},
		author: {
			control: {
				type: 'string'
			}
		},
		dateTime: {
			control: {
				type: 'date'
			}
		},
		class: {
			control: {
				type: 'text'
			}
		}
	}}
/>

<Template let:args>
	<Message {...args} />
</Template>

<Story name="Empty Message" />

<Story
	name="Someone purchased something"
	args={{
		type: 'purchase',
		volume: 420000,
		unit: 'MI',
		owner: '@iotaben',
		author: '@johanna',
		dateTime: '04.04.2021 at 10:42am'
	}}
/>

<Story
	name="User connected"
	args={{
		type: 'user-connected',
		author: '@johanna',
		dateTime: '04.04.2021 at 10:42am'
	}}
/>

<Story
	name="User disconnected"
	args={{
		type: 'user-disconnected',
		author: '@johanna',
		dateTime: '04.04.2021 at 10:42am'
	}}
/>

<Story
	name="Someone says something"
	args={{
		type: 'message',
		message: 'Just dropping you folks a line, how are you doing?',
		author: '@johanna',
		dateTime: '04.04.2021 at 10:42am'
	}}
/>
