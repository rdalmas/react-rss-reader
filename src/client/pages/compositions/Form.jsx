import React, { useState } from "react";

import http from "../../services/api";
import { ENDPOINTS } from "../../services/api";
import useAppState from "../../hooks/useAppState";
import Input from '../../components/Input';

const Form = () => {
  const [rssInput, setRssInput] = useState('');
  const [state, setAppState] = useAppState()

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setAppState({ loading: true, error: false, message: 'Loading...' });

    http.get(ENDPOINTS.rss, { params: { rssUrl: rssInput }})
      .then((res) => {
        setAppState({
          rssFeed: res.data.rss,
          loading: false,
          message: ''
        })
      })
      .catch(() => {
        setAppState({
          rssFeed: {},
          loading: false,
          error: true,
          message: 'Error loading RSS feed. Please check the url or try again later...'
        })
      });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="row center align-center">
        <label id="rssLabel" htmlFor="rss-input">Rss Url</label>
        <Input
          aria-labelledby="rssLabel"
          placeholder="Type the RSS feed url here..."
          id="rss-input"
          name="rss-input"
          value={rssInput}
          onChange={(e) => setRssInput(e.target.value)}
        />
        <button aria-label="Submit" disabled={!rssInput} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
