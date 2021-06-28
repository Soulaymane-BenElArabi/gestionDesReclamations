import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const FormReclamation = () => {
  //Posting the form data
  const [departement, setDepartement] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [image, setImage] = useState(null);
  const [fichier, setFichier] = useState(null);

  const history = useHistory();

  const AjouterReclamation = async () => {
    let formField = new FormData();
    formField.append("departement", departement);
    formField.append("commentaire", commentaire);
    if (image !== null) {
      formField.append("image", image);
    }
    if (fichier !== null) {
      formField.append("fichier", fichier);
    }

    formField.append("client", clients[0].cin); //je pense que le probleme est ici
    console.log(clients[0].cin); // elle affiche la donne que je souhaite recuperer

    await axios({
      method: "post",
      url: "http://localhost:8000/createReclamations/",
      data: formField,
    })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //La recuperation des departements de la BD vous les ajouter dans le formulaire
  const [departements, setDepartements] = useState([]);
  const getDepartements = async () => {
    const res = await axios.get("http://localhost:8000/getDepartements/");
    setDepartements(res.data);
  };
  useEffect(() => {
    getDepartements();
  }, []);
  //ici je recupere le cin de client de la base de donnes avat de l'envoyer apres avec le formulaire

  const [clients, setClients] = useState("");
  const getClients = async () => {
    const res = await axios.get("http://localhost:8000/getClients/");
    setClients(res.data);
    //console.log(res.data[0].cin);
  };
  useEffect(() => {
    getClients();
  }, []);
  // le formulaire
  return (
    <div className="container register">
      <div className="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Enoyer Nous Vos Reclamation</h3>
        <p>Les informations de votre réclamation</p>

        <br />
      </div>
      <div className="col-md-9 register-right">
        <h3 className="register-heading">Rediger Votre Reclamaion</h3>
        <div className="register-form">
          <div className="form-group row">
            <label>Departement</label>
            <select
              type="text"
              className="form-control"
              name="departement"
              onChange={(e) => setDepartement(e.target.value)}
              placeholder="Departement concerne"
            >
              {departements.map((dep, index) => (
                <option key={dep.id} value={dep.id}>
                  {dep.nomDep}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Commentaire</label>
            <textarea
              type="text"
              className="form-control"
              value={commentaire}
              name="commentaire"
              onChange={(e) => setCommentaire(e.target.value)}
              placeholder="Vos Commentaires ici ..."
            />
          </div>
          <div className="form-group">
            <label>Vos fichiers</label>
            <input
              type="file"
              className="form-control"
              name="fichier"
              onChange={(e) => setFichier(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <label>Images Supplementaires</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            onClick={AjouterReclamation}
            className="btn btn-primary"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormReclamation;
