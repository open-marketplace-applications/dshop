<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Progress from './Progress.svelte'
</script>

<Meta
	title="💧 Atoms / Progress"
	component={Progress}
	argTypes={{
		label: {
			control: {
				type: 'text'
			}
		},
		showValue: {
			control: {
				type: 'boolean'
			}
		},
		value: {
			control: {
				type: 'number'
			}
		},
		max: {
			control: {
				type: 'number'
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['sm', 'md', 'lg']
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
	<Progress {...args} />
</Template>

<Story
	name="Progress Medium"
	args={{
		label: 'Medium sized',
		value: 42,
		max: 50
	}}
/>

<Story
	name="Progress Small"
	args={{
		label: 'Small one',
		size: 'sm',
		value: 42,
		max: 50
	}}
/>

<Story
	name="Progress Large"
	args={{
		label: 'Large one',
		size: 'lg',
		value: 42,
		max: 50
	}}
/>

<Story
	name="Label, but no Values"
	args={{
		label: 'Label, but no Values',
		showValue: false,
		value: 42,
		max: 50
	}}
/>

<Story
	name="Values but no Label"
	args={{
		value: 42,
		max: 50
	}}
/>

<Story
	name="Naked, no label no values"
	args={{
		showValue: false,
		value: 42,
		max: 50
	}}
/>
