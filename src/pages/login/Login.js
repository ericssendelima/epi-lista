import React, { useState, useContext } from "react";
import { NomeContext } from "../../context/NomeContext.js";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { setColaborador } = useContext(NomeContext);
  const [matricula, setMatricula] = useState("");
  
  const user = [
    { mat: 2176, nome: "Dênis"},
    { mat: 2073, nome: "Yalê" },
    { mat: 2072, nome: "Joel" },
    { mat: 2218, nome: "Tiago"}
  ];

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
