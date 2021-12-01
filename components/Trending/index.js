import {Component} from 'react'
import Cookies from 'js-cookie'
import {ImFire} from 'react-icons/im'
import Loader from 'react-loader-spinner'
import {
  TrendingPage,
  TrndingBox,
  LogoContainer,
  TrendingCont,
  Box1,
  TrendingHeading,
  VideosCont,
  Thumbnail,
  FailureViewContainer,
  FailureImg,
  RetryButton,
  LoaderCont,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import TrendingCard from '../TrendingCard'
import './index.css'

const apiStatusConstant = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstant.intial,
  }

  componentDidMount() {
    this.getData()
  }

  formotData = item => ({
    channelName: item.channel.name,
    ChannelProfileImage: item.channel.profile_image_url,
    id: item.id,
    publishedAt: item.published_at,
    thumbnailUrl: item.thumbnail_url,
    title: item.title,
    viewCount: item.view_count,
  })

  getData = async () => {
    const {apiStatus} = this.state
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const reposneData = data.videos
      const TrndingVideos = reposneData.map(item => this.formotData(item))
      this.setState({
        trendingVideosList: [...TrndingVideos],
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
    <NxtWatchContext.Consumer>
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
    </NxtWatchContext.Consumer>
  )

  renderLoader = () => (
    <LoaderCont>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderCont>
  )

  renderTrendingPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode} = value
        const {trendingVideosList} = this.state
        return (
          <TrendingCont Dark={DarkMode}>
            <Box1 Dark={DarkMode}>
              <LogoContainer Dark={DarkMode}>
                <ImFire className="logo" />
              </LogoContainer>
              <TrendingHeading>Trending</TrendingHeading>
            </Box1>
            <VideosCont>
              {trendingVideosList.map(item => (
                <TrendingCard key={item.id} Data={item} />
              ))}
            </VideosCont>
          </TrendingCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderAllView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.success:
        return this.renderTrendingPage()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkMode} = value
          const {trendingVideosList} = this.state

          return (
            <TrendingPage>
              <Header />
              <TrndingBox>
                <LeftNavbar />
                {this.renderAllView()}
              </TrndingBox>
            </TrendingPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
