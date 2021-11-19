/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import ProductStyle from "./Product.module.scss";
import Title from "./../../../components/UI/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reviews from "./../../../components/UI/Reviews";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "components/UI/CustomButton";
import Tabs from "./../../../components/UI/Tabs";
import TitleH2 from "./../../../components/UI/TitleH2";
import ProductList from "./../../../components/product-list/ProductList";
import Slider from "react-slick";
import { useEffect, useState, useRef } from "react";
import { addToCart, isInCart } from "utils/Cart";
import ProductService from "services/products.service";
import Breadcrumbs from "components/UI/Breadcrumbs";
import Head from "next/head";
import { toggleWishlist } from "utils/Wishlist";
import { setWishlist } from "store/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const breadcrumbs = [
    { href: "/", title: "Accueil" },
    { href: "/products", title: "Catalogue" },
    { title: "Fiche produit" },
  ];
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  let productObject = {
    id: 123,
    name: "Chargement...",
    price: 12,
    image:
      "https://themebeyond.com/html/emarket/img/product/shop_details_img01.jpg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    richDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  };

  const sliderRef = useRef(null);
  const [imageSlider, setImageSlider] = useState(null);

  useEffect(() => {
    if (sliderRef.current) {
      setImageSlider(sliderRef.current.props.children);
    }
  }, [sliderRef]);

  const settings = {
    customPaging: function (i) {
      if (imageSlider) {
        return <img src={imageSlider[i].props.children.props.src} alt="#" />;
      } else {
        return <p>.</p>;
      }
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const productService = new ProductService();
  const [product, setProduct] = useState(productObject);
  const [products, setProducts] = useState([]);
  const [buttonCart, setButtonCart] = useState("Ajouter au panier");
  useEffect(() => {
    productService.GetProductDetail(id).then((value) => {
      setProduct(value);
    });
    productService.GetAllProduct().then((value) => {
      setProducts(value);
    });
    setButtonCart(isInCart(product));
    breadcrumbs[2].title = product.title;
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
      <div className={`container ${ProductStyle["product-container"]}`}>
        <div className={`${ProductStyle["col"]} ${ProductStyle["col-image"]}`}>
          <Slider {...settings} ref={sliderRef} className="image-slider">
            <div className={ProductStyle["image-product"]}>
              <img src={product.image} alt="#" />
            </div>
            {/* <div className={ProductStyle["image-product"]}>
              <img
                src="https://themebeyond.com/html/emarket/img/blog/sidebar_about.jpg"
                alt="#"
              />
            </div>
            <div className={ProductStyle["image-product"]}>
              <img
                src="https://themes.themewild.com/smartshop/assets/img/products/p2.png"
                alt="#"
              />
            </div>
            <div className={ProductStyle["image-product"]}>
              <img
                src="https://themes.themewild.com/smartshop/assets/img/products/p1.png"
                alt="#"
              />
            </div> */}
          </Slider>
        </div>
        <div
          className={`${ProductStyle["col"]} ${ProductStyle["col-details"]}`}
        >
          <Title title={product.name} />
          <div className={ProductStyle["product-short"]}>
            <div className={ProductStyle["product-rating"]}>
              <Reviews stars={4} />
              <a href="#" className={ProductStyle["product-rates"]}>
                (80) Reviews
              </a>
            </div>
            <p className={ProductStyle["product-price"]}>
              <span className={ProductStyle["discount"]}>
                {product.price}&euro;
              </span>
            </p>
            <p className={ProductStyle["description"]}>{product.description}</p>
          </div>

          <div className={ProductStyle["product-buy"]}>
            <div className={ProductStyle["product-buttons"]}>
              <CustomButton className="btn-blue" onClick={handleAddToCart}>
                {buttonCart}
                {/* Ajouter au panier */}
              </CustomButton>
              <CustomButton
                className="btn-min btn-blue"
                onClick={() => toggleWishlist(product, dispatch, setWishlist)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </CustomButton>
            </div>
            {/* <div className={ProductStyle["product-info"]}>
              <p>
                Category :<a href="#">Clothing</a>
              </p>
              <p>
                Brand :<a href="#">Leotiba</a>
              </p>
              <p>
                Availability : <span>500 Products In Stock</span>{" "}
              </p>
              <p>
                Sold By :<a href="#">Abe Store</a>
              </p>
            </div> */}
          </div>
        </div>
        <div
          className={`${ProductStyle["col"]} ${ProductStyle["col-description"]}`}
        >
          <Tabs>
            <div label="Description">
              <div className={ProductStyle["desc-single"]}>
                {product.richDescription}
              </div>
            </div>
            <div label="Détails">
              <div className={ProductStyle["desc-single"]}>Tab Détails</div>
            </div>
            <div label="Avis (12)">
              <div className={ProductStyle["desc-single"]}>Tab Avis</div>
            </div>
          </Tabs>
        </div>
      </div>

      <div className={`container ${ProductStyle["product-view-more"]}`}>
        {/* <div className={ProductStyle["col"]}>
          <TitleH2 title="Les autres articles du même vendeur" />

          <div className={ProductStyle["view-more-list"]}>
            <ProductList
              products={products}
              slider={true}
              mini={true}
              arrows={true}
            />
          </div>
        </div> */}
        <div className={ProductStyle["col"]}>
          <TitleH2 title="Les articles dans la même catégorie" />

          <div className={ProductStyle["view-more-list"]}>
            <ProductList slider={true} products={products} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import "./../../../styles/helpers/variables";

        .image-slider {
          .slick-dots {
            position: static;

            li {
              width: 20%;
              height: 100px;
              position: relative;
              margin: 0 8px 10px -3px;

              img {
                width: 100%;
                height: 100%;
                display: block;
                padding: 0;
                border: 2px solid $blueColor;
                border-radius: 10px;
                object-fit: cover;
                object-position: top;
              }

              &.slick-active {
                img {
                  border-color: $greenColor;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Product;
