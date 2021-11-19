import {
  faBullhorn,
  faHourglass,
  faShoppingCart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoadScript } from "@react-google-maps/api";
import SellerLayout from "components/layout/SellerLayout";
import Breadcrumbs from "components/UI/Breadcrumbs";
import Title from "components/UI/Title";
import Widget from "components/widget/Widget";
import React from "react";
import SellerStyle from "./Seller.module.scss";

const index = () => {
  const breadcrumbs = [{ href: "/", title: "Accueil" }, { title: "Catalogue" }];
  return (
    <>
      <div>
        <Title title="Tableau de bord" />

        <div className="seller__container">
          <div className={SellerStyle["widgets__container"]}>
            <Widget footerLeft="Inscriptions du mois" footerRight="30">
              <div className={SellerStyle["widget__content"]}>
                <div className={SellerStyle["widget__content--icon"]}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <p className={SellerStyle["widget__content--big"]}>123</p>
              </div>
            </Widget>

            <Widget>
              <div className={SellerStyle["widget__content"]}>
                <div className={SellerStyle["widget__content--icon"]}>
                  <FontAwesomeIcon icon={faBullhorn} />
                </div>
                <div>
                  <p className={SellerStyle["widget__content--big"]}>123</p>
                  <p>Produits</p>
                </div>
              </div>
            </Widget>

            <Widget footerCenter="Commandes en attente">
              <div className={SellerStyle["widget__content"]}>
                <div className={SellerStyle["widget__content--icon"]}>
                  <FontAwesomeIcon icon={faHourglass} />
                </div>
                <p className={SellerStyle["widget__content--big"]}>123</p>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </>
  );
};

index.Layout = SellerLayout;

export default index;
