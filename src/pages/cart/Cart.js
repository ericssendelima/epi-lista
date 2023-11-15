import React, { useContext } from "react";
import CardsCart from "../../components/CardsCart/CardsCart";
import { Link } from "react-router-dom";
import { EpiListContext } from "../../context/EpiListContext";
import { NomeContext } from "../../context/NomeContext.js";


import "./Cart.css";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { epiList } = useContext(EpiListContext);
  const { colaborador } = useContext(NomeContext);

  const { mat, nome } = colaborador;



  let texto = `[  ${mat} - ${nome}  ]`;

  epiList.map((obj) => {
    texto += `

      ${obj.name}     
   -  Código SAP: ${obj.id}                    
   -  quantidade: ${obj.quantidadeEpi}  
   `;
  });

  //console.log(texto)

  let conteudo = encodeURIComponent(texto)
    .replace(/['()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/%(?:7C|60|5E)/g, unescape);

  const url = "https://api.whatsapp.com/send?text=" + conteudo;


  const enviar = () => {
    window.location.href = url;
  };

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
      <Button onClick={enviar}>Enviar</Button>
    </div>
  );
};

export default Cart;
