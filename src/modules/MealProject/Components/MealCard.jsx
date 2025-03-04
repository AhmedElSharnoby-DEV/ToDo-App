import React from 'react';
import '../Styles/MealCard.css';

const MealCard = (props) => {
  return (
    <>
      <div className="card meal-card shadow-sm">
        <img
          src={props.mealDetails.strMealThumb}
          className="card-img-top"
          alt="Delicious Meal"
        />
        <div className="card-body">
          <p className="card-text text-muted mb-2">
            {props.mealDetails.strMeal}
          </p>
          <h6 className="text-success fw-bold">
            {Math.trunc(Math.random() * 100)} $
          </h6>
          <a href="#" className="btn btn-custom">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default MealCard;
