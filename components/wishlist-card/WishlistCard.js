/* eslint-disable @next/next/no-img-element */
import CustomButton from "components/UI/CustomButton";
import React from "react";
import WishlistCardStyle from "./WishlistCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart } from "utils/Cart";
import { useDispatch } from "react-redux";
import { setWishlist } from "store/wishlist/wishlistSlice";
import { toggleWishlist } from "utils/Wishlist";

const WishlistCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={`container-bg ${WishlistCardStyle["cart-card"]}`}>
      <div className={`card ${WishlistCardStyle["card-image"]}`}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={`card ${WishlistCardStyle["card-details"]}`}>
        <div className={WishlistCardStyle["card-title"]}>
          <p>{product.name}</p>
          <CustomButton
            className="btn-min btn-transparent btn-no-padding"
            onClick={() => toggleWishlist(product, dispatch, setWishlist)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CustomButton>
        </div>
        <div className={WishlistCardStyle["card-content"]}>
          <div className={WishlistCardStyle["card-price"]}>
            {product.price}&nbsp;&euro;
          </div>
          <div className={WishlistCardStyle["card-later"]}>
            {/* <CustomButton className="btn-min btn-transparent btn-lowercase btn-no-spacing">
							Enregistrer pour plus tard
						</CustomButton> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
