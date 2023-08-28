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
</script>

<div class="box" class:blur on:pointermove={newAnon}>
	{#if blur}
		<a
			class="blur"
			title="click to show email address"
			on:click={show}
			on:keypress={show}
			href={null}
			role="button"
			tabindex="0">{anon}</a
		>
	{:else}
		<a href="mailto:{address}">{address}</a>
	{/if}
</div>
<p>
	<sub>
		<i>click to show email address</i>
	</sub>
</p>

<style lang="scss">
	.box {
		a {
			font-family: monospace;
			cursor: pointer;

			&.blur {
				filter: blur(2px);
			}
		}
	}

	sub {
		color: gray;
	}
</style>
