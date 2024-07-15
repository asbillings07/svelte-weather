<script>
	// import { SkeletonLoader } from './SkeletonLoader'
	// import { useStore } from '../src/Store'
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';
	import { getWeatherIcon } from '$lib/Icons';
	const { state } = getContext('weather');

	// export const Forecast = () => {
	//   const { state } = useStore()
	//   const history = useHistory()

	//   const skeletonForecastLoader = [1, 2, 3, 4, 5].map((item) => (
	//     <SkeletonLoader.Container
	//       key={item}
	//       display="flex"
	//       data-testid={`Forecast-Skeleton-Loader-${item}`}
	//     >
	//       <SkeletonLoader.Container>
	//         <SkeletonLoader.Body />
	//         <SkeletonLoader.Body />
	//       </SkeletonLoader.Container>
	//       <SkeletonLoader.Container>
	//         <SkeletonLoader.Body />
	//         <SkeletonLoader.Body />
	//       </SkeletonLoader.Container>
	//     </SkeletonLoader.Container>
	//   ));

	//   return (
	//     <>
	//       {state?.weather?.forecast && Array.isArray(state.location) ? (
	//         <ForecastContainer>{forecastElements}</ForecastContainer>
	//       ) : (
	//         <SkeletonLoader style={{flexDirection: 'column'}}>{skeletonForecastLoader}</SkeletonLoader>
	//       )}
	//     </>
	//   );
	// }

	// Forecast.displayName = "Forecast";
</script>

{#each $state.weather?.forecast || [] as forecast, i}
	<a href={`/details/${i}`}>
		<div class="forecast-sub-container">
			<div class="forecast-wrapper">
				<div class="status-wrapper">
					<h3 class="weekday" data-testid="weekDay">
						{forecast.weekday}
					</h3>
					<h5 data-testid="weatherStatus" class="weather-status">
						{forecast.weather.status}
					</h5>
				</div>
				<img
					data-testid="weatherImage"
					class="weather-image"
					src={getWeatherIcon(forecast.weather.icon)}
					alt={forecast.weather.description}
				/>
			</div>
			<div class="temp-wrapper">
				<h3 data-testid="maxTemp" class="max-temp">{`${forecast.temp.maxTemp}`}</h3>
				<h5 data-testid="minTemp" class="min-temp">{`${forecast.temp.minTemp}`}</h5>
			</div>
		</div>
	</a>
{/each}

<style>
	.forecast-sub-container {
		display: flex;
		margin-left: 25px;
		justify-content: start;
		background-color: #fff;
		padding: 25px 0px;
		&:hover {
			background: #f5f5f5;
			box-shadow: inset 0px 6px 25px #c1c1c1;
		}
	}

	.forecast-wrapper {
		display: flex;
		width: 60%;
		@media (min-width: 725px) {
			width: 64%;
		}
	}

	.status-wrapper {
		display: flex;
		flex-direction: column;
		order: 1;
		justify-content: center;
	}

	.weekday {
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	}

	.weather-status {
		font-size: 11px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	}

	.weather-image {
		height: 35px;
		width: 35px;
		margin: 0px 10px;
		@media (min-width: 725px) {
			height: 10em;
			width: 10em;
			margin: 0px 25px;
		}
	}

	.temp-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.max-temp {
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	}

	.min-temp {
		align-self: center;
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	}
</style>
