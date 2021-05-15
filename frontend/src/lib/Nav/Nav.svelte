<script>
	import { Mode, Logo, Container, Button } from '../../design-system/index'
	export let cartCount
	$: console.log('Ciaoaaa', cartCount)
</script>

<div class={`nav`}>
	<Container class="container">
		<div class="left">
			<Logo link="/" />
		</div>
		<div class="right">
			<!-- <Button color="secondary" link="/faq">FAQ</Button> -->
			<Button color="primary" class="cta-btn" link="/cart">
				Kaufen
				{#if cartCount > 0}
					{cartCount}
				{/if}
			</Button>
			<Mode />
		</div>
	</Container>
</div>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: var(--border);
		background-color: var(--color-layout-50);
		z-index: 1;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.left {
		width: 50px;
	}

	:global(.cta-btn) {
		margin-left: 20px !important;
	}

	.nav :global(.container, .right) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
