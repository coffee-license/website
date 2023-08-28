<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p>
	<a href="/">👈 back</a>
</p>

<h1>Coffee License {data.version}</h1>

<div>
	<pre>{data.text}</pre>
</div>
<br />

<style lang="scss">
	pre {
		white-space: wrap;
		white-space: preserve-breaks wrap;
	}
</style>
