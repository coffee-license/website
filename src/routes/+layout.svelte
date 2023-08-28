<script>
	import '../app.scss';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		width: 100%;
		max-width: 32rem;
		margin: 0 auto;
		padding: 2rem;
		padding-bottom: 80vh;
		box-sizing: border-box;
		font-size: 1.1rem;
	}
</style>
