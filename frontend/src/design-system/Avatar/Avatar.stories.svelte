<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Avatar from './Avatar.svelte'

  const imageUrl = 'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
</script>

<Meta 
  title="💧 Atoms / Avatar" 
  component={Avatar} 
  argTypes={{
    imageUrl: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg' , 'xl'],
        default: 'md'
      }
    }
  }}
/>

<Template let:args>
  <Avatar {...args}/>
</Template>

<Story 
  name="Small" 
  args={{
    imageUrl: imageUrl,
    size: 'sm'
  }}
/>

<Story 
  name="Medium" 
  args={{
    imageUrl: imageUrl,
    size: 'md'
  }}
/>

<Story 
  name="Large" 
  args={{
    imageUrl: imageUrl,
    size: 'lg'
  }}
/>

<Story 
  name="Extra Large" 
  args={{
    imageUrl: imageUrl,
    size: 'xl'
  }}
/>
