import React, { useState, createContext } from "react";

export const RssContext = createContext({}, () => {});

const RssProvider = ({ children }) => {
  const [rssFeed, setRssFeed] = useState({}, () => {});
  return (
    <RssContext.Provider value={[rssFeed, setRssFeed]}>
      {children}
    </RssContext.Provider>
  )
}

export default RssProvider;