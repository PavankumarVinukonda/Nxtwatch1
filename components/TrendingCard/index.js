import {Link} from 'react-router-dom'
import {
  TrendingCardContainer,
  Paragraph,
  Thumbnail,
  HeadingElement,
  VideoDetails,
  ParagraphContainer,
} from './styledComponents'

import NxtWatchVideosContext from '../../context/NxtWatchContext'
import './index.css'

const TrendingCard = props => (
  <NxtWatchVideosContext.Consumer>
    {value => {
      const {DarkMode} = value
      const {Data} = props
      const {
        channelName,
        ChannelProfileImage,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = Data
      return (
        <Link to={`/videos/${id}`} className="link">
          <TrendingCardContainer>
            <Thumbnail src={thumbnailUrl} alt="thumbnail" />
            <VideoDetails>
              <HeadingElement Dark={DarkMode}>{title}</HeadingElement>
              <Paragraph Dark={DarkMode}>{channelName}</Paragraph>
              <ParagraphContainer>
                <Paragraph Dark={DarkMode}>{viewCount} views .</Paragraph>
                <Paragraph Dark={DarkMode}>{publishedAt}</Paragraph>
              </ParagraphContainer>
            </VideoDetails>
          </TrendingCardContainer>
        </Link>
      )
    }}
  </NxtWatchVideosContext.Consumer>
)

export default TrendingCard
