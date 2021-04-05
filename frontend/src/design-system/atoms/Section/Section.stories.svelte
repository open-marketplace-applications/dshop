<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Container from '../Container/Container.svelte'
  import Section from './Section.svelte'
</script>

<Meta 
  title="💧 Atoms / Section" 
  component={Section} 
  argTypes={{
    dark: { control: {
      type: 'boolean'
    } },
    class: { control: {
      type: 'text',
    } },
  }}
/>

<Template let:args>
  <Section {...args} >
    Section content goes here
  </Section>
</Template>

<Story 
  name="Section light"
  args={{
    dark: false
  }}
/>

<Story 
  name="Section dark"
  args={{
    dark: true
  }}
/>
