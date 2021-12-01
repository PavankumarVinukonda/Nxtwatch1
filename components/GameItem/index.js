import {Link} from 'react-router-dom'
import {
  GameItemContainer,
  Paragraph,
  Box,
  Tittle,
  GameImg,
} from './styledComponents'
import NxtWatchVideosContext from '../../context/NxtWatchContext'

const GameItem = props => (
  <NxtWatchVideosContext.Consumer>
    {value => {
      const {DarkMode} = value
      const {GamingData} = props
      const {id, thumbnailUrl, title, viewCount} = GamingData
      return (
        <Link to={`/videos/${id}`} className="link">
          <GameItemContainer>
            <GameImg src={thumbnailUrl} alt="thumbnail" />
            <Box>
              <Tittle Dark={DarkMode}>{title}</Tittle>
              <Paragraph>{viewCount} Watching Worldwide</Paragraph>
            </Box>
          </GameItemContainer>
        </Link>
      )
    }}
  </NxtWatchVideosContext.Consumer>
)

export default GameItem
