/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useEffect, useState } from "react";
import ProductList from "../../components/product-list/ProductList";
import ProductsStyle from "./Products.module.scss";
import ProductsSidebar from "components/products-sidebar/ProductsSidebar";
import Breadcrumbs from "components/UI/Breadcrumbs";
import TogglerV2 from "components/UI/toggler/TogglerV2";
import Map from "components/map/Map";
import { useLoadScript } from "@react-google-maps/api";
import withAuth from "utils/withAuth";
import ProductService from "services/products.service";
import Head from "next/head";
import { useSelector } from "react-redux";

// export default function Products() {
const Products = () => {
  const breadcrumbs = [{ href: "/", title: "Accueil" }, { title: "Catalogue" }];

  const [checked, setChecked] = useState(-1);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC5jRVUL9RanfNv1z2Xv4iUqqyGz1vFuwU", // Add your API key
  });

  // const productService = new ProductService();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   productService.GetAllProduct().then((value) => {
  //     setProducts(value);
  //   });
  // }, []);
  const products = useSelector((state) => state.search.listProducts);

  return (
    <>
      <Head>
        <title>Catalogue</title>
      </Head>
      <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
      <div className={`container row ${ProductsStyle["products-container"]}`}>
        <div className={`${ProductsStyle["products-sidebar"]} col`}>
          <ProductsSidebar />
        </div>

        <div className={`col ${ProductsStyle["products-main"]}`}>
          <div className={ProductsStyle["products-list-top"]}>
            <div className={ProductsStyle["products-list-tri"]}>
              <TogglerV2
                checkName="show-map"
                checkLeft="Liste"
                checkRight="Carte"
                setChecked={setChecked}
              />
            </div>
          </div>
          {checked == 1 ? (
            <Map />
          ) : (
            <div className={ProductsStyle["products-list-content"]}>
              <ProductList products={products}></ProductList>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// export default withAuth(Products);
export default Products;
