import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Counter from './modules/CounterProject/Counter';
import Todo from './modules/TodoProject/Todo';
import MealCard from './modules/MealProject/Components/MealCard';
import MealList from './modules/MealProject/Components/MealList';

function App() {
  return (
    <>
      <MealList />
    </>
  );
}

export default App;
