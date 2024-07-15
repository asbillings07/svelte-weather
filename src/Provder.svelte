<!-- Provider.svelte -->
<script>
	import { onMount } from 'svelte';
	import { state, actions } from '$lib/store';
	import { setContext } from 'svelte';

	let alert = {
		isOpen: false,
		message: '',
		alertType: 'info'
	};

	// Provide state and actions
	setContext('weather', { state, actions });

	onMount(() => {
		if (!$state.weather) {
			actions.fetchWeather();
		}
		if (!$state.location) {
			actions.getGeoLocation();
			actions.fetchUserLocation($state.geoPosition.coords);
		}
	});

	$: if ($state.error) {
		console.log($state.errorMessage);
		alert = {
			...alert,
			isOpen: true,
			message: $state.errorMessage,
			alertType: 'warning'
		};
	}
</script>

<slot></slot>
