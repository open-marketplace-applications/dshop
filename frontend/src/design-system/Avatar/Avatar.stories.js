import Avatar from './Avatar.svelte'

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    imageUrl: { control: 'text' },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    }
  }
}

const Template = ({ ...args }) => ({
  Component: Avatar,
  props: args
})

export const Small = Template.bind({})
Small.args = {
  imageUrl: 'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  imageUrl: 'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
}

export const Large = Template.bind({})
Large.args = {
  imageUrl: 'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  size: 'lg'
}
