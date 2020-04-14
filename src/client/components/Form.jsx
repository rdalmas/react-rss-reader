import React, { useState, useContext } from "react";

import http from "../handle-request";
import { RssContext } from "./rss.provider";
import { endpoints as api } from "../constants";

const Form = () => {
  const [rssInput, setRssInput] = useState("");
  const [, setRssFeed] = useContext(RssContext);

  const fetchRssFeed = async (e) => {
    e.preventDefault();
    try {
      const rssFeed = await http.get(api.getRssFeed, { params: { rssUrl: rssInput }});
      setRssFeed(rssFeed);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={fetchRssFeed}>
      <label htmlFor="rss-input">Rss Feed Url</label>
      <input type="text" id="rss-input" name="rss-input" value={rssInput} onChange={(e) => setRssInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;