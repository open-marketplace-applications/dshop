<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Video from './Video.svelte'
</script>

<Meta
	title="💧 Atoms / Video"
	component={Video}
	argTypes={{
		poster: {
			control: {
				type: 'text'
			}
		},
		url: {
			control: {
				type: 'text'
			}
		},
		loop: {
			control: {
				type: 'boolean'
			}
		},
		class: {
			control: {
				type: 'text'
			}
		}
	}}
/>

<Template let:args>
	<Video {...args} />
</Template>

<Story name="Video default" />

<Story
	name="Video loop"
	args={{
		poster:
			'https://cdn.discordapp.com/attachments/818556348585082890/818594436849991740/Firefly_Short0.jpg',
		url:
			'https://cdn.discordapp.com/attachments/773470188141805607/817513458684657715/Firefly_Short_1.mp4',
		loop: true
	}}
/>

<Story
	name="Video long"
	args={{
		poster:
			'https://cdn.discordapp.com/attachments/420674357652750367/828414367514099722/Bildschirmfoto_2021-04-05_um_01.42.29.png',
		url:
			'https://cdn.dribbble.com/users/1468665/screenshots/14249556/media/a6dde26a0e527aea67f7fc38b76d14d1.mp4',
		loop: true
	}}
/>
