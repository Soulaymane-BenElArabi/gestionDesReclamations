import Nav from "./Nav";
import Footer from "./Footer";
import Form from "../pages/Form";
import { Component } from "react";

class FormPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Form />
        <Footer />
      </div>
    );
  }
}
export default FormPage;
