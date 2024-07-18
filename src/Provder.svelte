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
		actions.getGeoLocation();
		actions.fetchUserLocation($state.geoPosition.coords);
		if (!$state.weather && $state.location?.city) {
			actions.fetchWeather($state.location.city);
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
