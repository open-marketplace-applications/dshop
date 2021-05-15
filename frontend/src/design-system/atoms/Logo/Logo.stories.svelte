<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Logo from './Logo.svelte'
</script>

<Meta
	title="💧 Atoms / Logo"
	component={Logo}
	argTypes={{
		link: { control: 'text' },
		class: {
			control: {
				type: 'text'
			}
		}
	}}
/>

<Template let:args>
	<Logo {...args} />
</Template>

<Story
	name="Logo dark"
	args={{
		link: '/'
	}}
/>
