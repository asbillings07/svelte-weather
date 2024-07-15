<script>
	import { getContext } from 'svelte';
	import { SkeletonPlaceholder } from 'carbon-components-svelte';
	import Detail from '$lib/Detail.svelte';
	const { state } = getContext('weather');
</script>

{#if $state.weather.forecast}
	<Detail />
{:else}
	<SkeletonPlaceholder />
{/if}
