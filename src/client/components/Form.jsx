import React, { useState, useContext } from "react";

import http from "../handle-request";
import { AppContext } from "../providers/app.provider";
import { endpoints as api } from "../constants";

const Form = () => {
  const [rssInput, setRssInput] = useState("");
  const { setAppState } = useContext(AppContext);

  const fetchRssFeed = async (e) => {
    e.preventDefault();
    try {
      setAppState({ loading: true, error: false, message: "Loading..." });
      const response = await http.get(api.getRssFeed, { params: { rssUrl: rssInput }});
      setAppState({ rssFeed: response.data.rss, loading: false, message: "" });
    } catch (e) {
      setAppState({ rssFeed: {}, loading: false, error: true, message: "Error loading RSS feed. Please check the url or try again later..." });
    }
  }

  return (
    <form onSubmit={fetchRssFeed}>
      <div className="row center align-center">
        <label id="rssLabel" htmlFor="rss-input">Rss Url</label>
        <input aria-labelledby="rssLabel" type="text" placeholder="Type the RSS feed url here..." id="rss-input" name="rss-input" value={rssInput} onChange={(e) => setRssInput(e.target.value)} />
        <button aria-label="Submit" disabled={!rssInput} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;