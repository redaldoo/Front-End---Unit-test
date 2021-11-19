import React, { Component } from "react";
import AuthService from "services/auth.service";
import ClientSercice from "services/client.service";
import { Form, Row, Col, Container } from "react-bootstrap";
import SellerSidebarStyle from "./EditClientForm.module.scss";
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

export class EditClientForm extends Component {
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
          name: data.name,
          lastname: data.lastname,
          telephone: data.telephone,
          address: data.address,
          id: data.id,
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
        // window.location = "../../pages/Account/Account";
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
          mes informations :
        </h1>
        <Container>
          <br />
          <br />
          <Row className={SellerSidebarStyle["row"]}>
            <Col md="4">
              <Form onSubmit={this.handForm}>
                <Form.Group controlTd="formGroupEmail">
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      style={{ color: "blue" }}
                    />{" "}
                    Adresse Email :
                  </Form.Label>
                  <Form.Control
                    className={SellerSidebarStyle["input"]}
                    type="email"
                    placeholder="Adresse Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlTd="formGroupLastName">
                  <Form.Label>
                    <FontAwesomeIcon icon={faUser} style={{ color: "red" }} />{" "}
                    Nom :
                  </Form.Label>
                  <Form.Control
                    className={SellerSidebarStyle["input"]}
                    placeholder="Adresse Email"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlTd="formGroupName" style={{ color: " red" }}>
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faSignature}
                      style={{ color: "gray" }}
                    />{" "}
                    Prénom :
                  </Form.Label>
                  <Form.Control
                    className={SellerSidebarStyle["input"]}
                    placeholder="Prénom"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlTd="formGroupPhone">
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "green" }}
                    />{" "}
                    Numéro de téléphone :
                  </Form.Label>
                  <Form.Control
                    className={SellerSidebarStyle["input"]}
                    placeholder="Numéro de téléphone"
                    name="telephone"
                    value={this.state.telephone}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlTd="formGroupAdresse">
                  <Form.Label>
                    <FontAwesomeIcon icon={faAddressCard} /> Adresse :
                  </Form.Label>
                  <Form.Control
                    className={SellerSidebarStyle["input"]}
                    placeholder="Adresse"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <br />
                <CustomButton variant="info" tupe="submit">
                  Enregistrer mes modifications
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
export default EditClientForm;
