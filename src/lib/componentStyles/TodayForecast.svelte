<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';

	export const TodayForecast = styled.h1`
		font-size: 17px;
		color: #fff;
		align-self: center;
		margin-left: 1em;
		${above.small`
    align-self: start;
`};
		${above.med`
    font-size: 5em;
`};
	`;
</script>

<TodayForecast>
	<slot />
</TodayForecast>
