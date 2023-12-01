import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";

import { useState, useContext, useEffect } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import axios from "axios";

import "./fardamentos.css";

const Fardamentos = () => {
  const { epiList, setEpiList } = useContext(EpiListContext);
  const [fardamentos, setFardamentos] = useState([]);

  const [camisa, setCamisa] = useState(0);
  const [calca, setCalca] = useState(0);
  const [bota, setBota] = useState(0);
  const [macacao, setMacacao] = useState(0);
  const [onDisableCamisa, setOnDisableCamisa] = useState(false);
  const [onDisableCalca, setOnDisableCalca] = useState(false);
  const [onDisableBota, setOnDisableBota] = useState(false);
  const [onDisableMacacao, setOnDisableMacacao] = useState(false);

  const getDataFardamentos = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ericssendelima/epi-lista/main/src/data/fardamentos.json"
      );
      const data = await res.data;
      setFardamentos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFardamentos();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCamisa = () => {
    if (camisa > 0 && !epiList.filter((epi) => epi.id === camisa).length > 0) {
      setEpiList([
        ...epiList,
        ...fardamentos.camisas.filter((camisaItem) => camisaItem.id === camisa),
      ]);
      setOnDisableCamisa(true);
    }
  };
  const addCalca = () => {
    if (calca > 0 && !epiList.filter((epi) => epi.id === calca).length > 0) {
      setEpiList([
        ...epiList,
        ...fardamentos.calcas.filter((calcaItem) => calcaItem.id === calca),
      ]);
      setOnDisableCalca(true);
    }
  };
  const addBota = () => {
    if (bota > 0 && !epiList.filter((epi) => epi.id === bota).length > 0) {
      setEpiList([
        ...epiList,
        ...fardamentos.botas.filter((botaItem) => botaItem.id === bota),
      ]);
      setOnDisableBota(true);
    }
  };
  const addMacacao = () => {
    if (
      macacao > 0 &&
      !epiList.filter((epi) => epi.id === macacao).length > 0
    ) {
      setEpiList([
        ...epiList,
        ...fardamentos.macacao.filter(
          (macacaoItem) => macacaoItem.id === macacao
        ),
      ]);
      setOnDisableMacacao(true);
    }
  };

  return (
    <div className="offCanvas">
      <Button id="buttonFardamentos" onClick={handleShow}>
        Clique aqui para fardamentos
      </Button>

      <Offcanvas
        id="offBody"
        style={{ height: "340px" }}
        show={show}
        onHide={handleClose}
        placement={"top"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1 id="fardamento">Fardamentos :</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="formEpiHeader">
            <form>
              <div className="selectFardamento" id="selectCamiseta">
                <label>
                  <span id="labelFardamentos">Camisetas</span>
                  <select
                    id="camisas"
                    onChange={(e) => {
                      setCamisa(parseInt(e.target.value));
                    }}
                  >
                    <option value={0}>Escolha a camisa</option>
                    <option value={38864}>Camisa malha LONGA TAM: P</option>
                    <option value={38865}>Camisa malha LONGA TAM: M</option>
                    <option value={38866}>Camisa malha LONGA TAM: G</option>
                    <option value={38867}>Camisa malha LONGA TAM: GG</option>
                    <option value={38868}>Camisa malha CURTA TAM: P</option>
                    <option value={38869}>Camisa malha CURTA TAM: M</option>
                    <option value={38870}>Camisa malha CURTA TAM: G</option>
                    <option value={38871}>Camisa malha CURTA TAM: GG</option>
                  </select>
                </label>
                <Button
                  id="addFardamento"
                  onClick={addCamisa}
                  disabled={onDisableCamisa}
                >
                  {onDisableCamisa ? "Ok" : "Adicionar"}
                </Button>
              </div>
              <div className="selectFardamento" id="selectCalca">
                <label>
                  <span id="labelFardamentos">Calças</span>
                  <select
                    id="calcas"
                    onChange={(e) => setCalca(parseInt(e.target.value))}
                  >
                    <option value={0}>Escolha a calça</option>
                    <option value={18109}>calça TAM: P</option>
                    <option value={18108}>calça TAM: M</option>
                    <option value={18106}>calça TAM: G</option>
                    <option value={18107}>calça TAM: GG</option>
                    <option value={18110}>calça TAM: XG</option>
                  </select>
                </label>
                <Button
                  id="addFardamento"
                  onClick={addCalca}
                  disabled={onDisableCalca}
                >
                  {onDisableCalca ? "Ok" : "Adicionar"}
                </Button>
              </div>

              <div className="selectFardamento" id="selectBota">
                <label>
                  <span id="labelFardamentos">Botas</span>
                  <select
                    id="botas"
                    onChange={(e) => setBota(parseInt(e.target.value))}
                  >
                    <option value={0}>Escolha a bota</option>
                    <option value={26621}>Bota N°: 35</option>
                    <option value={26623}>Bota N°: 36</option>
                    <option value={26624}>Bota N°: 37</option>
                    <option value={26625}>Bota N°: 38</option>
                    <option value={26626}>Bota N°: 39</option>
                    <option value={26627}>Bota N°: 40</option>
                    <option value={26628}>Bota N°: 41</option>
                    <option value={26629}>Bota N°: 42</option>
                    <option value={26630}>Bota N°: 43</option>
                    <option value={26631}>Bota N°: 44</option>
                    <option value={26632}>Bota N°: 45</option>
                  </select>
                </label>
                <Button
                  id="addFardamento"
                  onClick={addBota}
                  disabled={onDisableBota}
                >
                  {onDisableBota ? "Ok" : "Adicionar"}
                </Button>
              </div>

              <div className="selectFardamento" id="selectMacacao">
                <label>
                  <span id="labelFardamentos">Macacão</span>
                  <select
                    id="macacao"
                    onChange={(e) => setMacacao(parseInt(e.target.value))}
                  >
                    <option value={0}>Escolha o macacão</option>
                    <option value={18809}>Macacão TAM: P</option>
                    <option value={18808}>Macacão TAM: M</option>
                    <option value={18806}>Macacão TAM: G</option>
                    <option value={18807}>Macacão TAM: GG</option>
                  </select>
                </label>
                <Button
                  id="addFardamento"
                  onClick={addMacacao}
                  disabled={onDisableMacacao}
                >
                  {onDisableMacacao ? "Ok" : "Adicionar"}
                </Button>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Fardamentos;
