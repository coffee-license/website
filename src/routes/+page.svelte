<script lang="ts">
	import Email from '$lib/Email.svelte';
	import { VERSIONS } from '$lib/versions';
</script>

<main>
	<img src="/coffee-license.svg" alt="coffee license logo" />
	<h1>Coffee License</h1>

	<div>
		<ul>
			{#each VERSIONS as version}
				<li><a href="/{version}">Version {version}</a></li>
			{/each}
		</ul>
	</div>
	<br />

	<h2>Summary</h2>
	<p>
		A very permissive software license, for people who like coffee as much as i do. <br /> It's
		comparable to
		<a
			href="https://choosealicense.com/licenses/unlicense"
			target="_blank"
			rel="noopener noreferrer">The Unlicense</a
		> in that it lets people do anything with your code, without you being liable for any damages.
	</p>

	<h3>🫴 Permissions</h3>
	<ul>
		<li>🟢 Private use</li>
		<li>🟢 Commercial use</li>
		<li>🟢 Modification</li>
		<li>🟢 Distribution</li>
	</ul>

	<h3>🤝 Conditions</h3>
	<ul>
		<li>🟡 Buy them a ☕</li>
	</ul>

	<h3>☝️ Limitations</h3>
	<ul>
		<li>🔴 Liability</li>
		<li>🔴 Warranty</li>
	</ul>

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
	img {
		width: 6rem;
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
