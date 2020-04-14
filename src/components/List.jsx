import React, { useContext } from "react";

import { RssContext } from "./rss.provider";

const List = () => {
  const [rssFeed] = useContext(RssContext);
  return (
    <>
      {console.log("RSS FEED => ", rssFeed)}
    </>
  )
};

export default List;