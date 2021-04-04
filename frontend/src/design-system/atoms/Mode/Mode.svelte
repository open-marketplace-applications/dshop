<script lang="ts">
	import { onMount } from 'svelte'

	import Icon from '../Icon/Icon.svelte'
	
	export let darkMode: boolean

	let bodyHasDarkMode = window.document.body.classList.contains('dark-mode')

	onMount(() => {
		if (darkMode && !bodyHasDarkMode) {
			window.document.body.classList.add('dark-mode')
		} else {
			window.document.body.classList.remove('dark-mode')
		}
	})
	
	function toggle() {
		window.document.body.classList.toggle('dark-mode')
		darkMode = !darkMode
	}
</script>

<button 
	class={`mode ${darkMode ? 'dark' : ''} ${$$props.class}`} 
	on:click={toggle}
>
	<div class="icons">
		<Icon icon='sun' />
		<Icon icon='moon' />
	</div>
</button>

<style lang='scss'>
	.mode {
		position: relative;
		overflow: hidden;
		background-color: var(--color-element);
		outline: none;
		border-radius: var(--radius);
		border: var(--border);
		width: var(--space-xxl);
		height: var(--space-xxl);
		font-size: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-text);
		cursor: pointer;
		margin-right: var(--space-md);
	
		:global(.icon) {
			margin: var(--space-xs);
		}

		.icons {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			transition: var(--transition);
		}

		&.dark {
			.icons {
				top: calc(var(--space-xxl) * -1);
			}
		}
	}

	

	
</style>
