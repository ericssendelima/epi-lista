import React, { useState, useEffect, useContext } from "react";
import CardsCart from "../../components/CardsCart/CardsCart";
import { Link } from "react-router-dom";
import { EpiListContext } from "../../context/EpiListContext";


import "./Cart.css";

const Cart = () => {
  const { epiList } = useContext(EpiListContext);


  

  return (
    <div className="cart">
    <Link to="/Materials">Voltar</Link>
      <div>
        <ul id="cartList">
          {epiList.map((item) => (
            <li key={item.id}>
              <CardsCart
                id={item.id}
                name={item.name}
                quantidadeEpi={item.quantidadeEpi}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
