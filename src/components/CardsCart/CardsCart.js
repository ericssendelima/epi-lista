import { useState, useContext } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import { Button, Image } from "react-bootstrap";
import "./CardsCart.css";

const CardsCart = (props) => {
  const { setEpiList } = useContext(EpiListContext);
  let { id, name, quantidadeEpi, image } = props;

  const [quantity, setQuantity] = useState(0);

  const objControl = {
    id,
    name,
    quantidadeEpi,
    image,
  };

  //funções
  const sum = () => {
    setQuantity(quantity + 1);
  };

  const sub = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const Excluir = () => {
    setEpiList((prevEpiList) => {
      return prevEpiList.filter((epi) => objControl.id !== epi.id);
    });
  };

  return (
    <div className="container">
      <div className="header">
        <Image
          style={{
            height: "auto",
            objectFit: "scale-down",
            maxWidth: "89px",
            marginRight: "15px",
            boxSizing: "border-box",
          }}
          src={props.image}
          rounded
        />

        <div className="info">
          <h4>{props.name}</h4>
          <p id="codigo">{props.id}</p>
          <div className="footer">
            <div className="controls">
              <Button
                className="button"
                variant="info"
                size="sm"
                onClick={sub}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  margin: "0",
                  fontWeight: "bold",
                }}
              >
                {"-"}
              </Button>

              <p
                id="quantidade"
                style={{ margin: "0", padding: "5px", fontWeight: "bold" }}
              >
                {quantity}
              </p>

              <Button
                className="button"
                variant="info"
                size="sm"
                onClick={sum}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  margin: "1px",
                  fontWeight: "bold",
                }}
              >
                {"+"}
              </Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={Excluir}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                borderRadius: "10px",
                margin: "1px",
                fontWeight: "bold",
              }}
            >
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCart;
