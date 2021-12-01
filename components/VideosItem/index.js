import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoItemContainer,
  ProfileLogo,
  VideoImg,
  VideoDescriptionBox,
  Description,
  Box,
  CustomHeading,
  ViewsContainer,
} from './styledComponents'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    ChannelProfileImgUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoItemContainer>
              <VideoImg src={thumbnailUrl} alt="thumbnail" />
              <VideoDescriptionBox>
                <ProfileLogo
                  src={ChannelProfileImgUrl}
                  alt="ChannelProfileImgUrl"
                />
                <Box>
                  <Description Dark={DarkMode}>{title}</Description>
                  <CustomHeading>{channelName}</CustomHeading>
                  <ViewsContainer>
                    <CustomHeading>{viewCount} view </CustomHeading>
                    <CustomHeading>. {publishedAt}</CustomHeading>
                  </ViewsContainer>
                </Box>
              </VideoDescriptionBox>
            </VideoItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
