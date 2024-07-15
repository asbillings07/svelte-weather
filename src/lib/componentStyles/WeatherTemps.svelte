<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';

	export const WeatherTemps = styled.div`
		width: 100%;
		display: flex;
		justify-content: space-around;
		${above.small`
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;
  `}
	`;
</script>

<WeatherTemps>
	<slot />
</WeatherTemps>
