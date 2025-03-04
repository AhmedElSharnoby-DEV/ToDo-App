import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';
import '../Styles/MealList.css';

const MealList = () => {
  const [mealItems, setMealItems] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
      );
      const data = await response.json();
      setMealItems((prev) => [...prev, ...data.meals]);
    };
    fetchTodos();
  }, []);
  return (
    <div className="gridContainer">
      {mealItems.map((item) => {
        return <MealCard key={item.idMeal} mealDetails={item} />;
      })}
    </div>
  );
};

export default MealList;
