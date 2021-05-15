import '../src/theme.css'
import '../src/sb-overwrites.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: {
			order: ['👋 Welcome', ['Get Started', 'Atomic Design', 'Learn Storybook'], '💧 Atoms']
		}
	}
}
