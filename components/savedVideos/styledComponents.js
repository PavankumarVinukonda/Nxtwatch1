import styled from 'styled-components'

export const SavedVideosBG = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

export const Box = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
`
export const SavedVidesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Box1 = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${props => (props.Dark ? '#4e4e52' : '#bec3d4')};
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
export const SavedHeading = styled.h1`
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const SavedVideosContainer = styled.ul`
  width: 100%;
`
export const NovideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
`
export const NovideosImg = styled.img`
  height: 70vh;
  width: 90%;
`
