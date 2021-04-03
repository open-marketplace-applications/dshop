<script lang='ts'>
  import { Container, Button } from '../../design-system/index'
</script>

<div class="toolbar">
  <Container class="toolbar-container">
    <Button color="secondary" rounded>Share</Button>
  </Container>
</div>

<style>
  .toolbar {
		position: absolute;
		top: -40px;
		left: 0;
		width: 100%;
		height: 80px;
	}

	.toolbar :global(.btn.back) {
		display: none;
	}
	@media (min-width: 720px) {
		.toolbar :global(.btn.back) {
			display: block;
		}
	}

	:global(.toolbar-container) {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>