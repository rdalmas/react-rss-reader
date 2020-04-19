import React from "react";

import Item from "./Item.jsx";
import Pagination from "./Pagination.jsx";

const List = (props) => {
  const { data } = props;

  return data.map((feed) => (
    <div>
      <section>
        <ul>
          <Item {...feed} />
        </ul>
      </section>
      <section>
        <Pagination items={feed.item} />
      </section>
    </div>
    ));
};

export default List;
