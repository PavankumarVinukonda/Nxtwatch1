import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiGamepad} from 'react-icons/gi'

import Header from '../Header'
import LeftNavBar from '../LeftNavbar'
import GameItem from '../GameItem'
import NxtWatchVideosContext from '../../context/NxtWatchContext'
import {
  BGContainer,
  GamingBox,
  LogoCont,
  Box,
  GamingContainer,
  HeadingEl,
  GamingVideosContainer,
  LoderCont,
  FailureViewContainer,
  FailureImg,
  RetryButton,
} from './styledComponents'

import './index.css'

const apiStatusConstant = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstant.intial,
    gamingList: [],
  }

  componentDidMount() {
    this.getData()
  }

  formatData = item => ({
    id: item.id,
    thumbnailUrl: item.thumbnail_url,
    title: item.title,
    viewCount: item.view_count,
  })

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = data.videos
      const GamingData = fetchedData.map(item => this.formatData(item))
      this.setState({
        gamingList: [...GamingData],
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  onClikcingRetryButton = () => {
    this.getData()
  }

  renderFailureView = () => (
    <NxtWatchVideosContext.Consumer>
      {value => {
        const {DarkMode} = value
        return (
          <FailureViewContainer>
            {DarkMode ? (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="Failure"
              />
            ) : (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure"
              />
            )}
            <RetryButton type="button" onClikc={this.onClikcingRetryButton}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchVideosContext.Consumer>
  )

  renderLoader = () => (
    <LoderCont>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoderCont>
  )

  renderGaimingContainer = () => (
    <NxtWatchVideosContext.Consumer>
      {value => {
        const {DarkMode} = value
        const {gamingList} = this.state
        return (
          <GamingContainer Dark={DarkMode}>
            <GamingBox Dark={DarkMode}>
              <LogoCont Dark={DarkMode}>
                <GiGamepad className="icon" />
              </LogoCont>
              <HeadingEl Dark={DarkMode}>Gaming</HeadingEl>
            </GamingBox>
            <GamingVideosContainer>
              {gamingList.map(item => (
                <GameItem key={item.id} GamingData={item} />
              ))}
            </GamingVideosContainer>
          </GamingContainer>
        )
      }}
    </NxtWatchVideosContext.Consumer>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.success:
        return this.renderGaimingContainer()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchVideosContext.Consumer>
        {value => {
          const {DarkMode} = value
          return (
            <BGContainer>
              <Header />
              <Box>
                <LeftNavBar />
                {this.renderAllViews()}
              </Box>
            </BGContainer>
          )
        }}
      </NxtWatchVideosContext.Consumer>
    )
  }
}

export default Gaming
