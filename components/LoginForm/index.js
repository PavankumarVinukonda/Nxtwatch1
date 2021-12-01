import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtwatchContext from '../../context/NxtWatchContext'
import {
  LoginFormBackGround,
  LoginFormContainer,
  WebsiteLogo,
  LoginFormCont,
  CustumLabel,
  CustumInput,
  CheckBoxContainer,
  Checkbox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
  }

  onEntringUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onEntringPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleingCheckbox = () => {
    this.setState(prvState => ({
      showPassword: !prvState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({
      errorMsg: `*${error}`,
    })
  }

  onClickingLoginButton = async event => {
    event.preventDefault()
    const {username, password, errorMsg} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {DarkMode} = value
          console.log(DarkMode)
          const {showPassword, errorMsg, username, password} = this.state
          const ShowingPassword = showPassword ? 'text' : 'password'
          return (
            <LoginFormBackGround Dark={DarkMode}>
              <LoginFormContainer Dark={DarkMode}>
                {DarkMode ? (
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="Website Logo"
                  />
                ) : (
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="Website logo"
                  />
                )}
                <LoginFormCont onSubmit={this.onSubmitingForm}>
                  <CustumLabel Dark={DarkMode} htmlFor="username">
                    USERNAME
                  </CustumLabel>
                  <CustumInput
                    value={username}
                    Dark={DarkMode}
                    id="username"
                    placeholder="UserName"
                    type="text"
                    onChange={this.onEntringUsername}
                  />
                  <CustumLabel Dark={DarkMode} htmlFor="password">
                    PASSWORD
                  </CustumLabel>
                  <CustumInput
                    value={password}
                    Dark={DarkMode}
                    placeholder="Password"
                    id="password"
                    type={ShowingPassword}
                    onChange={this.onEntringPassword}
                  />
                  <CheckBoxContainer>
                    <Checkbox
                      type="checkBox"
                      id="checkbox"
                      onChange={this.onToggleingCheckbox}
                    />
                    <CustumLabel Dark={DarkMode} htmlFor="checkbox">
                      Show Password
                    </CustumLabel>
                  </CheckBoxContainer>
                  <LoginButton
                    type="submit"
                    onClick={this.onClickingLoginButton}
                  >
                    Login
                  </LoginButton>
                  <ErrorMsg>{errorMsg}</ErrorMsg>
                </LoginFormCont>
              </LoginFormContainer>
            </LoginFormBackGround>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default LoginForm
