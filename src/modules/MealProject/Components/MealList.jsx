import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';
import '../Styles/MealList.css';

const MealList = ({ searchValue, getTotalItems, pageNumber }) => {
  const [mealItems, setMealItems] = useState([]);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
      );
      const data = await response.json();
      setMealItems(data.meals);
    };
    fetchTodos();
  }, []);

  // Calculate start and end indices for pagination
  const startIndex = (pageNumber - 1) * itemsPerPage; // Skip items
  const endIndex = startIndex + itemsPerPage; // Take 8 items

  // Filter and paginate the meal items
  const filteredItems = mealItems.filter((item) =>
    item.strMeal.toLowerCase().includes(searchValue.toLowerCase()),
  );
  useEffect(() => {
    getTotalItems(filteredItems.length);
  });

  const PaginatedItems = filteredItems.slice(startIndex, endIndex);

  return (
    <>
      <div className="card-list">
        {PaginatedItems.map((filteredItem) => (
          <MealCard key={filteredItem.idMeal} mealDetails={filteredItem} />
        ))}
      </div>
    </>
  );
};

export default MealList;
