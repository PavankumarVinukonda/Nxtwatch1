import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 350px;
`
export const VideoImg = styled.img`
  height: 230px;
  width: 320px;
  margin-bottom: 20px;
`
export const VideoDescriptionBox = styled.div`
  display: flex;
`
export const ProfileLogo = styled.img`
  height: 40px;
  width: 40px;
  padding-right: 10px;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: solid;
  flex-wrap: wrap;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const CustomHeading = styled.h1`
  font-family: roboto;
  font-size: 12px;
  color: #94a3b8;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
