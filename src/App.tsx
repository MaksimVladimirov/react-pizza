import { Header, Categories, Sorting, PizzaBlock } from "./components";
import "./App.scss";
import { useEffect, useState } from "react";
import { PizzaInfo } from "./components";

// import pizzas from "./assets/pizzas.json";
// const pizzas = []
function App() {
  const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        fetch("https://6436da148205915d34fe9ac0.mockapi.io/pizzas")
          .then((response) => response.json())
          .then((json) => setPizzas(json))
          .catch(() => console.error("К сожалению возникли неполадки"));
    }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sorting />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza: PizzaInfo, index) => (
              <PizzaBlock key={index} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
