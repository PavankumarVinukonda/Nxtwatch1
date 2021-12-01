import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {GoTasklist} from 'react-icons/go'
import {GiConsoleController} from 'react-icons/gi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBar,
  Box1,
  ThumbnailContainer,
  CustumHeading,
  Box2,
  Box2Heading,
  IconsContainer,
  SocialMediaIcons,
} from './styledComponents'

import './index.css'

const LeftNavBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {DarkMode} = value
      return (
        <NavBar Dark={DarkMode}>
          <Box1>
            <Link to="/" className="link">
              <ThumbnailContainer>
                {DarkMode ? (
                  <AiFillHome className="icons white" />
                ) : (
                  <AiFillHome className="icons" />
                )}

                <CustumHeading Dark={DarkMode}>Home</CustumHeading>
              </ThumbnailContainer>
            </Link>
            <Link to="/Trending" className="link">
              <ThumbnailContainer>
                {DarkMode ? (
                  <AiFillFire className="icons white" />
                ) : (
                  <AiFillFire className="icons" />
                )}

                <CustumHeading Dark={DarkMode}>Trending</CustumHeading>
              </ThumbnailContainer>
            </Link>
            <Link to="/gaming" className="link">
              <ThumbnailContainer>
                {DarkMode ? (
                  <GiConsoleController className="icons white" />
                ) : (
                  <GiConsoleController className="icons" />
                )}

                <CustumHeading Dark={DarkMode}>Gaming</CustumHeading>
              </ThumbnailContainer>
            </Link>
            <Link to="/SavedVideos" className="link">
              <ThumbnailContainer>
                {DarkMode ? (
                  <GoTasklist className="icons white" />
                ) : (
                  <GoTasklist className="icons" />
                )}

                <CustumHeading Dark={DarkMode}>Saved videos</CustumHeading>
              </ThumbnailContainer>
            </Link>
          </Box1>
          <Box2>
            <Box2Heading Dark={DarkMode}>CONTACT US</Box2Heading>
            <IconsContainer>
              <SocialMediaIcons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
          </Box2>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LeftNavBar
