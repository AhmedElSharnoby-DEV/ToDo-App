import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = ({ getSearchValue, setPageNumber }) => {
  const [search, setSearch] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSearchSubmit = () => {
    if (search.trim() === '') {
      setHasError(true);
    } else {
      // add logic to search
      setHasError(false);
      getSearchValue(search);
      setSearch('');
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <span
            className="navbar-brand fw-bold"
            onClick={() => {
              getSearchValue('');
              setPageNumber(1);
            }}
          >
            Resturant
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex" role="search">
              <input
                className={`form-control me-2 ${
                  hasError ? 'border border-danger' : ''
                }`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearchSubmit}>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
