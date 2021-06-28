import Nav from "./Nav";
import Footer from "./Footer";
import FormReclamation from "../pages/FormReclamation";
import { Component } from "react";

class FormRecPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormReclamation />
        <Footer />
      </div>
    );
  }
}
export default FormRecPage;
