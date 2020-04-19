import React from 'react';
import useAppState from "../../hooks/useAppState";
import FeedList from '../../components/feed-list';

const List = () => {
  const [{ error, loading, rssFeed }] = useAppState;

  if (error && !loading && rssFeed && rssFeed.channel) {
    return null;
  }

  return <FeedList data={rssFeed.channel} />;
};


export default List;
