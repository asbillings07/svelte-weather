<script lang="ts">
	import { roundValue, getTimeOfDay } from './utils';
	import { page } from '$app/stores';
	import { getWeatherIcon } from '$lib/Icons';
	export let forecast;
	$: params = $page.params;
	$: console.log('Weather Details', details, params);
	$: details = forecast[params.slug];
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
				<h3 class="detail-max-degrees" data-testid="maxDegrees">{`${details.temp.maxTemp}`}</h3>
				<h3 class="detail-min-degrees" data-testid="minDegrees">{`${details.temp.minTemp}`}</h3>
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
					<p>Feels Like:</p>
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
	}

	.date-wrapper {
		margin-bottom: 30px;
		align-self: flex-start;
	}

	.month-date {
		font-size: 20px;
		color: #646464;
	}

	.main-content {
		display: flex;
		padding-bottom: 30px;
		justify-content: center;
	}

	.sub-main-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.detail-temp-wrapper {
		display: flex;
		flex-direction: column;
	}

	.feels-like-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px;
	}

	.feels-like-temp {
		font-size: 2em;
		margin: 5px 0;
	}

	.feels-like-header {
		font-size: 15px;
	}

	.detail-max-degrees {
		font-size: 72px;
	}

	.detail-min-degrees {
		font-size: 36px;
		color: #646464;
		align-self: center;
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
	}

	.icon {
		height: 75px;
		width: 75px;
	}

	.detail-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 11px;
	}

	.humidity {
		font-size: 17px;
		margin-bottom: 3px;
	}

	.pressure {
		font-size: 17px;
		margin-bottom: 3px;
	}

	.wind {
		font-size: 17px;
	}

	@media (min-width: 725px) {
		.feels-like-wrapper {
			padding: 60px 30px 30px 30px;
		}

		.detail-container {
			padding: 25px;
		}

		.month-date {
			font-size: 3em;
		}

		.feels-like-temp {
			font-size: 5em;
		}

		.detail-max-degrees {
			font-size: 5em;
		}

		.detail-min-degrees {
			font-size: 4em;
		}

		.status {
			font-size: 3em;
		}

		.icon {
			height: 25em;
			width: 25em;
		}

		.humidity {
			font-size: 3em;
		}

		.pressure {
			font-size: 3em;
		}

		.wind {
			font-size: 3em;
		}
	}
</style>
