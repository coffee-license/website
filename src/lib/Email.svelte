<script lang="ts">
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-.@'.split('');

	export let address: string;
	let blur = true;
	let anon = address.split('').map(random).join('');

	function random() {
		return chars[Math.round((chars.length - 1) * Math.random())];
	}

	function newAnon() {
		if (blur) anon = address.split('').map(random).join('');
	}

	function show() {
		blur = false;
	}

	let showCheck = false;

	function copy() {
		navigator.clipboard.writeText(address).then(() => {
			showCheck = true;
			setTimeout(() => {
				showCheck = false;
			}, 1000);
		});
	}
</script>

<div class="box" class:blur on:pointermove={newAnon}>
	{#if blur}
		<div>
			<a
				class="blur"
				title="click to show email address"
				on:click={show}
				on:keypress={show}
				href={null}
				role="button"
				tabindex="0">{anon}</a
			>
			<br />
			<sub>
				<i>click to show email address</i>
			</sub>
		</div>
	{:else}
		<a href="mailto:{address}">{address}</a>

		<button title="Copy to clipboard" on:click={copy} class="copy-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				viewBox="0 0 24 24"
				stroke="currentColor"
				fill="none"
			>
				<g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					{#if showCheck}
						<path stroke="#0c881c" d="M5 12l5 5l10 -10" />
					{:else}
						<path
							d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
						/>
						<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
					{/if}
				</g>
			</svg>
		</button>
	{/if}
</div>

<style lang="scss">
	.box {
		display: flex;
		align-items: center;
		gap: 1rem;

		a {
			font-family: monospace;
			cursor: pointer;

			&.blur {
				filter: blur(2px);
			}
		}
	}

	button {
		padding: 0;
		background: none;
		border: none;
		font-size: unset;
		cursor: pointer;
	}

	sub {
		color: gray;
	}
</style>
