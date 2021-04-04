import Button from './Button.svelte'

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		color: {
			control: { type: 'select', options: ['primary', 'secondary'] }
		},
		rounded: { control: 'boolean' },
		block: { control: 'boolean' },
		link: { control: 'text' },
		label: { control: 'text' },
		type: {
			control: { type: 'select', options: ['button', 'submit'] }
		},
		size: {
			control: { type: 'select', options: ['sm', 'md', 'lg'] }
		},
		onClick: { action: 'onClick' }
	}
}

const Template = ({ onClick, ...args }) => ({
	Component: Button,
	props: args,
	on: {
		click: onClick
	}
})

export const Small = Template.bind({})
Small.args = {
	size: 'sm',
	label: 'Small',
	color: 'primary'
}

export const Medium = Template.bind({})
Medium.args = {
	size: 'md',
	label: 'Medium'
}

export const Large = Template.bind({})
Large.args = {
	size: 'lg',
	label: 'Large'
}
