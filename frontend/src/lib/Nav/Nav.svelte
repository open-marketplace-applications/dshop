<script>
	import { Mode, Logo, Container, Button } from '../../design-system/index'
</script>

<div class={`nav`}>
	<Container class="container">
		<div class="left">
			<Logo />
		</div>
		<div class="right">
			<Mode />
			<!-- <Button class="cta-btn" link="/faq">FAQ</Button> -->
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

	.nav :global(.container, .right) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
