<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Section from '../Section.svelte'
  import Form from './Form.svelte'
</script>

<Meta 
  title="💧 Atoms / Form" 
  component={Form} 
  argTypes={{
    class: { control: {
      type: 'text',
    } },
    onSubmit: { action: 'onClick' },
  }}
/>

<Template let:args>
  <Form  {...args} >
    This is a pure style component with a callback. Your Inputs go here, see 🌱 Molecules / Subscribe as an example.
  </Form>
</Template>

<Story 
  name="Empty Form"
/>
