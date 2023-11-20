import { useState, useContext } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import { Button, Image } from "react-bootstrap";
import "./CardsCart.css";

const CardsCart = (props) => {
  const { epiList, setEpiList } = useContext(EpiListContext);
  let { id, name, quantidadeEpi, image } = props;

  const [quantity, setQuantity] = useState(quantidadeEpi);

  const objControl = {
    id,
    name,
    quantidadeEpi,
    image,
  };

  //funções
  const sum = () => {
    setQuantity(prevQuantity => prevQuantity + 1);

    let newArr = epiList.map((obj) => {
      if (obj.name === objControl.name) {
        obj.quantidadeEpi = quantity + 1;
      }
      return obj;
    });
    setEpiList(newArr);

    console.log(epiList);
    //objControl.quantidadeEpi = quantity;
  };

  const sub = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);

    let newArr = epiList.map((obj) => {
      if (obj.name === objControl.name) {
        obj.quantidadeEpi = quantity - 1;
      }
      return obj;
    });
    setEpiList(newArr);

    }else{
      setEpiList((prevEpiList) => {
        return prevEpiList.filter((epi) => objControl.id !== epi.id);
      });
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
          <h5>{props.name}</h5>
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
