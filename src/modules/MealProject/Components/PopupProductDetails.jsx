import React from 'react';
import { createPortal } from 'react-dom';

const PopupProductDetails = ({ itemDetails, setIsPopupShow }) => {
  return createPortal(
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
      {' '}
      <div
        className="card position-relative p-4"
        style={{ width: '400px', zIndex: 1051 }}
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-2"
          onClick={() => setIsPopupShow(false)}
        ></button>
        <img
          src={itemDetails.itemLogo}
          alt="Product"
          className="card-img-top rounded mx-auto d-block"
          style={{ width: '290px', height: 'auto' }}
        />
        <div className="card-body text-center">
          <h2 className="card-title">{itemDetails.itemName}</h2>
          <p className="card-text text-muted">
            This is a fixed description about the meal due to API has no
            description.
          </p>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <span className="fw-bold fs-5">Price : 19$</span>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('popup-root'),
  );
};

export default PopupProductDetails;
