import './App.css';
import image from './20944161.jpg';
import imageTwo from './man.jpg'
import { Grocerylist } from './GroceryList';


function App() {
  return (
    <div className='app'>
    <div className='container'>  
      <img src={ image } alt='shopping' width="200px" />
      </div>
      <div className='container'>
        <h1>Grocery List</h1> 
        </div>
      <Grocerylist />
      <div className='container'>
      <img src={ imageTwo } width="200px" alt="delivery man" />
      </div>
    </div>
  );
}

export default App;
