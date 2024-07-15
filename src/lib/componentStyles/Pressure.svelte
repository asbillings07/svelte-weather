<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';

	const Pressure = styled.h5`
		font-size: 17px;
		margin-bottom: 3px;
		${above.med`
    font-size: 3em;
`};
	`;
</script>

<Pressure>
	<slot />
</Pressure>
