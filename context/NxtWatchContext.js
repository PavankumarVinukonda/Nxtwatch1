import React from 'react'

const NxtWatchContext = React.createContext({
  DarkMode: false,
  toggleDarkMode: () => {},
  addingToSavedVideoList: () => {},
  savedVideosList: [],
})

export default NxtWatchContext
