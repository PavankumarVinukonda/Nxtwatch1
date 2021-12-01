import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {ImExit} from 'react-icons/im'
import {GiHamburgerMenu} from 'react-icons/gi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBar,
  WebSiteLogo,
  NavBox,
  ToggleButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'
import './index.css'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {DarkMode, toggleDarkMode} = value
      const onClickingToggleMode = () => {
        toggleDarkMode()
      }
      const onClikingLogOutButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const onClikingWebsiteLogo = () => {
        const {history} = props
        history.replace('/')
      }

      return (
        <NavBar Dark={DarkMode}>
          {DarkMode ? (
            <WebSiteLogo
              onClick={onClikingWebsiteLogo}
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="Website Logo"
            />
          ) : (
            <WebSiteLogo
              onClick={onClikingWebsiteLogo}
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="Website Logo"
            />
          )}
          <NavBox>
            <ToggleButton type="button" onClick={onClickingToggleMode}>
              {DarkMode ? (
                <BiSun className="sun" />
              ) : (
                <FaMoon className="Moon" />
              )}
            </ToggleButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            {DarkMode ? (
              <GiHamburgerMenu className="ham col" />
            ) : (
              <GiHamburgerMenu className="ham" />
            )}

            <LogoutButton
              Dark={DarkMode}
              type="button"
              onClick={onClikingLogOutButton}
            >
              Logout
            </LogoutButton>
            {DarkMode ? (
              <ImExit onClick={onClikingLogOutButton} className="ham col" />
            ) : (
              <ImExit onClick={onClikingLogOutButton} className="ham" />
            )}
          </NavBox>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
