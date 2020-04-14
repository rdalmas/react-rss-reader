import React, { useState, useContext } from "react";

import http from "../handle-request";
import { RssContext } from "./rss.provider";
import { endpoints as api } from "../constants";

const Form = () => {
  const [rssInput, setRssInput] = useState("");
  const [, setRssFeed] = useContext(RssContext);

  const fetchRssFeed = (e) => {
    e.preventDefault();
      http.get(api.getRssFeed, { params: { rssUrl: rssInput } })
        .then(response => response.json())
        .then(data => {
          console.log("DATA FROM SERVER => ", data);
          setRssFeed(data);
        })
  }

  return (
    <form onSubmit={(e) => fetchRssFeed(e)}>
      <label htmlFor="rss-input">Rss Feed Url</label>
      <input type="text" id="rss-input" name="rss-input" value={rssInput} onChange={(e) => setRssInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;