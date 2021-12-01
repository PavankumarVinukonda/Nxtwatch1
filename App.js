import {Component} from 'react'

import {Route, Switch, BrowserRouter} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import LoginFrom from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/videoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SaveVideos from './components/savedVideos'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    DarkMode: true,
    savedVideosList: [],
  }

  addingToSavedVideoList = item => {
    const {savedVideosList} = this.state
    this.setState({
      savedVideosList: [...savedVideosList, item],
    })
  }

  toggleDarkMode = () => {
    this.setState(prvState => ({
      DarkMode: !prvState.DarkMode,
    }))
  }

  render() {
    const {DarkMode, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <NxtWatchContext.Provider
        value={{
          DarkMode,
          savedVideosList,
          toggleDarkMode: this.toggleDarkMode,
          addingToSavedVideoList: this.addingToSavedVideoList,
        }}
      >
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/savedVideos" component={SaveVideos} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact Path="/trending" component={Trending} />
            <Route exact path="/login" component={LoginFrom} />
          </Switch>
        </BrowserRouter>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
