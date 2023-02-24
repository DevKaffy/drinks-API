import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ProductCard from './Components/ProductCard';

function App() {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [drinks, setDrinks] = useState ("")
  const fetchDrinks = () => {
    axios 
    .get(url)
    .then((res) => setDrinks(res.data.drinks))
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDrinks();
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}> Classic Drinks</h1>
      {drinks.length === 0 ? (
        "Loading..."
      ) : (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: "2rem",
          }}
        >
          {drinks.map((drink) => (
            <ProductCard
              image={drink.strDrinkThumb}
              key={drink.idDrink}
              title={drink.strDrink}
              category={drink.strCategory}
              glass={drink.strGlass}
              instruction={drink.strInstructions}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default App
