import React from "react";
import ReactDOM from "react-dom";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";

import AppCSS from "./App.module.css";
import PizzaPictureCmp from "../component/PizzaPictureCmp";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialofferPizza = pizzas.find((pizzas) => pizzas.specialOffer);

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <div></div>
          <PizzaPictureCmp />
          <Cart>
            <div className={AppCSS.siteTitle}>Delicious Italian Pizza</div>
          </Cart>
        </div>
        {specialofferPizza && <SpecialOffer pizza={specialofferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
