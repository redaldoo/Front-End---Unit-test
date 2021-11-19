/* eslint-disable react-hooks/rules-of-hooks */
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import CustomTable from "components/UI/custom-table/CustomTable";
import React, { useEffect, useState } from "react";
import CategoriesStyle from "./Categories.module.scss";
import AdminLayoutStyle from "./../../../components/layout/AdminLayout.module.scss";
import { useRouter } from "next/router";
import CategorieService from "services/categorie.service";
import { faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const index = () => {
  const router = useRouter();
  const gotoNew = () => {
    router.push(`/admin/categories/new`);
  };

  const breadcrumbs = [
    {
      icon: faTachometerAlt,
      anchor: "Tableau de bord",
      link: "/admin/dashboard",
    },
    { anchor: "Gestion des catégories", link: null },
  ];

  let columns = { name: "Catégorie" };
  let actionsTable = [
    {
      action: (id) => {
        router.push(`/admin/categories/${id}`);
      },
      icon: faEye,
    },
    {
      action: (id) => {
        console.log("trash" + id);
      },
      icon: faTrashAlt,
    },
  ];

  const categoriesService = new CategorieService();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoriesService.GetAllCategories().then((value) => {
      setCategories(value);
    });
  }, []);

  return (
    <div>
      <AdminSubHeader
        breadcrumbs={breadcrumbs}
        titleValue="Gestion des catégories"
        rightBtn="Nouveau"
        onClickRight={gotoNew}
      />

      <div className="content__container">
        <CustomTable
          columns={columns}
          actions={actionsTable}
          datas={categories}
        ></CustomTable>
      </div>
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
