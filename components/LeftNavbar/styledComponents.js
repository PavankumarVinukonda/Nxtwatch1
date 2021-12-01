import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  width: 15vw;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  height: 90vh;
  background-color: ${props => (props.Dark ? '#000000' : '#FFFFFF')};

  @media (max-width: 576px) {
    display: none;
  }
`

export const Box1 = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThumbnailContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 15px;
  padding-left: 0px;

  align-items: center;
`
export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
`
export const Box2Heading = styled.h1`
  font-family: roboto;
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SocialMediaIcons = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const CustumHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  font-weight: solid;
  margin-left: 10px;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
