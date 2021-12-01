import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Header from '../Header'
import LeftNavBar from '../LeftNavbar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideodetailsView,
  VideoContainer,
  VideoTittle,
  LikesAndDisLikesBar,
  ViewsAndYearsBox,
  LikeanddislikeSymbols,
  VideoDetailsMainContainer,
  VideosDetailsContainerBox,
  CustumParagraph,
  SymbolContainer,
  ChannelDescription,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  Paragraph,
  LoadingContainer,
  FailureViewContainer,
  FailureImg,
  RetryButton,
} from './styledComponents'

import './index.css'

const apiStausConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    VideoDetails: {},
    apiStatus: apiStausConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getFormotedData = item => ({
    channelName: item.channel.name,
    channelProfileImgUrl: item.channel.profile_image_url,
    description: item.description,
    id: item.id,
    publishedAt: item.published_at,
    thumbnailUrl: item.thumbnail_url,
    title: item.title,
    videoUrl: item.video_url,
    viewCount: item.view_count,
  })

  getData = async () => {
    this.setState({
      apiStatus: apiStausConstants.inprogress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = data.video_details
      const videoData = this.getFormotedData(fetchedData)
      this.setState({
        VideoDetails: videoData,
        apiStatus: apiStausConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStausConstants.failure,
      })
    }
  }

  renderLodaingView = () => (
    <LoadingContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoadingContainer>
  )

  onClikngRetryButton = () => {
    this.getData()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode} = value
        return (
          <FailureViewContainer Dark={DarkMode}>
            <FailureImg src="" alt="" />
            <RetryButton type="button" onClick={this.onClikngRetryButton}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renederAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStausConstants.success:
        return this.renderVideoItemCOntainer()
      case apiStausConstants.failure:
        return this.renderLodaingView()
      case apiStausConstants.inprogress:
        return this.renderLodaingView()
      default:
        return null
    }
  }

  renderVideoItemCOntainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode, ThumbnailButton, addingToSavedVideoList} = value
        const {VideoDetails} = this.state

        const {
          channelName,
          channelProfileImgUrl,
          description,
          id,
          publishedAt,
          thumbnailUrl,
          title,
          videoUrl,
          viewCount,
        } = VideoDetails

        const addTodavedPlaylist = () => {
          addingToSavedVideoList(VideoDetails)
        }

        return (
          <VideodetailsView Dark={DarkMode}>
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls height="50vh" width="80vw" />
            </VideoContainer>
            <VideoTittle Dark={DarkMode}>{title}</VideoTittle>
            <LikesAndDisLikesBar>
              <ViewsAndYearsBox>
                <CustumParagraph>{viewCount} Views </CustumParagraph>
                <CustumParagraph> . {publishedAt}</CustumParagraph>
              </ViewsAndYearsBox>
              <LikeanddislikeSymbols>
                <SymbolContainer>
                  <BiLike className="icon" />
                  <CustumParagraph>Like</CustumParagraph>

                  <BiDislike className="icon" />
                  <CustumParagraph>Dislike</CustumParagraph>
                  <button
                    onClick={addTodavedPlaylist}
                    className="button"
                    type="button"
                  >
                    <MdPlaylistAdd className="icon" />
                  </button>

                  <CustumParagraph>Save</CustumParagraph>
                </SymbolContainer>
              </LikeanddislikeSymbols>
            </LikesAndDisLikesBar>
            <hr className="horizantalLine" />
            <ChannelDescription>
              <ChannelLogo src={channelProfileImgUrl} alt="ChannelLogo" />
              <ChannelDetails>
                <ChannelName>{channelName}</ChannelName>
                <CustumParagraph>2.4K subscribers</CustumParagraph>
                <Paragraph>{description}</Paragraph>
              </ChannelDetails>
            </ChannelDescription>
          </VideodetailsView>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <VideoDetailsMainContainer>
        <Header />
        <VideosDetailsContainerBox>
          <LeftNavBar />
          {this.renederAll()}
        </VideosDetailsContainerBox>
      </VideoDetailsMainContainer>
    )
  }
}

export default VideoItemDetails
