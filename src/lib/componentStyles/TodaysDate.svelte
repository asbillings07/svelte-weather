<script>
	import styled from 'styled-svelte';
	import { Button } from 'carbon-components-svelte';
	import { above } from '../utils/breakpoints';
	export const TodayDate = styled.h3`
		font-size: 25px;
		margin-bottom: 1em;
		color: #fff;
		${above.med`
    font-size: 50px;
`};
	`;
</script>

<TodayDate>
	<slot />
</TodayDate>
