<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';
	export const Wind = styled.h5`
		font-size: 17px;
		${above.med`
    font-size: 3em;
`};
	`;
</script>

<Wind>
	<slot />
</Wind>
