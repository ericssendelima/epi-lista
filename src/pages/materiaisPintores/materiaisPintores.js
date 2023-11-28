import "./materiaisPintores.css";

import React, { useEffect, useState, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";

import { NomeContext } from "../../context/NomeContext.js";
import { EpiListContext } from "../../context/EpiListContext";

import { Cards } from "../../components/cards/Cards.js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Fardamentos from "../../components/Fardamentos/Fardamentos.js";


const MateriaisPintores = () => {
  const navigate = useNavigate();

  const { colaborador } = useContext(NomeContext);
  const { epiList, setEpiList } = useContext(EpiListContext);

  const [itens2, setItens2] = useState([]);

  const { mat, nome } = colaborador;

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ericssendelima/epi-lista/main/src/data/epiListPintores.json"
      );
      const data = await res.data;
      setItens2(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Concluir = async () => {
    navigate("/Cart");
  };

  const voltar = () => {
    setEpiList([]);
    navigate("/");
  };


  return (
    <div className="materials">
      <div className="epiHeader">
        <div className="topEpiHeader">
          <Button
            style={{
              fontWeight: "bold",
              height: "30px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(109, 181, 233)",
              color: "rgb(13, 13, 88)",
              border: "none",
            }}
            size="sm"
            onClick={voltar}
          >
            Voltar
          </Button>
          <h3
            id="dados"
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
            }}
          >
            {mat}
          </h3>
          <h3
            id="dados"
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
            }}
          >
            {nome}
          </h3>
          <h3 id="cargo">Pintor</h3>
        </div>
        <div className="bottomEpiHeader">
          <Fardamentos />
        </div>
      </div>
      <span id="epih2">
        <h2>Epi :</h2>
      </span>

      <div className="divMaterialsList">
        <ol className="materialsList" style={{ padding: "0" }}>
          {itens2.map(
            (item) =>
              !epiList.filter((epi) => epi.id === item.id).length > 0 && (
                <li className="materialItems" key={item.id}>
                  <Cards
                    id={item.id}
                    name={item.name}
                    quantidadeEpi={item.quantidadeEpi}
                    image={item.image}
                    disableControl={item.disableControl}
                  />
                </li>
              )
          )}
        </ol>
      </div>
      <div className="footerList">
        <Button
          id="concluir"
          style={{
            height: "50px",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            boxShadow: "0 0 30px rgb(13, 13, 50, 0.9)",
            position: "fixed",
            bottom: "3%",
            right: "16px",
            zIndex: "1",
            color: "rgb(13, 13, 88)",
            backgroundColor: "rgb(109, 181, 233)",
            border: "none",
            fontWeight:"bold"
          }}
          variant="info"
          size="lg"
          onClick={Concluir}
        >
          <BsCartCheck />
          <span id="visorCarrinho">{epiList.length}</span>
        </Button>

        <Button
          id="subir"
          style={{
            height: "35px",
            width: "35px",
            fontWeight: "bold",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: "3%",
            left: "16px",
            zIndex: "1",
            color: "rgb(13, 13, 88)",
            backgroundColor: "rgb(109, 181, 233)",
            border: "none",
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          {"^"}
        </Button>
      </div>
    </div>
  );
};

export default MateriaisPintores;
