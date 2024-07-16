<script lang="ts">
	import { onMount } from 'svelte';
	import Provder from '../Provder.svelte';
	import WeatherHome from '$lib/pages/WeatherHome.svelte';
	import 'carbon-components-svelte/css/all.css';
	let theme = 'white'; // "white" | "g10" | "g80" | "g90" | "g100"

	onMount(() => {
		document.documentElement.setAttribute('theme', theme);
	});
</script>

<Provder>
	<WeatherHome />
</Provder>
