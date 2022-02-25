import React from "react";
import ReactDOM from "react-dom";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";

import AppCSS from "./App.module.css";
import PizzaPictureCmp from "../component/PizzaPictureCmp";
import Cart from "./Cart";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <div>
        
        </div>
        <PizzaPictureCmp />
        <Cart></Cart>
        <div className={AppCSS.siteTitle}>Delicious Italian Pizza</div>
      </div>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
