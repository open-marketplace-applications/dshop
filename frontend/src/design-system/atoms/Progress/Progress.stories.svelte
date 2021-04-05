<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Progress from './Progress.svelte'
</script>

<Meta
  title="💧 Atoms / Progressss"
  component={Progress}
  argTypes={{
    label: { control: {
      type: 'text',
    } },
    showValue: { control: {
      type: 'boolean',
    } },
    value: { control: {
      type: 'number',
    } },
    max: { control: {
      type: 'number',
    } },
    size: { control: {
      type: 'select',
      options: ['sm', 'md', 'lg']
    } },
    class: { control: {
      type: 'text',
    } },
  }}
/>

<Template let:args>
  <Progress {...args} />
</Template>

<Story
  name="Progress default"
  args={{
    label: "Example Progress bar",
    value: 42,
    max: 50
  }}
/>

<Story
  name="Small Progress"
  args={{
    label: "Example Progress bar",
    value: 42,
    max: 50
  }}
/>
