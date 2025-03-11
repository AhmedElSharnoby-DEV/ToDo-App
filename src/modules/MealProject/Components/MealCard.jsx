import React, { useEffect } from 'react';
import '../Styles/MealCard.css';
import { useContext } from 'react';
import { productDetailsContext } from '../../../App';
const MealCard = (props) => {
  useEffect(() => {
    console.log('card component rendered');
  });
  const actions = useContext(productDetailsContext);
  const HandleViewDetails = () => {
    actions.setItemDetails((prev) => ({
      ...prev,
      itemName: props.mealDetails.strMeal,
      itemLogo: props.mealDetails.strMealThumb,
    }));
    actions.setIsPopupShow(true);
  };
  return (
    <>
      <div className="card meal-card shadow-sm">
        <img
          src={props.mealDetails.strMealThumb}
          className="card-img-top"
          alt="Delicious Meal"
        />
        <div className="card-body">
          <p className="card-text text-muted mb-0">
            {props.mealDetails.strMeal}
          </p>
          <h6 className="text-success fw-bold price-and-button">19$</h6>
          <button className="btn btn-custom mt-2" onClick={HandleViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default MealCard;
