<script lang="ts">
	import { roundValue, getTimeOfDay } from './utils';
	import { getContext } from 'svelte';
	import { getWeatherIcon } from '$lib/Icons';
	const { state } = getContext('weather') as any;
	$: console.log('Weather DATA', $state);
	const details = $state.weatherData?.forecast as any;
</script>

<div class="detail-container">
	<div class="date-wrapper">
		<h5 class="month-date" data-testid="fullDate">
			{details.fullDate}
		</h5>
	</div>
	<div class="main-content">
		<div class="sub-main-content">
			<div class="detail-temp-wrapper">
				<h1 class="detail-max-degrees" data-testid="maxDegrees">{`${details.temp.maxTemp}`}</h1>
				<h3 class="h3" data-testid="minDegrees">{`${details.temp.minTemp}`}</h3>
			</div>
			<div class="detail-status-wrapper">
				<img
					class="icon"
					data-testid="icon"
					src={getWeatherIcon(details.weather.icon)}
					alt={details.weather.description}
				/>
				<h6 class="status">
					{details.weather.status}
				</h6>
			</div>
		</div>
		<div>
			<div class="feels-like-wrapper" data-testid="feels-like-wrapper">
				<div class="feels-like-header" data-testid="feels-like-header">
					Feels Like:{' '}
					<p class="feels-like-temp" data-testid="feels-like-temp">
						{details.feelsLike[getTimeOfDay()]}
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="detail-wrapper">
		<h5 class="humidity" data-testid="humidity">
			Humidity: {`${details.humidity}\u0025`}
		</h5>
		<h5 class="pressure" data-testid="pressure">
			Pressure: {details.pressure} hPa
		</h5>
		<h5 class="wind" data-testid="wind">
			Wind: {roundValue(details.speed)} km/h {details.degrees}
		</h5>
	</div>
</div>

<style>
	.detail-container {
		display: flex;
		flex-direction: column;
		padding: 20px;
		margin: auto;
		width: 100%;
		@media (min-width: 725px) {
			padding: 25px;
		}
	}

	.date-wrapper {
		margin-bottom: 30px;
		align-self: flex-start;
	}

	.month-date {
		font-size: 20px;
		color: #646464;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	}

	.main-content {
		display: flex;
		padding-bottom: 30px;
		justify-content: space-between;
	}

	.sub-main-content {
		display: flex;
	}

	.detail-temp-wrapper {
		display: flex;
		flex-direction: column;
	}

	.feels-like-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 30px;
	}

	.feels-like-temp {
		font-size: 20px;
		margin: 5px 0;
		@media (min-width: 725px) {
			font-size: 10em;
		}
	}

	.feels-like-header {
		font-size: 20px;
	}

	.detail-max-degrees {
		font-size: 72px;
		@media (min-width: 725px) {
			font-size: 15em;
		}
	}

	.detail-min-degrees {
		font-size: 36px;
		color: #646464;
		align-self: center;
		@media (min-width: 725px) {
			font-size: 8em;
		}
	}

	.detail-status-wrapper {
		display: flex;
		flex-direction: column;
	}

	.status {
		font-size: 17px;
		font-weight: lighter;
		color: #646464;
		align-self: center;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	}

	.icon {
		height: 75px;
		width: 75px;
		@media (min-width: 725px) {
			height: 32em;
			width: 32em;
		}
	}

	.detail-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.humidity {
		font-size: 17px;
		margin-bottom: 3px;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	}

	.pressure {
		font-size: 17px;
		margin-bottom: 3px;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	}

	.wind {
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	}
</style>
