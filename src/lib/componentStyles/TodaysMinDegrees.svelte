<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';
	export const TodayMinDegrees = styled.h3`
		font-size: 30px;
		color: #fff;
		${above.med`
    font-size: 5em;
`};
		${above.small`
    font-size: 35px;
`};
	`;
</script>

<TodayMinDegrees>
	<slot />
</TodayMinDegrees>
