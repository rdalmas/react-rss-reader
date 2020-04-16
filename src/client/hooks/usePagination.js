import { useState, useEffect } from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    scrollTop();
  }, [currentPage])

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function scrollTop() {
    window.scrollTo(0, 0);
  }

 function first() {
    setCurrentPage(1)
  }

  function last() {
    setCurrentPage(maxPage);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

 return { first, last, next, prev, currentData, currentPage, maxPage };
}

export default usePagination;
