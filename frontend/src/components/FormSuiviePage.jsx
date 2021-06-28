import Nav from "./Nav";
import Footer from "./Footer";
import FormSuivie from "../pages/FormSuivie";
import { Component } from "react";

class FormSuiviePage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormSuivie />
        <Footer />
      </div>
    );
  }
}
export default FormSuiviePage;
