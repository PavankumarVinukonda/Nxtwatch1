import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {
  HomeBg,
  HomeBox,
  BannerAndVideosBox,
  BannerContainer,
  BannerBox1,
  WebsiteLogo,
  BannerBox2,
  Description,
  GetitnowButton,
  VideosContainer,
  SearchBarContainer,
  SearchBar,
  SearchIConCont,
  VideoCont,
  LoaderCont,
  FailureView,
  FailureImg,
  RetryButton,
  EmptyListView,
  EmptyListImg,
  EmptyListRetryButton,
} from './styledComponents'
import Leftnavbar from '../LeftNavbar'
import Header from '../Header'
import VideoItem from '../VideosItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const ApiStausConstans = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}
class Home extends Component {
  state = {
    showBanner: true,
    search: '',
    videoDetailsList: [],
    apiStatus: ApiStausConstans.intial,
    shownovideos: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {search} = this.state
    this.setState({
      apiStatus: ApiStausConstans.inprogress,
      shownovideos: false,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const responseArray = data.videos
      const VideosDetailsArray = responseArray.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        channelName: item.channel.name,
        ChannelProfileImgUrl: item.channel.profile_image_url,
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }))
      this.setState({
        videoDetailsList: [...VideosDetailsArray],
        apiStatus: ApiStausConstans.success,
      })
    } else {
      this.setState({
        apiStatus: ApiStausConstans.failure,
      })
    }
  }

  onSearching = event => {
    this.setState(
      {
        search: event.target.value,
      },
      this.getData,
    )
  }

  onclickingCrossSymbol = () => {
    this.setState({
      showBanner: false,
    })
  }

  renderBannerContainer = () => (
    <BannerContainer>
      <BannerBox1>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="Website Logo"
        />
        <AiOutlineClose
          onClick={this.onclickingCrossSymbol}
          className="close"
        />
      </BannerBox1>
      <BannerBox2>
        <Description>
          Buy Nxt Watch Premium prepaid plans With <br />
          UPI
        </Description>
        <GetitnowButton type="button">GET IT NOW</GetitnowButton>
      </BannerBox2>
    </BannerContainer>
  )

  renderVideoContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode} = value
        const {search, videoDetailsList} = this.state

        return (
          <VideosContainer Dark={DarkMode}>
            <SearchBarContainer Dark={DarkMode}>
              <SearchBar
                value={search}
                onChange={this.onSearching}
                type="text"
                placeholder="Search"
              />
              <SearchIConCont Dark={DarkMode}>
                <BiSearch className="search" />
              </SearchIConCont>
            </SearchBarContainer>
            <VideoCont Dark={DarkMode}>
              {videoDetailsList.map(item => (
                <VideoItem key={item.id} videoDetails={item} />
              ))}
            </VideoCont>
          </VideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoader = () => (
    <LoaderCont>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderCont>
  )

  onClickRetryButton = () => {
    this.getData()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode} = value
        return (
          <FailureView>
            {DarkMode ? (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="Failure img"
              />
            ) : (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="Failure img"
              />
            )}

            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureView>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onclikingEmptylistRetry = () => {
    this.setState(
      {
        search: '',
      },
      this.getData,
    )
  }

  renderEmptylistView = () => (
    <EmptyListView>
      <EmptyListImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <EmptyListRetryButton
        type="button"
        onClick={this.onclikingEmptylistRetry}
      >
        Retry
      </EmptyListRetryButton>
    </EmptyListView>
  )

  renderVideosAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case ApiStausConstans.inprogress:
        return this.renderLoader()
      case ApiStausConstans.success:
        return this.renderVideoContainer()
      case ApiStausConstans.failure:
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
          const {showBanner, videoDetailsList} = this.state
          const videosLenth = videoDetailsList.length === 0

          return (
            <HomeBg>
              <Header />
              <HomeBox>
                <Leftnavbar />
                <BannerAndVideosBox>
                  {showBanner ? this.renderBannerContainer() : null}
                  {videosLenth
                    ? this.renderEmptylistView()
                    : this.renderVideosAllViews()}
                </BannerAndVideosBox>
              </HomeBox>
            </HomeBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
