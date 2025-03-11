import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Counter from './modules/CounterProject/Counter';
import Todo from './modules/TodoProject/Todo';
import MealCard from './modules/MealProject/Components/MealCard';
import MealList from './modules/MealProject/Components/MealList';
import Navbar from './modules/MealProject/Components/Navbar';
import { useEffect, useState } from 'react';
import Pagination from './modules/MealProject/Components/Pagination';

function App() {
  const [search, setSearch] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
      <Navbar getSearchValue={setSearch} setPageNumber={setPageNumber} />
      <div className="body">
        <MealList
          searchValue={search}
          getTotalItems={setTotalItems}
          pageNumber={pageNumber}
        />
      </div>
      <Pagination totalItems={totalItems} setPageNumber={setPageNumber} />
    </>
  );
}

export default App;
