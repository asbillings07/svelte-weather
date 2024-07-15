<script lang="ts">
	import { onMount } from 'svelte';
	import 'carbon-components-svelte/css/all.css';
	let theme = 'white'; // "white" | "g10" | "g80" | "g90" | "g100"
	import Provder from '../../provder.svelte';
	import WeatherDetail from '$lib/pages/WeatherDetail.svelte';
	onMount(() => {
		document.documentElement.setAttribute('theme', theme);
	});
</script>

<Provder>
	<WeatherDetail />
</Provder>
