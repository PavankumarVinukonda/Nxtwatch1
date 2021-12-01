import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 10vh;
  width: 100vw;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  align-items: center;
`
export const WebSiteLogo = styled.img`
  height: 40px;
  width: 120px;
`
export const NavBox = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleButton = styled.button`
  background-color: transparent;
  border: 0px;
  margin-right: 20px;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
  @media (max-width: 576px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: ${props => (props.Dark ? '#ffffff' : '#000000')} solid 1px;
  border-radius: 2px;
  padding: 5px;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
  @media (max-width: 576px) {
    display: none;
  }
`
export const PopupcontainerForLogoutBtn = styled.div`
  display: flex;
`
