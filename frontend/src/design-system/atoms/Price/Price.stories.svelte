<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Price from './Price.svelte'
</script>

<Meta
  title="💧 Atoms / Price"
  component={Price}
  argTypes={{
    value: { control: {
      type: 'number',
    } },
    unit: { control: {
      type: 'select',
      options: ['IOTA', 'MI', '$', '€'],
    } },
  }}
/>

<Template let:args>
  <Price {...args} />
</Template>

<Story
  name="Empty price" 
/>
