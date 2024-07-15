<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';
	export const WeatherIcon = styled.img`
		height: 75px;
		width: 75px;
		${above.med`
    height: 25em;
    width: 25em;
`};
	`;
</script>

<WeatherIcon>
	<slot />
</WeatherIcon>
