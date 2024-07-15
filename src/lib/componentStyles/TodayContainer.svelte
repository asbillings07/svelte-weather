<script>
	import styled from 'styled-svelte';
	import { Button } from 'carbon-components-svelte';
	import { above } from '../utils/breakpoints';
	export const TodayContainer = styled.div`
		background-color: #03a9fa;
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 16px 0 40px 0;
		${above.med`
    padding: 16px 168px 40px 40px;
`};
		${above.small`
    flex-direction: row;
    padding: 16px 0px 40px 40px;
`};
	`;
</script>

<TodayContainer>
	<slot />
</TodayContainer>
