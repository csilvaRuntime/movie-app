import React, { useState } from "react";

const Pages = ({ numberPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination">
      <a onClick={prevPage} href="#">
        Prev
      </a>
      {pageNumbers.map((pgNumber) => (
        <a onClick={() => setCurrentPage(pgNumber)} href="#">
          {pgNumber}
        </a>
      ))}
      <div>{pageNumbers.length > 10 ? <a>...</a> : ""}</div>
      <a onClick={nextPage} href="#">
        Next
      </a>
    </div>
  );
};

export default Pages;
