<script>
	import '../app.scss';
	import Email from '$lib/Email.svelte';
</script>

<main>
	<slot />

	<br />
	<h2>Contact</h2>
	<Email address="info@coffee-license.org" />
	<br />

	<div>
		<a
			class="github-link"
			href="https://github.com/coffee-license/website"
			target="_blank"
			rel="noopener noreferrer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
				<g
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/>
				</g>
			</svg>

			<span>F**k me on GitHub</span>
		</a>
	</div>
</main>

<style lang="scss">
	main {
		width: 100%;
		max-width: 48rem;
		margin: 0 auto;
		padding: 2rem;
		padding-bottom: 80vh;
		box-sizing: border-box;
		font-size: 1.1rem;
	background-color: hsla(0, 0%, 60%, 0.02);
	}

	.github-link {
		display: flex;
		align-items: center;
		gap: 0.5em;

		svg {
			width: 1.5em;
			height: 1.5em;
			stroke: currentColor;
		}
	}
</style>
