<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Input from './Input.svelte'
</script>

<Meta
	title="💧 Atoms / Input"
	component={Input}
	argTypes={{
		name: {
			control: {
				type: 'text'
			}
		},
		label: {
			control: {
				type: 'text'
			}
		},
		type: {
			control: {
				type: 'select',
				options: ['text', 'email', 'password']
			}
		},
		value: {
			control: {
				type: 'text'
			}
		},
		placeholder: {
			control: {
				type: 'text'
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
	<Input {...args} />
</Template>

<Story
	name="Text Input"
	args={{
		name: 'input-text',
		label: 'Text Input',
		placeholder: 'Enter some text'
	}}
/>

<Story
	name="Email Input"
	args={{
		name: 'input-email',
		label: 'Email Input',
		placeholder: 'Enter your email'
	}}
/>

<Story
	name="Password Input"
	args={{
		name: 'input-password',
		label: 'Password Input',
		placeholder: 'Enter your password'
	}}
/>

<Story
	name="No Label"
	args={{
		name: 'input-no-label',
		placeholder: 'Enter your some text'
	}}
/>
