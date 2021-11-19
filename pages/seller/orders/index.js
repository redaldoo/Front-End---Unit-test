import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import SellerLayout from "components/layout/SellerLayout";
import CustomTable from "components/UI/custom-table/CustomTable";
import Title from "components/UI/Title";
import React from "react";
import OrdersStyle from "./Orders.module.scss";

const index = () => {
  const breadcrumbs = [
    {
      icon: faTachometerAlt,
      anchor: "Tableau de bord",
      link: "/admin/dashboard",
    },
    { anchor: "Gestion des commandes", link: null },
  ];
  // table
  let columns = {
    title: "Produit",
    price: "Prix",
    imgUrl: "Image",
    categories: "Catégories",
  };
  let dataTable = [];
  let actionsTable = [
    {
      action: "edit",
      icon: "edit",
    },
    {
      action: "delete",
      icon: "trash-alt",
    },
  ];

  return (
    <div>
      <Title title="Mes commandes" />

      <div className="seller__container">
        <CustomTable
          columns={columns}
          actions={actionsTable}
          datas={dataTable}
        ></CustomTable>
      </div>
    </div>
  );
};

index.Layout = SellerLayout;

export default index;
