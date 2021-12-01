import styled from 'styled-components'

export const BGContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const Box = styled.div`
  display: flex;
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow: scroll;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
`
export const GamingBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.Dark ? '#475569' : '#e2e8f0')};
  padding: 20px;
`
export const LogoCont = styled.div`
  display: flex;
  height: 80px;
  width: 90px;
  border-radius: 40px;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  text-align: center;
`
export const HeadingEl = styled.h1`
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const GamingVideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const LoderCont = styled.div`
  display: flex;
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
