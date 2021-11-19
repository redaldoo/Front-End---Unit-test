/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import CardStyle from "./ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Reviews from "../UI/Reviews";
import CustomButton from "components/UI/CustomButton";
import { useDispatch } from "react-redux";
import { setWishlist } from "store/wishlist/wishlistSlice";
import { toggleWishlist } from "utils/Wishlist";
import router from "next/router";
// import addToCard from "./../../utils/addToCard.js";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  let product = {
    id: "productID",
    image:
      "https://www.breitling.com/media/image/1/gallery_square_700/asset-version-2701e2df44/x82310d51b1s1-endurance-pro-on-wrist.jpg",
    name: "Fashion Tops Juniors",
    price: "$58.00",
  };
  if (props.product) {
    product = props.product;
  }
  return (
    <div
      className={`${CardStyle["product-card"]} ${
        CardStyle[props.mini ? "product-mini" : ""]
      }`}
    >
      <div className={CardStyle["product-card-thumb"]}>
        <Link href={`/products/${product.id}`}>
          <a>
            <img src={product.image} alt="" />
          </a>
        </Link>
        {props.mini ? (
          <></>
        ) : (
          <ul className={CardStyle["action-buttons"]}>
            <li>
              <CustomButton
                className="btn-min btn-blue"
                onClick={() => toggleWishlist(product, dispatch, setWishlist)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </CustomButton>
            </li>
            <li>
              <CustomButton
                className="btn-min btn-blue"
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <FontAwesomeIcon icon={faEye} />
              </CustomButton>
            </li>
          </ul>
        )}
      </div>
      {props.mini ? (
        <></>
      ) : (
        <div className={CardStyle["product-card-content"]}>
          <p className={CardStyle["product-title"]}>
            <a href="shop-details.html">{product.name}</a>
          </p>
          <div className={CardStyle["product-prices"]}>
            {/* <del className={CardStyle["old-price"]}>$69.00</del> */}
            <span className={CardStyle["new-price"]}>
              {product.price}&euro;
            </span>
          </div>
          <div className="rating">
            <Reviews stars={4} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
