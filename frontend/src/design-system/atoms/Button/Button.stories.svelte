<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Button from './Button.svelte'

	const mockButton = {
		label: '👆 Click me'
	}
</script>

<Meta
	title="💧 Atoms / Button"
	component={Button}
	argTypes={{
		label: {
			control: {
				type: 'text'
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['sm', 'md', 'lg']
			}
		},
		block: {
			control: {
				type: 'boolean'
			}
		},
		rounded: {
			control: {
				type: 'boolean'
			}
		},
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary']
			}
		},
		type: {
			control: {
				type: 'select',
				options: ['button', 'submit']
			}
		},
		link: {
			control: {
				type: 'text'
			}
		},
		callback: { action: 'onClick' },
		class: {
			control: {
				type: 'text'
			}
		}
	}}
/>

<Template let:args>
	<Button {...args} />
</Template>

<Story
	name="Small Button"
	args={{
		label: mockButton.label,
		size: 'sm'
	}}
/>

<Story
	name="Medium Button"
	args={{
		label: mockButton.label,
		size: 'md'
	}}
/>

<Story
	name="Large Button"
	args={{
		label: mockButton.label,
		size: 'lg'
	}}
/>

<Story
	name="Primary Button"
	args={{
		label: mockButton.label
	}}
/>

<Story
	name="Secondary Button"
	args={{
		label: mockButton.label,
		color: 'secondary'
	}}
/>

<Story
	name="Rounded Button"
	args={{
		label: mockButton.label,
		color: 'secondary',
		rounded: true
	}}
/>

<Story
	name="Block Button"
	args={{
		label: mockButton.label,
		color: 'secondary',
		block: true
	}}
/>
