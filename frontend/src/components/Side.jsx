import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import bgim from "../../public/assets/images/bg.jpg";

export default class Side extends Component {
  render() {
    return (
      <div
        id="soulaymane"
        className="fullscreen landing parallax banner"
        data-img-width="2000"
        data-img-height="1325"
        data-diff="100"
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="wow fadeInLeft">La solution de gestion des réclamations</h1>

                <div className="landing-text wow fadeInLeft">
                  <p>L'outil pour écrire et suivre l'état de vos réclamations en ligne.</p>
                </div>

                <div className="head-btn wow fadeInLeft">
                  <a href="/createClient" className="btn-primary ">
                    <i className="fa "></i> <span>Soummettre </span>
                  </a>

                  <a href="/status" className="btn-primary ">
                    <i className="fa "></i> <span>Suivre </span>
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <img
                  src="../assets/images/header-phone.png"
                  alt="phone"
                  className="header-phone img-responsive wow fadeInRight"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
