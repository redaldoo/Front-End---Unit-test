/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { Component, useEffect } from "react";
import AuthService from "services/auth.service";
import ClientSercice from "services/client.service";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import Link from "next/link";
import CustomButton from "components/UI/CustomButton";
import AccountStyle from "./Account.module.scss";
import {
  faKey,
  faEdit,
  faEnvelopeOpen,
  faPhone,
  faAddressCard,
  faUser,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SellerSidebarStyle from "./Account.module.scss";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Profil",
      clientData: [],
      token: "",
    };
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
          clientData: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <div className={SellerSidebarStyle["account-sidebar"]}>
          <ul className={SellerSidebarStyle["menu-list"]}>
            <li>
              <Link href={"/ClientUpdate/" + this.state.clientData.id}>
                <a
                  className={`${SellerSidebarStyle["menu-item--active"]} ${SellerSidebarStyle["menu-item"]}`}
                >
                  <FontAwesomeIcon icon={faEdit} style={{ color: "green" }} />
                  <span>Modifier mes informations</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/ClientPasswordUpdate/" + this.state.clientData.id}>
                <a
                  className={`${SellerSidebarStyle["menu-item--active"]} ${SellerSidebarStyle["menu-item"]}`}
                >
                  <FontAwesomeIcon icon={faKey} style={{ color: "purple" }} />
                  <span>Modifier mon Mot de Passe</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Row className={`${AccountStyle["row"]}`}>
          <h1 className={`${AccountStyle["threeD"]}`}>
            Bienvenue sur votre compte : {this.state.clientData.lastname}
          </h1>
        </Row>
        <br />
        <br />
        <Row className={`${AccountStyle["row"]}`}>
          <Col md={6}>
            <Card
              style={{
                width: 30 + "em",
                margin: 5 + "px",
                float: "none",
                marginBottom: 4 + "em",
              }}
            >
              <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <hr />
                <Card.Text style={{ marginBlock: 10 + "px" }}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    style={{ color: "blue" }}
                  />{" "}
                  Adresse Email : {this.state.clientData.email}
                </Card.Text>
                <Card.Text style={{ marginBlock: 10 + "px" }}>
                  <FontAwesomeIcon icon={faUser} style={{ color: "red" }} /> Nom
                  : {this.state.clientData.lastname}
                </Card.Text>
                <Card.Text style={{ marginBlock: 10 + "px" }}>
                  <FontAwesomeIcon
                    icon={faSignature}
                    style={{ color: "gray" }}
                  />{" "}
                  Prénom : {this.state.clientData.name}
                </Card.Text>
                <Card.Text style={{ marginBlock: 10 + "px" }}>
                  <FontAwesomeIcon icon={faPhone} style={{ color: "green" }} />{" "}
                  Téléphone : {this.state.clientData.telephone}
                </Card.Text>
                <Card.Text style={{ marginBlock: 10 + "px" }}>
                  <FontAwesomeIcon icon={faAddressCard} /> Adresse :{" "}
                  {this.state.clientData.address}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* <Link href={"/seller/products"} style={{ paddingRight: 20 + "px" }}> */}
            <CustomButton
              typeButton="link"
              hrefButton={"/seller/products"}
              className={`${AccountStyle["button"]}`}
            >
              Mes produits à vendre
            </CustomButton>
            {/* </Link> */}
            <CustomButton
              typeButton="link"
              hrefButton={"/seller/products/new"}
              className={`${AccountStyle["button"]}`}
            >
              Vendre un produit
            </CustomButton>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Account;
