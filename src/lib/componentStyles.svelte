<script lang="ts">
	import styled from 'styled-svelte';
	import { Button } from 'carbon-components-svelte';

	// NavBar Styles
	export const HeaderContainer = styled.div`
		flex-grow: 1;
	`;

	export const NavMenuButton = styled(Button, {
		marginRight: '4px'
	});

	export const NavBarImage = styled.img`
		width: 5em;
		height: 5em;
		margin-right: 20px;
		@media (min-width: 725px) {
			width: 144px;
			height: 144px;
		}
	`;

	export const NavBarTitle = styled.h6`
  font-family: "Pacifico, cursive, sans-serif"
  flex-grow: 1;
  font-size: 50px;
  @media (min-width: 725px) {
    font-size: 100px;
  }
`;

	// Forecast Styles
	export const ForecastSubContainer = styled.div`
		display: flex;
		margin-left: 25px;
		justify-content: start;
		background-color: #fff;
		padding: 25px 0px;
		&:hover {
			background: #f5f5f5;
			box-shadow: inset 0px 6px 25px #c1c1c1;
		}
	`;
	export const ForecastContainer = styled.div``;
	export const ForecastWrapper = styled.div`
		display: flex;
		width: 60%;
		@media (min-width: 725px) {
			width: 64%;
		}
	`;
	export const StatusWrapper = styled.div`
		display: flex;
		flex-direction: column;
		order: 1;
		justify-content: center;
	`;
	export const WeekDay = styled.h3`
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	`;
	export const WeatherStatus = styled.h5`
		font-size: 11px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	`;
	export const WeatherImage = styled.img`
		height: 35px;
		width: 35px;
		margin: 0px 10px;
		@media (min-width: 725px) {
			height: 10em;
			width: 10em;
			margin: 0px 25px;
		}
	`;

	export const TempWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`;
	export const MaxTemp = styled.h3`
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	`;
	export const MinTemp = styled.h5`
		align-self: center;
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 2em;
		}
	`;

	// Detail Styles

	export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto
  width: 100%;
  @media (min-width: 725px) {
    padding: 25px;
}
`;
	export const DateWrapper = styled.div`
		margin-bottom: 30px;
		align-self: flex-start;
	`;

	export const Today = styled.h1`
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 3px;
		@media (min-width: 725px) {
			font-size: 6em;
		}
	`;
	export const MonthDate = styled.h5`
		font-size: 20px;
		color: #646464;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	`;

	export const MainContent = styled.div`
		display: flex;
		padding-bottom: 30px;
		justify-content: space-between;
	`;

	export const SubMainContent = styled.div`
		display: flex;
	`;

	// export const DetailTempWrapper = styled.div`
	//   display: flex;
	//   flex-direction: column;
	// `;
	export const FeelsLikeWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 30px;
	`;
	export const FeelsLikeTemp = styled.p`
		font-size: 20px;
		margin: 5px 0;
		@media (min-width: 725px) {
			font-size: 10em;
		}
	`;

	export const FeelsLikeHeader = styled.div`
		font-size: 20px;
	`;
	export const DetailMaxDegrees = styled.h1`
		font-size: 72px;
		@media (min-width: 725px) {
			font-size: 15em;
		}
	`;
	export const DetailMinDegrees = styled.h3`
		font-size: 36px;
		color: #646464;
		align-self: center;
		@media (min-width: 725px) {
			font-size: 8em;
		}
	`;

	export const DetailStatusWrapper = styled.div`
		display: flex;
		flex-direction: column;
	`;
	export const Status = styled.h6`
		font-size: 17px;
		font-weight: lighter;
		color: #646464;
		align-self: center;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	`;
	export const Icon = styled.img`
		height: 75px;
		width: 75px;
		@media (min-width: 725px) {
			height: 32em;
			width: 32em;
		}
	`;

	export const DetailWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;
	export const Humidity = styled.h5`
		font-size: 17px;
		margin-bottom: 3px;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	`;
	export const Pressure = styled.h5`
		font-size: 17px;
		margin-bottom: 3px;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	`;
	export const Wind = styled.h5`
		font-size: 17px;
		@media (min-width: 725px) {
			font-size: 3em;
		}
	`;

	// Today Styles
	export const TodayContainer = styled.div`
		background-color: #03a9fa;
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 16px 0 40px 0;
		@media (min-width: 725px) {
			padding: 16px 168px 40px 40px;
		}
		@media (min-width: 575px) {
			flex-direction: row;
			padding: 16px 0px 40px 40px;
		}
	`;

	export const WeatherTemps = styled.div`
		width: 100%;
		display: flex;
		justify-content: space-around;
		@media (min-width: 575px) {
			width: 50%;
			flex-direction: column;
			justify-content: flex-start;
		}
	`;
	export const TodayDate = styled.h3`
		font-size: 25px;
		margin-bottom: 1em;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 50px;
		}
	`;
	export const Location = styled.div`
		font-size: 15px;
		margin-top: 10px;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 40px;
		}
	`;
	export const TodayMaxDegrees = styled.h2`
		font-size: 35px;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 6em;
		}
		@media (min-width: 575px) {
			font-size: 45px;
		}
	`;
	export const TodayMinDegrees = styled.h3`
		font-size: 30px;
		color: #fff;
		@media (min-width: 725px) {
			font-size: 5em;
		}
		@media (min-width: 575px) {
			font-size: 35px;
		}
	`;
	export const WeatherForecast = styled.div`
		display: flex;
		justify-content: space-evenly;
		flex-direction: row-reverse;
		@media (min-width: 575px) {
			margin-left: 3em;
			flex-direction: column;
			justify-content: start;
		}
	`;
	export const WeatherIcon = styled.img`
		height: 75px;
		width: 75px;
		@media (min-width: 725px) {
			height: 25em;
			width: 25em;
		}
	`;
	export const TodayForecast = styled.h1`
		font-size: 17px;
		color: #fff;
		align-self: center;
		margin-left: 1em;
		@media (min-width: 575px) {
			align-self: start;
		}

		@media (min-width: 725px) {
			font-size: 5em;
		}
	`;
</script>
