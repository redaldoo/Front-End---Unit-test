/* eslint-disable @next/next/no-img-element */
import CustomButton from "components/UI/CustomButton";
import React from "react";
import CartCardStyle from "./CartCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart } from "utils/Cart";
import { useDispatch } from "react-redux";
import { setProduct } from "store/cart/cartSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={`container-bg ${CartCardStyle["cart-card"]}`}>
      <div className={`card ${CartCardStyle["card-image"]}`}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={`card ${CartCardStyle["card-details"]}`}>
        <div className={CartCardStyle["card-title"]}>
          <p>{product.name}</p>
          <CustomButton
            className="btn-min btn-transparent btn-no-padding"
            onClick={() => removeFromCart(product, dispatch, setProduct)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CustomButton>
        </div>
        <div className={CartCardStyle["card-content"]}>
          <div className={CartCardStyle["card-price"]}>
            {product.price}&nbsp;&euro;
          </div>
          <div className={CartCardStyle["card-later"]}>
            {/* <CustomButton className="btn-min btn-transparent btn-lowercase btn-no-spacing">
							Enregistrer pour plus tard
						</CustomButton> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
