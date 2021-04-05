<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Link from './Link.svelte'
</script>

<Meta 
  title="💧 Atoms / Link" 
  component={Link} 
  argTypes={{
    link: { control: 'text' },
    text: { control: 'text' },
    block: { control: 'boolean' },
    target: { control: {
      type: 'select',
      options: ['self', 'blank', 'parent']
    } },
    class: { control: {
      type: 'text',
    }}
  }}
/>

<Template let:args>
  <Link {...args}/>
</Template>

<Story 
  name="Link block"
  args={{
    link: '/',
    text: 'Example Link to IOTA NFT',
  }}
/>

<Story 
  name="Link inline"
  args={{
    link: '/',
    text: 'Example Link to IOTA NFT',
    block: false,
  }}
/>

<Story 
  name="Target parent"
  args={{
    link: '/',
    text: 'Example Link to IOTA NFT',
  }}
/>

<Story 
  name="Target blank"
  args={{
    link: '/',
    text: 'Example Link to IOTA NFT',
    target: 'blank'
  }}
/>

<Story 
  name="Target self"
  args={{
    link: '/',
    text: 'Example Link to IOTA NFT',
    target: 'self'
  }}
/>
