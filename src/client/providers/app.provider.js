import React, { useState, createContext } from 'react';

const defaultState = {
  loading: false,
  error: false,
  message: '',
  rssFeed: {},
  setAppState: () => {}
}

const AppContext = createContext({...defaultState});

const defaultAppState = {
  loading: false,
  error: false,
  rssFeed: {},
  message: '',
}

const AppProvider = ({ children }) => {
  const setAppState = ({
    loading,
    error,
    rssFeed,
    message
  }) => {
    updateState(prevState => ({ ...prevState, loading, error, rssFeed, message }))
  }

  const [appState, updateState] = useState(defaultAppState);

  return (
    <AppContext.Provider value={{...appState, ...{ setAppState }}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext }
export default AppProvider;
