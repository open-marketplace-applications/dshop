<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Mode from './Mode.svelte'
</script>

<Meta 
  title="💧 Atoms / Mode" 
  component={Mode} 
  argTypes={{
    darkMode: { control: 'boolean' },
    class: { control: {
      type: 'text',
    }}
  }}
/>

<Template let:args>
  <Mode {...args}/>
</Template>

<Story 
  name="Mode is Light"
/>

<Story 
  name="Mode is Dark"
  args={{
    darkMode: true,
  }}
/>
