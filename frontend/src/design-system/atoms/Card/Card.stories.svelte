<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Card from './Card.svelte'
</script>

<Meta 
  title="💧 Atoms / Card" 
  component={Card} 
  argTypes={{
    padding: { control: {
      type: 'boolean',
    } }
  }}
/>

<Template let:args>
  <Card {...args} >
    Nothing but a card, you can put any content in here.
  </Card>
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
