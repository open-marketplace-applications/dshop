<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Section from '../Section/Section.svelte'
	import Container from '../Container/Container.svelte'
	import Row from './Row.svelte'
</script>

<Meta
	title="💧 Atoms / Row"
	component={Row}
	argTypes={{
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
			<Row {...args}>Row #1</Row>
			<Row {...args}>Row #2</Row>
		</Container>
	</Section>
</Template>

<Story name="Row Layout" />
