import styled from 'styled-components'

export const VideoDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`
export const VideosDetailsContainerBox = styled.div`
  display: flex;
  align-items: center;
`
export const VideodetailsView = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  height: 90vh;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
`
export const VideoContainer = styled.div`
  width: 80vw;
  justify-self: center;
  height: 50vh;
`
export const VideoTittle = styled.h1`
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
  font-family: Roboto;
  font-size: 20px;
  font-weight: solid;
`
export const LikesAndDisLikesBar = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  justify-content: space-between;
`
export const ViewsAndYearsBox = styled.div`
  display: flex;
  align-items: center;
`

export const LikeanddislikeSymbols = styled.div`
  display: flex;
  align-items: center;
`
export const CustumParagraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: solid;
  color: #94a3b8;
  margin-right: 10px;
`
export const SymbolContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelDescription = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  height: 60px;
  width: 60px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.h1`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  color: #94a3b8;
`
export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: 13px;
  margin-top: 20px;
`
export const ThumbnailButton = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
`
export const LoadingContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
`
export const FailureImg = styled.img`
  height: 70vh;
  width: 90%;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 80px;
  background-color: transparent;
  border: 0px;
`
