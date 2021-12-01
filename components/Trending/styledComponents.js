import styled from 'styled-components'

export const TrendingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  width: 100%;
  height: 100vh;
  overflow: scroll;
`
export const TrndingBox = styled.div`
  display: flex;
`
export const TrendingCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  width: 100%;
  height: 90vh;
  overflow: scroll;
`
export const Box1 = styled.div`
  display: flex;
  padding: 20px;
  height: 20vh;

  align-items: center;
  background-color: ${props => (props.dark ? '#1e293b' : '#616e7c')};
`
export const VideosCont = styled.ul`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`
export const LogoContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
`
export const TrendingHeading = styled.h1`
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
`
export const Thumbnail = styled.img`
  height: 230x;
  width: 320px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  justify-content: center;
  align-items: center;
`

export const FailureImg = styled.img`
  height: 300px;
  width: 70vw;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 80px;
`
export const LoaderCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
