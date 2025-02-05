import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ArrowBackIos } from '@material-ui/icons'
import { useStore } from '../src/Store'
import { NavBarIcon } from './NavBarIcon'
import {
HeaderContainer,
NavMenuButton,
NavBarTitle,
TodayDate
} from '../src/components/componentStyles'
export function NavBar () {
  const { state } = useStore()
  const today = state.weather?.forecast[0]
  const history = useHistory()
  const location = useLocation()
  const path = location.pathname
  const title = location.pathname.includes('details') ? 'Details' : 'Sunshine'

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/" ? (
            <NavMenuButton
              edge="start"
              color="inherit"
              aria-label="back to home"
              onClick={() => history.push("/")}
            >
              <ArrowBackIos />
            </NavMenuButton>
          ) : (
            ""
          )}
          <NavBarIcon />
          <div>
            <NavBarTitle
              data-testid="appTitle"
              primary={path !== "/" ? "" : "true"}
              variant="h6"
            >
              {title}
            </NavBarTitle>
            {path === "/" ? (
              <TodayDate data-testid="todayDate" variant="h3">
                Today, {today?.month}
              </TodayDate>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
}

NavBar.displayName = 'NavBar'