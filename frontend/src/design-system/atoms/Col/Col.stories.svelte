<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Section from '../Section/Section.svelte'
	import Row from '../Row/Row.svelte'
	import Container from '../Container/Container.svelte'
	import Card from '../Card/Card.svelte'
	import Col from './Col.svelte'
</script>

<Meta
	title="💧 Atoms / Col"
	component={Col}
	argTypes={{
		direction: {
			control: {
				type: 'select',
				options: ['column', 'row']
			}
		},
		align: {
			control: {
				type: 'select',
				options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
			}
		},
		justify: {
			control: {
				type: 'select',
				options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
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
	<Section dark>
		<Container>
			<Row>
				<Col {...args}>
					<Card>Card A</Card>
					<Card>Card B</Card>
					<Card>Card C</Card>
				</Col>
			</Row>
		</Container>
	</Section>
</Template>

<Story
	name="Row Layout"
	args={{
		direction: 'row'
	}}
/>

<Story name="Column" />
