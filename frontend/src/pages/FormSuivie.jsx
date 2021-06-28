import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const FormSuivie = () => {
  const [code, setCode] = useState("");

  const [tous, setTous] = useState("");
  const getTous = async () => {
    const res = await axios.get("http://localhost:8000/getStatus/");
    setTous(res.data);
  };
  useEffect(() => {
    getTous();
  }, []);

  const history = useHistory();
  const SuivreReclamation = () => {
    console.log(tous);
    console.log(tous[0].code);
    tous.forEach(element => {
      if(element.code === code){
        console.log("Yeeeey");
        
        history.push('/StatusTimeLine',
        {data:element}
        );
      }
    });
  };

  return (
    <div className="container register">
      <div className="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Suivre votre réclamation à tout moment</h3>
          <p>Saisir le code reçu  lors de la création de votre réclamation</p>

        <br />
      </div>
      <div className="col-md-9 register-right">
        <h3 className="register-heading">Suivre Votre Reclamaion</h3>
        <div className="register-form">
          <div className="form-group">
            <label>Le code de suivi de votre reclamation</label>
            <input
              type="text"
              className="form-control"
              value={code}
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Le code de suivie"
            />
          </div>

          <button
            type="submit"
            onClick={SuivreReclamation}
            className="btn btn-primary"
          >
            Chercher
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormSuivie;
