import React, { useContext } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import { Card, Button } from "react-bootstrap";

export const Cards = (props) => {
  const { epiList, setEpiList } = useContext(EpiListContext);

  let { id, name, quantidadeEpi, image } = props;

  //criar um objeto para controlar aqueles que serão adicionados no cartContext
  const objControl = {
    id,
    name,
    quantidadeEpi,
    image,
  };

  //se for = 0 seta o objControl completo, se não, seta apenas a quantidade
  const Adicionar = () => {
    if (!epiList.filter((obj) => obj.id === objControl.id).length > 0) {
      setEpiList([...epiList, objControl]);
    }
  };

  return (
    <Card
      border="secondary"
      style={{
        color: "white",
        width: "15rem",
        height: "300px",
        padding: "0",
        border: "0",
        margin: "20px",
        marginBottom: "0",
        display: "block",
        justifyContent: "center",
      }}
      bg="dark"
      text="white"
    >
      <Card.Header
        style={{
          padding: "0",
          backgroundColor: "white",
          width: "15rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "180px", width: "15rem", objectFit: "scale-down" }}
        />
      </Card.Header>
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Text style={{ color: "white" }}>
          <strong>{name}</strong>
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          className="buttonCard"
          onClick={Adicionar}
          style={{
            backgroundColor: "rgb(109, 181, 233)",
            color: "rgb(13, 13, 88)",
            border: "none",
            marginTop: "3px",
            width: "100px",
            height: "40px",
            fontWeight:"bold"
          }}
        >
          Adicionar
        </Button>
      </Card.Footer>
    </Card>
  );
};
