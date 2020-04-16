import React, { useContext } from "react";

import { AppContext } from "../providers/app.provider";
import Item from "../components/Item.jsx";
import ItemsPaginated from "./ItemsPaginated.jsx";
import arrayMap from "../util/arrayMap";

const List = () => {
  const { rssFeed, loading, error } = useContext(AppContext);
  return (
    <>
      {!error && !loading && rssFeed && rssFeed.channel && arrayMap(rssFeed.channel, function(data) {
        return (
          <div>
            <section>
              <ul>
                <Item {...data} />
              </ul>
            </section>
            <section>
              <ItemsPaginated items={data.item} />
            </section>
          </div>
          )
      })}
    </>
  )
};

export default List;