import React, { useState, useContext, useEffect } from "react";
import { NomeContext } from "../../context/NomeContext.js";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = () => {
  const navigate = useNavigate();
  const { setColaborador } = useContext(NomeContext);
  const [matricula, setMatricula] = useState("");
  const [user, setUser] = useState([])
  
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/ericssendelima/epi-lista/main/src/data/jatistasList.json"
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

  const doIt = async (e) => {
    e.preventDefault()

    if (user.map((user) => Object.values(user).shift()).includes(matricula)) {
      const result =  user.filter((user) => user.mat === matricula)[0];
     await setColaborador(result);
      navigate("/Materials")    
    }
  };

  return (
    <form className="form-login" onSubmit={doIt}>
      <label className="label" htmlFor="typeNumber">
        Matrícula
      </label>
      <input
        type="number"
        id="typeNumber"
        className="form-control"
        value={matricula}
        onChange={(e) => setMatricula(parseInt(e.target.value))}
      />
      <input
        type="submit"
        className="button"
        value= "Entrar"
      />
    </form>
  );
};
