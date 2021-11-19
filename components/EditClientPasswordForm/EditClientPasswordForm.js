import React, { Component } from "react";
import AuthService from "services/auth.service";
import ClientSercice from "services/client.service";
import { Form, Row, Col, Container } from "react-bootstrap";
import CustomButton from "components/UI/CustomButton";
import {
  faEnvelopeOpen,
  faPhone,
  faAddressCard,
  faUser,
  faSignature,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SellerSidebarStyle from "./EditClientPasswordForm.module.scss";

export class EditPasswordClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      lastname: "",
      telephone: "",
      address: "",
      token: "",
      id: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handForm = this.handForm.bind(this);
    this.Auth = new AuthService();
    this.Client = new ClientSercice();
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);

    const profil = this.Auth.getUserProfil(token);
    console.log(profil);
    console.log(profil.id);

    const user = JSON.parse(localStorage.getItem("user"));

    this.Client.GetClientDetail(user.id)
      .then((data) => {
        console.log(data);
        this.setState({
          email: data.email,
          id: data.id,
          password: data.password,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handForm(event) {
    event.preventDefault();
    console.log(this.state.id);
    this.Client.UpdateClient(this.state.id, this.state)
      .then((data) => {
        // window.location = "../../pages/Account/Account"
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={SellerSidebarStyle["account-sidebar"]}>
        <h1 className={SellerSidebarStyle["threeD"]}>
          <FontAwesomeIcon icon={faEdit} style={{ color: "black" }} /> Modifier
          mon mot de passe :
        </h1>
        <Container>
          <br />
          <br />
          <Row>
            <Col md="4">
              <Form onSubmit={this.handForm}>
                <Form.Group as={Row} controlTd="formPlaintestEmail">
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      style={{ color: "blue" }}
                    />{" "}
                    Adresse Email :
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      className={SellerSidebarStyle["input"]}
                      plaintext
                      readOnly
                      defaultValue={this.state.email}
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row} controlTd="formGroupPassword">
                  <Form.Label>
                    <FontAwesomeIcon icon={faUser} style={{ color: "red" }} />{" "}
                    Mot de passe :
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      className={SellerSidebarStyle["input"]}
                      plaintext
                      type="password"
                      placeholder="Mon nouveau mot de passe ......"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Form.Group>
                <br />
                <CustomButton variant="info" tupe="submit">
                  Enregistrer mon nouveau mot de passe
                </CustomButton>
                <br />
                <br />
                <br />
                <br />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default EditPasswordClientForm;
