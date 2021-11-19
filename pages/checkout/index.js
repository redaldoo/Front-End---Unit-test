import CartCard from "components/cart-card/CartCard";
import CheckoutStyle from "./Checkout.module.scss";
import CartStyle from "./../cart/Cart.module.scss";
import React from "react";
import CustomButton from "components/UI/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import TitleH2 from "components/UI/TitleH2";

const index = () => {
  let temp = false;
  return (
    <>
      <div className={`row container ${CheckoutStyle["checkout"]}`}>
        <div
          className={`col container-bg ${CheckoutStyle["checkout-container"]}`}
        >
          <div>
            <TitleH2 title="Vos informations de facturation" />
            <p>
              Eu cupidatat cillum consectetur ad laborum ad magna minim
              consectetur tempor aliqua ad duis qui.
            </p>

            <form className={`row ${CheckoutStyle["checkout-form"]}`}>
              <div className={`${CheckoutStyle["input-group"]}`}>
                <label htmlFor="firstName">
                  Prénom <span>*</span>
                </label>
                <input type="text" id="firstName" />
              </div>
              <div className={`${CheckoutStyle["input-group"]}`}>
                <label htmlFor="lastName">
                  Nom <span>*</span>
                </label>
                <input type="text" id="lastName" />
              </div>
            </form>
          </div>
        </div>

        <div className={`col ${CartStyle["cart-recap"]}`}>
          <div className={`container-bg ${CartStyle["cart-total"]}`}>
            <ul>
              <li>
                Sous-total<span>250.00&nbsp;&euro;</span>
              </li>
              <li>
                Livraison<span>Gratuit</span>
              </li>
              <li>
                Remise<span>0.00&nbsp;&euro;</span>
              </li>
              <li className="last">
                Montant Total<span>250.00&nbsp;&euro;</span>
              </li>
            </ul>
            <div className={CartStyle["checkout-section"]}>
              <CustomButton className="btn-blue btn-full btn-h-large">
                Proceed to Checkout
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
