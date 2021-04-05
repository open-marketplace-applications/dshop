<script lang="ts">
	export const link: string = '/'
</script>

<a class={`logo ${$$props.class}`} href={link}>
	<svg
		id="logo-svg"
		xmlns="http://www.w3.org/2000/svg"
		width="154.607"
		height="23.966"
		viewBox="0 0 154.607 23.966"
	>
		<g id="logo" data-name="Gruppe 7" transform="translate(15.678 -193.271)">
			<g id="logo-text" transform="translate(26.322 197.143)">
				<path
					id="Pfad_1"
					data-name="Pfad 1"
					d="M79.989,198.942l-6.165,13.937H71.8L78.562,197.6a1.526,1.526,0,0,1,1.4-.913,1.5,1.5,0,0,1,1.4.913l6.758,15.279H86.1Z"
					transform="translate(-28.971 -196.591)"
					fill="currentColor"
				/>
				<path
					id="Pfad_2"
					data-name="Pfad 2"
					d="M45.356,198.431H39.891v-1.745H52.652v1.745H47.187v14.447H45.329Z"
					transform="translate(-11.38 -196.59)"
					fill="currentColor"
				/>
				<path
					id="Pfad_3"
					data-name="Pfad 3"
					d="M-6.179,204.851a8.471,8.471,0,0,1,8.319-8.378,8.379,8.379,0,0,1,0,16.757A8.453,8.453,0,0,1-6.179,204.851Zm14.754,0a6.637,6.637,0,0,0-6.434-6.659,6.677,6.677,0,0,0,0,13.347A6.644,6.644,0,0,0,8.575,204.851Z"
					transform="translate(14.013 -196.473)"
					fill="currentColor"
				/>
				<path
					id="Pfad_4"
					data-name="Pfad 4"
					d="M-23.635,197.31h1.858V213.5h-1.858Z"
					transform="translate(23.635 -196.934)"
					fill="currentColor"
				/>
			</g>
			<g id="NFT" transform="translate(89.846 197.239)" style="isolation: isolate">
				<g id="Gruppe_2" data-name="Gruppe 2" style="isolation: isolate">
					<path
						id="Pfad_5"
						data-name="Pfad 5"
						d="M131.689,196.686v16.192h-3.32l-6.444-9.345h-.1v9.345h-3.914V196.686h3.368l6.373,9.329h.135v-9.329Z"
						transform="translate(-117.908 -196.686)"
						fill="currentColor"
					/>
					<path
						id="Pfad_6"
						data-name="Pfad 6"
						d="M161.517,212.878V196.686H172.57v3.178h-7.14v3.32h6.436v3.187h-6.436v6.507Z"
						transform="translate(-141.945 -196.686)"
						fill="currentColor"
					/>
					<path
						id="Pfad_7"
						data-name="Pfad 7"
						d="M196.774,199.864v-3.178H210.46v3.178h-4.91v13.014h-3.858V199.864Z"
						transform="translate(-161.379 -196.686)"
						fill="currentColor"
					/>
				</g>
			</g>
		</g>
		<path
			id="symbol"
			data-name="Pfad 23"
			d="M22.646,15.5,12.169,23.966,1.693,15.5,0,0,12.169,15.233,24.339,0Z"
			fill="currentColor"
		/>
	</svg>
</a>

<style>
	a {
		color: inherit;
		opacity: 1;
		margin: 0;
		display: block;
		display: flex;
		padding: 0;
		position: relative;
		width: var(--space-lg);
		height: var(--space-xl);
		overflow: hidden;
	}

	svg {
		position: absolute;
		top: 2px;
		left: 0;
	}

	#logo {
		opacity: 0;
	}

	@media (min-width: 720px) {
		a {
			width: 200px;
		}

		#logo {
			opacity: 1;
		}
	}
</style>
