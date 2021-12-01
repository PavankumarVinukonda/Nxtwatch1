import {Component} from 'react'
import {ImFire} from 'react-icons/im'
import NxtWatchVideosContext from '../../context/NxtWatchContext'
import Header from '../Header'
import LeftNavBar from '../LeftNavbar'
import TrendingCard from '../TrendingCard'
import {
  SavedVideosBG,
  SavedVidesBox,
  Box1,
  LogoContainer,
  SavedHeading,
  Box,
  SavedVideosContainer,
  NovideosContainer,
  NovideosImg,
} from './styledComponents'
import './index.css'

class SavedVideos extends Component {
  state = {
    novideos: false,
  }

  renderSavedVideos = () => (
    <NxtWatchVideosContext.Consumer>
      {value => {
        const {savedVideosList, DarkMode} = value
        if (savedVideosList.length === 0) {
          return this.renderNoVideos()
        }
        return (
          <SavedVidesBox>
            <Box1 Dark={DarkMode}>
              <LogoContainer Dark={DarkMode}>
                <ImFire className="logo" />
              </LogoContainer>
              <SavedHeading Dark={DarkMode}>SavedVideos</SavedHeading>
            </Box1>
            <SavedVideosContainer>
              {savedVideosList.map(item => (
                <TrendingCard key={item.id} Data={item} />
              ))}
            </SavedVideosContainer>
          </SavedVidesBox>
        )
      }}
    </NxtWatchVideosContext.Consumer>
  )

  renderNoVideos = () => (
    <NxtWatchVideosContext.Consumer>
      {value => {
        const {DarkMode} = value
        return (
          <NovideosContainer Dark={DarkMode}>
            <NovideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
          </NovideosContainer>
        )
      }}
    </NxtWatchVideosContext.Consumer>
  )

  render() {
    return (
      <NxtWatchVideosContext.Consumer>
        {value => {
          const {DarkMode, savedVideosList} = value

          return (
            <SavedVideosBG Dark={DarkMode}>
              <Header />

              <Box>
                <LeftNavBar />
                {this.renderSavedVideos()}
              </Box>
            </SavedVideosBG>
          )
        }}
      </NxtWatchVideosContext.Consumer>
    )
  }
}

export default SavedVideos
