<script>
	import styled from 'styled-svelte';

	// NavBar Styles
	export const HeaderContainer = styled.div`
		flex-grow: 1;
	`;
</script>

<HeaderContainer>
	<slot />
</HeaderContainer>
