<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Form from './Form.svelte'
  import Input from '../Input/Input.svelte'
  import Button from '../Button/Button.svelte'
  $: user = {
    name: 'Peter',
    phone: '123',
    email: 'abc@efg.com'
  }
</script>

<Meta 
  title="💧 Atoms / Form" 
  component={Form} 
  argTypes={{
    class: { control: { type: 'text' } },
    onSubmit: { action: 'onClick' },
  }}
/>

<Template let:args>
  <Form {...args} >
    <h2>Example Form</h2>
    <Input
      type="text" 
      name="name" 
      label="Name" 
      placeholder="Enter your name" 
      bind:value={user.name} 
    />
    <Input 
      type="text"
      name="phone" 
      label="Phone" 
      placeholder="Enter your phone"
      bind:value={user.phone} 
    />
    <Input
      type="email"
      name="email" 
      label="Email" 
      placeholder="Enter your email"
      bind:value={user.email} 
    />
    <Button 
      label="Send" 
      type=submit
      block
      size=lg 
    />
  </Form>
</Template>

<Story 
  name="Empty Form"
/>
