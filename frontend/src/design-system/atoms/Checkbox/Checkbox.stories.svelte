<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Checkbox from './Checkbox.svelte'
</script>

<Meta
	title="💧 Atoms / Checkbox"
	component={Checkbox}
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
		checked: {
			control: {
				type: 'boolean'
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
	<Checkbox {...args}>👆 Click me to toggle</Checkbox>
</Template>

<Story
	name="Unchecked"
	args={{
		name: 'example-1'
	}}
/>

<Story
	name="Checked"
	args={{
		name: 'example-1',
		checked: true
	}}
/>
