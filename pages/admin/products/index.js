/* eslint-disable react-hooks/rules-of-hooks */
import {
  faEye,
  faTachometerAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import CustomTable from "components/UI/custom-table/CustomTable";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProductService from "services/products.service";
import ProductsStyle from "./Products.module.scss";

const index = () => {
  const router = useRouter();
  const gotoNew = () => {
    router.push(`/admin/products/new`);
  };

  const breadcrumbs = [
    {
      icon: faTachometerAlt,
      anchor: "Tableau de bord",
      link: "/admin/dashboard",
    },
    { anchor: "Gestion des produits", link: null },
  ];
  // table
  let columns = {
    name: "Produit",
    price: "Prix",
    image: "Image",
    // category: "Catégories",
  };
  let dataTable = [];
  let actionsTable = [
    {
      action: (id) => {
        router.push(`/admin/products/${id}`);
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

  const productService = new ProductService();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService.GetAllProduct().then((value) => {
      setProducts(value);
    });
  }, []);

  return (
    <div>
      <AdminSubHeader
        breadcrumbs={breadcrumbs}
        titleValue="Gestion des produits"
        rightBtn="Nouveau"
        onClickRight={gotoNew}
      />

      <div className="content__container">
        <CustomTable
          columns={columns}
          actions={actionsTable}
          datas={products}
          image={(data) => <img src={data} alt="" />}
          category={(data) => (
            <span className={ProductsStyle["category"]}>{data}</span>
          )}
        ></CustomTable>
      </div>
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
