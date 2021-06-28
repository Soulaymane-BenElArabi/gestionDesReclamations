import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Form = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cin, setCin] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");

  const history = useHistory();
  const AjouterClient = async () => {
    let formField = new FormData();
    formField.append("nom", nom);
    formField.append("prenom", prenom);
    formField.append("cin", cin);
    formField.append("telephone", telephone);
    formField.append("email", email);
    formField.append("adresse", adresse);

    await axios({
      method: "post",
      url: "http://localhost:8000/clients/",
      data: formField,
    }).then(
      (res) => {
        console.log(res.data);
        history.push("/createReclamation");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div className="container register">
      <div className="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Enoyer Nous Vos Reclamation</h3>
        <p>Commencez par vos informations personlles !</p>

        <br />
      </div>
      <div className="col-md-9 register-right">
        <h3 className="register-heading">Rediger Votre Reclamaion</h3>
        <div className="register-form">
          <div className="form-group row">
            <label>Nom</label>
            <input
              type="text"
              className="form-control"
              value={nom}
              name="nom"
              required=""
              onChange={(e) => setNom(e.target.value)}
              placeholder="Nom"
            />
          </div>
          <div className="form-group">
            <label>Prenom</label>
            <input
              type="text"
              className="form-control"
              value={prenom}
              name="prenom"
              required=""
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Prenom"
            />
          </div>
          <div className="form-group">
            <label>Cin</label>
            <input
              type="text"
              className="form-control"
              value={cin}
              name="cin"
              required=""
              onChange={(e) => setCin(e.target.value)}
              placeholder="Votre Cin ici"
            />
          </div>
          <div className="form-group ">
            <label>Telephone</label>
            <input
              type="text"
              className="form-control"
              value={telephone}
              name="telephone"
              required=""
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Telephone"
            />
          </div>
          <div className="form-group ">
            <label>Email</label>

            <input
              type="text"
              className="form-control"
              value={email}
              name="email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
            ></input>
          </div>
          <div className="form-group ">
            <label>Adresse</label>

            <input
              type="text"
              className="form-control"
              value={adresse}
              name="adresse"
              required=""
              onChange={(e) => setAdresse(e.target.value)}
              placeholder="adresse"
            ></input>
          </div>
          <button
            type="submit"
            onClick={AjouterClient}
            className="btn btn-primary"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
