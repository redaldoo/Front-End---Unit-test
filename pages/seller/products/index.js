/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import {
  faEye,
  faTachometerAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import SellerLayout from "components/layout/SellerLayout";
import CustomTable from "components/UI/custom-table/CustomTable";
import CustomButton from "components/UI/CustomButton";
import Title from "components/UI/Title";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProductService from "services/products.service";
import ProductsStyle from "./Products.module.scss";

const index = () => {
  const router = useRouter();

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
  let actionsTable = [
    {
      action: (id) => {
        router.push(`/seller/products/${id}`);
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
    const user = JSON.parse(localStorage.getItem("user"));

    productService.GetAllProduct({ user: user.id }).then((value) => {
      console.log(value);
      setProducts(value);
    });
  }, []);

  return (
    <div>
      <div className="seller__header">
        <Title title="Mes produits" />
        <div>
          <CustomButton typeButton="link" hrefButton="/seller/products/new">
            Nouveau
          </CustomButton>
        </div>
      </div>

      <div className="seller__container">
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

index.Layout = SellerLayout;

export default index;
