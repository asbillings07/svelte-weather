<script>
	import { SkeletonPlaceholder } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
	import { actions } from './store';
	import { onMount } from 'svelte';
	import LocationCurrent from 'carbon-icons-svelte/lib/LocationCurrent.svelte';
	import { getContext } from 'svelte';
	import { getWeatherIcon } from '$lib/Icons';

	onMount(() => {
		actions.fetchUserLocation();
	});

	const { state } = getContext('weather');
	$: today = Array.isArray($state.weather?.forecast) && $state?.weather?.forecast[0];
	$: weather = today?.weather;
	$: userLocation = $state.location?.city;
	$: console.log('Today', today, weather, $state?.weather);
</script>

{#if today && weather}
	<div class="today-container">
		<div class="weather-temps">
			<h2 class="today-max-degrees" data-testid="maxDegrees">
				{`High: ${today?.temp?.maxTemp}`}
			</h2>
			<h3 class="today-min-degrees" data-testid="minDegrees">
				{`Low: ${today?.temp?.minTemp}`}
			</h3>
		</div>
		<div class="weather-forecast">
			<div class="location" data-testid="location">
				<Button iconDescription="current location" icon={LocationCurrent}>
					{userLocation || 'Not Available'}
				</Button>
			</div>
			<img
				class="weather-icon"
				data-testid="weatherIcon"
				src={getWeatherIcon(weather?.icon)}
				alt={weather?.description}
			/>
			<h1 class="today-forecast" data-testid="forecast">
				{weather?.status}
			</h1>
		</div>
	</div>
{:else}
	<div>
		<div>
			<SkeletonPlaceholder style="height:25px" />
			<SkeletonPlaceholder style="height:30px" />
			<SkeletonPlaceholder style="height:40px" />
		</div>
		<div>
			<SkeletonPlaceholder style="height:25px" />
			<SkeletonPlaceholder style="height:30px" />
			<SkeletonPlaceholder style="height:40px" />
		</div>
	</div>
{/if}

<style>
	.today-container {
		background-color: #03a9fa;
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 16px 0 40px 0;
		@media (min-width: 725px) {
			padding: 16px 168px 40px 40px;
		}
		@media (min-width: 575px) {
			flex-direction: row;
			padding: 16px 0px 40px 40px;
		}
	}

	.weather-temps {
		width: 100%;
		display: flex;
		justify-content: space-around;
		@media (min-width: 575px) {
			width: 50%;
			flex-direction: column;
			justify-content: flex-start;
		}
	}

	.today-date {
		font-size: 25px;
		margin-bottom: 1em;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 50px;
		}
	}

	.location {
		font-size: 15px;
		margin-top: 10px;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 40px;
		}
	}
	.today-max-degrees {
		font-size: 72px;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 6em;
		}
		@media (min-width: 575px) {
			font-size: 45px;
		}
	}

	.today-min-degrees {
		font-size: 36px;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 5em;
		}
		@media (min-width: 575px) {
			font-size: 35px;
		}
	}

	.weather-forecast {
		display: flex;
		justify-content: space-evenly;
		flex-direction: row-reverse;
		@media (min-width: 575px) {
			margin-left: 3em;
			flex-direction: column;
			justify-content: start;
		}
	}

	.weather-icon {
		height: 75px;
		width: 75px;
		@media (min-width: 725px) {
			height: 25em;
			width: 25em;
		}
	}

	.today-forecast {
		font-size: 17px;
		color: #fff;
		align-self: center;
		margin-left: 1em;
		@media (min-width: 575px) {
			align-self: start;
		}

		@media (min-width: 725px) {
			font-size: 5em;
		}
	}
</style>
