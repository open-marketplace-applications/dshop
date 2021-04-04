<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Loading from './Loading.svelte'
  import Section from '../Section.svelte'
</script>

<Meta 
  title="💧 Atoms / Loading" 
  component={Loading} 
  argTypes={{
    color: { control: {
      type: 'select',
      options: ['dark', 'light']
    } },
    size: { control: {
      type: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    } },
    class: { control: {
      type: 'text',
    }}
  }}
/>

<Template let:args>
  <Section dark={args.color === 'light' ? true : false}>
    <Loading {...args}/>
  </Section>
</Template>

<Story 
  name="Loading dark"
  args={{
    size: 'xl',
  }}
/>

<Story 
  name="Loading light"
  args={{
    size: 'xl',
    color: 'light'
  }}
/>

<Story 
  name="Loading sm"
  args={{
    size: 'sm',
  }}
/>

<Story 
  name="Loading md"
  args={{
    size: 'md',
  }}
/>

<Story 
  name="Loading lg"
  args={{
    size: 'lg',
  }}
/>


<Story 
  name="Loading xl"
  args={{
    size: 'xl',
  }}
/>


