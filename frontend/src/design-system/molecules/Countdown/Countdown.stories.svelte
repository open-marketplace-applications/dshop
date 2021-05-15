<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Countdown from './Countdown.svelte'
</script>

<Meta
	title="🌱 Molecules / Countdown"
	component={Countdown}
	argTypes={{
		countdown: {
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
	<Countdown {...args} />
</Template>

<Story name="Countdown default" />
