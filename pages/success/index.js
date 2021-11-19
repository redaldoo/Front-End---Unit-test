/* eslint-disable react-hooks/rules-of-hooks */
import CartCard from "components/cart-card/CartCard";
import CartStyle from "./Success.module.scss";
import React, { useEffect, useState } from "react";
import CustomButton from "components/UI/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { getCart } from "utils/Cart";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Breadcrumbs from "components/UI/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setTotalAmount } from "store/cart/cartSlice";

const index = () => {
  const breadcrumbs = [
    { href: "/", title: "Accueil" },
    { title: "Paiement accepté" },
  ];

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.listProducts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    // dispatch(setProduct(getCart()));
    localStorage.removeItem("cart");
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
      <div className={`row container ${CartStyle["cart"]}`}>
        <>
          <div className={CartStyle["cart-empty"]}>
            <FontAwesomeIcon
              icon={faShoppingBag}
              className={CartStyle["empty-bag"]}
            />
            <p className={CartStyle["empty-text"]}>
              Votre commande a été payé avec succès.
            </p>
            <CustomButton
              typeButton="link"
              hrefButton="/products"
              className="btn-blue btn-h-large"
            >
              Continuer mes achats
            </CustomButton>
          </div>
        </>
      </div>
    </>
  );
};

export default index;
