import React, { useState, createContext } from 'react';

const defaultState = {
  loading: false,
  error: false,
  message: '',
  rssFeed: {},
  setAppState: () => {}
}

export const AppContext = createContext({...defaultState});

const AppProvider = ({ children }) => {
  const setAppState = ({
    loading,
    error,
    rssFeed,
    message
  }) => {
    updateState(prevState => {
      const newState = { ...prevState, loading, error, rssFeed, message }
      return newState;
    })
  }

  const defaultAppState = {
    loading: false,
    error: false,
    rssFeed: {},
    message: '',
    setAppState
  }

  const [appState, updateState] = useState(defaultAppState);

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;