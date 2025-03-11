import React from 'react';
import '../Styles/Pagination.css';
const Pagination = ({ totalItems, setPageNumber }) => {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hadlePaginationClick = (e) => {
    const pageNumber = e.currentTarget.getAttribute('page-number');
    setPageNumber(pageNumber);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <li className="page-item" key={index}>
            <a
              className="page-link"
              page-number={index + 1}
              onClick={hadlePaginationClick}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
