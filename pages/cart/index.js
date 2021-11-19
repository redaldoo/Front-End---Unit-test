/* eslint-disable react-hooks/rules-of-hooks */
import CartCard from "components/cart-card/CartCard";
import CartStyle from "./Cart.module.scss";
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
    { title: "Mon panier" },
  ];

  // const [products, setProducts] = useState([]);
  // const [totalAmount, setTotalAmount] = useState(0);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.listProducts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    dispatch(setProduct(getCart()));
  }, []);

  useEffect(() => {
    let temptotalAmount = 0;
    products?.map((element) => {
      dispatch(setTotalAmount(temptotalAmount + element.price));
      // setTotalAmount(totalAmount + element.price);
    });
    console.log(
      "%cindex.js line:39 totalAmount",
      "color: #007acc;",
      totalAmount
    );
  }, [products]);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  // console.log(
  //   // "%cindex.js line:31 publishableKey",
  //   "color: #007acc;",
  //   publishableKey
  // // );
  const createCheckOutSession = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      items: products,
      userEmail: user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    console.log(result);
    // const checkout_session = await stripe.checkout.sessions.retrieve(
    //   result,
    //   { expand: ['payment_intent'] }
    // );

    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
      <div className={`row container ${CartStyle["cart"]}`}>
        {products.length == 0 ? (
          <>
            <div className={CartStyle["cart-empty"]}>
              <FontAwesomeIcon
                icon={faShoppingBag}
                className={CartStyle["empty-bag"]}
              />
              <p className={CartStyle["empty-text"]}>Votre panier est vide.</p>
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
            <div className={`col ${CartStyle["cart-list"]}`}>
              {products?.map((product) => (
                <CartCard product={product} key={product.id} />
              ))}
            </div>

            <div className={`col ${CartStyle["cart-recap"]}`}>
              <div className={`container-bg ${CartStyle["cart-total"]}`}>
                <ul>
                  <li>
                    Sous-total<span>{totalAmount}&nbsp;&euro;</span>
                  </li>
                  <li>
                    Livraison<span>Gratuit</span>
                  </li>
                  <li>
                    Remise<span>0.00&nbsp;&euro;</span>
                  </li>
                  <li className="last">
                    Montant Total<span>{totalAmount}&nbsp;&euro;</span>
                  </li>
                </ul>
                <div className={CartStyle["checkout-section"]}>
                  <CustomButton
                    className="btn-blue btn-full btn-h-large"
                    onClick={createCheckOutSession}
                  >
                    {/* Checkout */}
                    {loading ? "Processing..." : "Buy"}
                  </CustomButton>
                  <CustomButton
                    typeButton="link"
                    hrefButton="/products"
                    className="btn-black btn-full btn-h-large"
                  >
                    Continue shopping
                  </CustomButton>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default index;
