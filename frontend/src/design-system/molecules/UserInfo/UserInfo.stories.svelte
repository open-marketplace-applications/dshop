<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import UserInfo from './UserInfo.svelte'
</script>

<Meta
	title="🌱 Molecules / UserInfo"
	component={UserInfo}
	argTypes={{
		image: {
			control: {
				type: 'text'
			}
		},
		name: {
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
	<UserInfo {...args} />
</Template>

<Story name="Default Info" />

<Story
	name="Johanna Doe Info"
	args={{
		image:
			'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		name: 'Johanna Doe'
	}}
/>
