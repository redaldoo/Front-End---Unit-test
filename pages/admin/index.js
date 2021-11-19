import {
  faBullhorn,
  faShoppingCart,
  faTachometerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import Widget from "components/widget/Widget";
import React from "react";
import AdminStyle from "./Admin.module.scss";

const index = () => {
  const breadcrumbs = [
    {
      icon: faTachometerAlt,
      anchor: "Tableau de bord",
      link: null,
    },
  ];

  return (
    <div>
      <AdminSubHeader breadcrumbs={breadcrumbs} titleValue="Bonjour John," />
      <div className="content__container">
        <div className={AdminStyle["widgets__container"]}>
          <Widget
            title="Utilisateurs"
            footerLeft="Inscriptions du mois"
            footerRight="30"
          >
            <div className={AdminStyle["widget__content"]}>
              <div className={AdminStyle["widget__content--icon"]}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <p className={AdminStyle["widget__content--big"]}>123</p>
            </div>
          </Widget>

          <Widget
            title="Produits"
            footerLeft="Produits du mois"
            footerRight="30"
          >
            <div className={AdminStyle["widget__content"]}>
              <div className={AdminStyle["widget__content--icon"]}>
                <FontAwesomeIcon icon={faBullhorn} />
              </div>
              <p className={AdminStyle["widget__content--big"]}>123</p>
            </div>
          </Widget>

          <Widget title="Ventes" footerLeft="Ventes du mois" footerRight="30">
            <div className={AdminStyle["widget__content"]}>
              <div className={AdminStyle["widget__content--icon"]}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <p className={AdminStyle["widget__content--big"]}>123</p>
            </div>
          </Widget>
        </div>
      </div>
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
