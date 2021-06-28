import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="col-sm-4 col-sm-offset-4">
            <div className="social text-center">
              <ul>
                <li>
                  <a className="wow fadeInUp" href="https://twitter.com/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInUp"
                    href="https://www.facebook.com/"
                    data-wow-delay="0.2s"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInUp"
                    href="https://plus.google.com/"
                    data-wow-delay="0.4s"
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInUp"
                    href="https://instagram.com/"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center wow fadeInUp" id="soulayamne2">
              &copy; Gestion des reclamation par Yasmine & Soulaymane
            </div>
            <a href="https://instagram.com/" className="scrollToTop">
              <i className="fa fa-arrow-circle-o-up"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
