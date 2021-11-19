import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import CustomTable from "components/UI/custom-table/CustomTable";
import React from "react";
import UsersStyle from "./Users.module.scss";

const index = () => {
  const breadcrumbs = [
    {
      icon: faTachometerAlt,
      anchor: "Tableau de bord",
      link: "/admin/dashboard",
    },
    { anchor: "Gestion des utilisateurs", link: "#" },
  ];
  // table
  let columns = {
    firstName: "Prénom",
    lastName: "Nom",
    phone: "Téléphone",
    createdAt: "Date d'inscription",
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
      <AdminSubHeader
        breadcrumbs={breadcrumbs}
        titleValue="Gestion des utilisateurs"
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
