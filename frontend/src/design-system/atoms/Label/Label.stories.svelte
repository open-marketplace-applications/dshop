<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Label from './Label.svelte'
</script>

<Meta 
  title="💧 Atoms / Label" 
  component={Label} 
  argTypes={{
    label: { control: 'text' },
    class: { control: {
      type: 'text',
    }}
  }}
/>

<Template let:args>
  <Label {...args}/>
</Template>

<Story 
  name="Label default"
  args={{
    label: 'Add a label',
  }}
/>
