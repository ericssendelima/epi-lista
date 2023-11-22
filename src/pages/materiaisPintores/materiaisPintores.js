import "./materiaisPintores.css";

import React, { useEffect, useState, useContext } from "react";

import { NomeContext } from "../../context/NomeContext.js";
import { EpiListContext } from "../../context/EpiListContext";

import { Cards } from "../../components/cards/Cards.js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const concluir = async () => {
    navigate("/Cart");
  };

  const voltar = () => {
    setEpiList([]);
    navigate("/");
  };

  const doIt = (e) => {
    e.preventDefault();
  };

  return (
    <div className="materials">
      <h1>Pintor</h1>
      <Button onClick={voltar}>Voltar</Button>
      <p
        id="dados"
        style={{ display: "flex", color: "white", justifyContent: "center" }}
      >
        {mat}
      </p>
      <p
        id="dados"
        style={{ display: "flex", color: "white", justifyContent: "center" }}
      >
        {nome}
      </p>

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
      <Button
        id="concluir"
        style={{ height: "50px", width: "240px" }}
        variant="info"
        size="lg"
        onClick={concluir}
      >
        Concluir
      </Button>
    </div>
  );
};

export default MateriaisPintores;
