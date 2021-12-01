import styled from 'styled-components'

export const TrendingCardContainer = styled.li`
  list-style: none;
  display: flex;
  width: 70vw;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const Thumbnail = styled.img`
  height: 250px;
  width: 320px;
  margin-right: 20px;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeadingElement = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
  margin-right: 10px;
`
export const ParagraphContainer = styled.div`
  display: flex;
`
