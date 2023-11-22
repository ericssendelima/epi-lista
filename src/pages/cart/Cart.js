import React, { useState, useContext, useEffect } from "react";
import CardsCart from "../../components/CardsCart/CardsCart";
import { useNavigate } from "react-router-dom";
import { EpiListContext } from "../../context/EpiListContext";
import { NomeContext } from "../../context/NomeContext.js";
import axios from "axios";

import "./Cart.css";
import { Button } from "react-bootstrap";

const Cart = () => {
  const navigate = useNavigate();

  const { epiList } = useContext(EpiListContext);
  const { colaborador } = useContext(NomeContext);

  const { mat, nome } = colaborador;

  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ericssendelima/epi-lista/main/src/data/pitoresList.json"
      );
      const data = await res.data;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let texto = `[  ${mat} - ${nome}  ]`;

  epiList.map((obj) => {
    texto += `

      ${obj.name}     
   -  Código SAP: ${obj.id}                    
   -  quantidade: ${obj.quantidadeEpi}  
   `;
    return obj;
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
  
  const voltar = () => {
    if(user.jatistas.map((user) => Object.values(user).shift()).includes(mat)){
      navigate("/Materials"); 
    }else{
      navigate("/materiaisPintores"); 
    }
  };

  return (
    <div className="cart">
      <div className="itemsCartList">
        <ul id="cartList" style={{ paddingLeft: "0" }}>
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
      <div className="footerCart">
        <Button onClick={voltar}>Voltar</Button>
        <Button onClick={enviar}>Enviar</Button>
      </div>
    </div>
  );
};

export default Cart;
