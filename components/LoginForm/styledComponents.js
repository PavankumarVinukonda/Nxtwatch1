import styled from 'styled-components'

export const LoginFormBackGround = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.Dark ? '#475569' : '#ffffff')};
`
export const LoginFormContainer = styled.div`
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WebsiteLogo = styled.img`
  height: 60px;
  width: 120px;
  margin-bottom: 10px;
`
export const LoginFormCont = styled.form`
  display: flex;
  flex-direction: column;
`
export const CustumLabel = styled.label`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const CustumInput = styled.input`
  height: 30px;
  width: 350px;
  border: ${props => (props.Dark ? '#ffffff' : '#000000')} solid 1px;
  border-radius: 2px;
  margin-bottom: 10px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`

export const LoginButton = styled.button`
  height: 40px;
  width: 350px;
  background-color: #3b82f6;
  border-radius: 5px;
  color: white;
  border: 0px;
`

export const ErrorMsg = styled.p`
  font-size: 15px;
  color: red;
  font-family: Roboto;
  font-weight: solid;
`
