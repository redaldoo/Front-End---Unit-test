/* eslint-disable react-hooks/rules-of-hooks */
import WishlistStyle from "./Wishlist.module.scss";
import React, { useEffect, useState } from "react";
import CustomButton from "components/UI/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { getCart } from "utils/Cart";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Breadcrumbs from "components/UI/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setTotalAmount } from "store/cart/cartSlice";
import WishlistCard from "components/wishlist-card/WishlistCard";

const index = () => {
  const breadcrumbs = [
    { href: "/", title: "Accueil" },
    { title: "Mon wishlist" },
  ];

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.listProducts);

  useEffect(() => {
    dispatch(setProduct(getCart()));
  }, []);

  return (
    <>
      <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
      <div className={`row container ${WishlistStyle["cart"]}`}>
        {products.length == 0 ? (
          <>
            <div className={WishlistStyle["cart-empty"]}>
              <FontAwesomeIcon
                icon={faHeart}
                className={WishlistStyle["empty-bag"]}
              />
              <p className={WishlistStyle["empty-text"]}>
                Votre wishlist est vide.
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
        ) : (
          <>
            <div className={`col ${WishlistStyle["cart-list"]}`}>
              {products?.map((product) => (
                <WishlistCard product={product} key={product.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default index;
