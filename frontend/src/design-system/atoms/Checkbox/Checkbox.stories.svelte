<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Checkbox from './Checkbox.svelte'
</script>

<Meta 
  title="💧 Atoms / Checkbox" 
  component={Checkbox} 
  argTypes={{
    name: { control: {
      type: 'text',
    } },
    label: { control: {
      type: 'text',
    } },
    class: { control: {
      type: 'text',
    } },
  }}
/>

<Template let:args>
  <Checkbox {...args} />
</Template>

<Story 
  name="Padding" 
  args={{
    padding: true
  }}
/>

<Story 
  name="No Padding" 
  args={{
    padding: false
  }}
/>
