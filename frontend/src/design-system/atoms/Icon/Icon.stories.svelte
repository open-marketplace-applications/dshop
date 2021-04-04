<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Icon from './Icon.svelte'
</script>

<Meta 
  title="💧 Atoms / Icon" 
  component={Icon} 
  argTypes={{
    icon: { control: {
      type: 'select',
      options: ['sun', 'moon', 'link', 'back', 'share']
    } },
    size: { control: {
      type: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    } },
    class: { control: {
      type: 'text',
    } },
  }}
/>

<Template let:args>
  <Icon {...args} />
</Template>

<Story 
  name="Sun" 
  args={{
    icon: 'sun'
  }}
/>

<Story 
  name="Moon" 
  args={{
    icon: 'moon'
  }}
/>

<Story 
  name="Back" 
  args={{
    icon: 'back'
  }}
/>

<Story 
  name="Share" 
  args={{
    icon: 'share'
  }}
/>

<Story 
  name="Link"
  args={{
    icon: 'link'
  }}
/>
