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
import PopupProductDetails from './modules/MealProject/Components/PopupProductDetails';
import { createContext } from 'react';

export const productDetailsContext = createContext();
function App() {
  const [search, setSearch] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemDetails, setItemDetails] = useState({});
  const [isPopupShow, setIsPopupShow] = useState(false);
  return (
    <>
      <Navbar getSearchValue={setSearch} setPageNumber={setPageNumber} />

      <div className="body">
        {isPopupShow && (
          <PopupProductDetails
            itemDetails={itemDetails}
            setIsPopupShow={setIsPopupShow}
          />
        )}
        <productDetailsContext.Provider
          value={{ setItemDetails, setIsPopupShow }}
        >
          <MealList
            searchValue={search}
            getTotalItems={setTotalItems}
            pageNumber={pageNumber}
          />
        </productDetailsContext.Provider>
      </div>
      <Pagination totalItems={totalItems} setPageNumber={setPageNumber} />
    </>
  );
}

export default App;
