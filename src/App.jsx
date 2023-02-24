import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [drinks, setDrinks] =(useState(0))
  const fetchDrinks = () => {
    axios 
    .get(url)
    .then((res) => setDrinks(res.data.message))
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDrinks();
  }, []);
  return (
    <div className='App'>
    <img src={drinks} alt="" />
    </div>
  )
}

export default App
