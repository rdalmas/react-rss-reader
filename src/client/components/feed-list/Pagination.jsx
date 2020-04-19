import React from "react";

import usePagination from "../../hooks/usePagination";
import Item from "./Item.jsx";
import toArray from "../../util/to-array";

const Pagination = ({ items }) => {
  const { next, prev, first, last, currentData, currentPage, maxPage } = usePagination(items, 10);

  return (
    <>
      <ul>
        {toArray(currentData()).map(data => <Item {...data} />)}
      </ul>
      <div className="center">
        <button aria-label="go to first page" id="first" disabled={currentPage === 1} name="first" onClick={first}>First</button>
        <button aria-label="go to previous page" id="prev" disabled={currentPage === 1} name="prev" onClick={prev}>Previous</button>
        <span>{currentPage} of {maxPage}</span>
        <button aria-label="go to next page" id="next" disabled={currentPage === maxPage}name="next" onClick={next}>Next</button>
        <button aria-label="go to last page" id="last" disabled={currentPage === maxPage} name="last" onClick={last}>Last</button>
      </div>
    </>
  );
}

export default Pagination;
