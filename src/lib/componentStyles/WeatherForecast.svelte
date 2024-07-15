<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';
	export const WeatherForecast = styled.div`
		display: flex;
		justify-content: space-evenly;
		flex-direction: row-reverse;
		${above.small`
    margin-left: 3em;
    flex-direction: column;
    justify-content: start;
`};
	`;
</script>

<WeatherForecast>
	<slot />
</WeatherForecast>
