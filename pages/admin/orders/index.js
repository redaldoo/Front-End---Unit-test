import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import CustomTable from "components/UI/custom-table/CustomTable";
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
    user: "Client",
    createdAt: "Date de la commande",
    updatedAt: "Dernière modification",
    total: "Montant",
    status: "Statut",
  };
  let dataTable = [];
  let actionsTable = [
    {
      action: "edit",
      icon: "edit",
    },
  ];

  return (
    <div>
      <AdminSubHeader
        breadcrumbs={breadcrumbs}
        titleValue="Gestion des commandes"
        rightBtn="Nouveau"
      />

      <div className="content__container">
        <CustomTable
          columns={columns}
          actions={actionsTable}
          datas={dataTable}
        ></CustomTable>
      </div>
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
