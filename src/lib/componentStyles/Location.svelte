<script>
	import styled from 'styled-svelte';
	import { above } from '../utils/breakpoints';
	export const Location = styled.div`
		font-size: 15px;
		margin-top: 10px;
		color: #fff;
		${above.med`
    font-size: 40px;
`};
	`;
</script>

<Location>
	<slot />
</Location>
