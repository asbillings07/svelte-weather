<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';
	export const TodayMaxDegrees = styled.h2`
		font-size: 35px;
		color: #fff;
		${above.med`
    font-size: 6em;
`};
		${above.small`
    font-size: 45px;
`};
	`;
</script>

<TodayMaxDegrees>
	<slot />
</TodayMaxDegrees>
