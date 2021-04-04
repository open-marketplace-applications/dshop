<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Section from '../Section/Section.svelte'
  import Container from './Container.svelte'
</script>

<Meta 
  title="💧 Atoms / Container" 
  component={Container} 
  argTypes={{
    class: { control: {
      type: 'text',
    } },
  }}
/>

<Template let:args>
  <Section dark>
    <Container  {...args}>
      Some Container to wrap your content aligned.
    </Container>
  </Section>
</Template>

<Story 
  name="Peter Weinmann"
/>
