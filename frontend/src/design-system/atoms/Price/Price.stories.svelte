<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Price from './Price.svelte'
</script>

<Meta
	title="💧 Atoms / Price"
	component={Price}
	argTypes={{
		value: {
			control: {
				type: 'number'
			}
		},
		unit: {
			control: {
				type: 'select',
				options: ['IOTA', 'MI', '$', '€']
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
	<Price {...args} />
</Template>

<Story name="Empty price" />

<Story
	name="Small one"
	args={{
		value: 42,
		unit: 'IOTA'
	}}
/>

<Story
	name="More Medium"
	args={{
		value: 42000,
		unit: 'MI'
	}}
/>

<Story
	name="Lot's of Dollars"
	args={{
		value: 42000000,
		unit: '$'
	}}
/>

<Story
	name="Even more Euros"
	args={{
		value: 42000000000,
		unit: '€'
	}}
/>
