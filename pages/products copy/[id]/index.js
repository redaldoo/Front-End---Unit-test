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

const Product = () => {
	const router = useRouter();
	const { id } = router.query;

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

	return (
		<>
			<div className={`container ${ProductStyle["product-container"]}`}>
				<div className={`${ProductStyle["col"]} ${ProductStyle["col-image"]}`}>
					<Slider {...settings} ref={sliderRef} className="image-slider">
						<div className={ProductStyle["image-product"]}>
							<img
								src="https://themes.themewild.com/smartshop/assets/img/products/p4.png"
								alt="#"
							/>
						</div>
						<div className={ProductStyle["image-product"]}>
							<img
								src="https://themes.themewild.com/smartshop/assets/img/products/p3.png"
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
						</div>
					</Slider>
				</div>
				<div
					className={`${ProductStyle["col"]} ${ProductStyle["col-details"]}`}
				>
					<Title title="Xbeats Bluetooth Earphones" />
					<div className={ProductStyle["product-short"]}>
						<div className={ProductStyle["product-rating"]}>
							<Reviews stars={4} />
							<a href="#" className={ProductStyle["product-rates"]}>
								(80) Reviews
							</a>
						</div>
						<p className={ProductStyle["product-price"]}>
							<span className={ProductStyle["discount"]}>$70.00</span>
							<s>$80.00</s>
						</p>
						<p className={ProductStyle["description"]}>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable.
						</p>
					</div>

					<div className={ProductStyle["product-buy"]}>
						<div className={ProductStyle["product-buttons"]}>
							<CustomButton className="btn-blue">
								Ajouter au panier
							</CustomButton>
							<CustomButton className="btn-min btn-blue">
								<FontAwesomeIcon icon={faHeart} />
							</CustomButton>
						</div>
						<div className={ProductStyle["product-info"]}>
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
						</div>
					</div>
				</div>
				<div
					className={`${ProductStyle["col"]} ${ProductStyle["col-description"]}`}
				>
					<Tabs>
						<div label="Description">
							<div className={ProductStyle["desc-single"]}>
								<p>
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. If you are going to use a passage of
									Lorem Ipsum, you need to be sure there isn't anything
									embarrassing hidden in the middle of text. All the Lorem Ipsum
									generators on the Internet tend to repeat predefined chunks as
									necessary, making this the first true generator on the
									Internet.
								</p>
							</div>
							<div className={ProductStyle["desc-single"]}>
								<p>
									It uses a dictionary of over 200 Latin words, combined with a
									handful of model sentence structures, to generate Lorem Ipsum
									which looks reasonable. The generated Lorem Ipsum is therefore
									always free from repetition, injected humour, or
									non-characteristic words etc.
								</p>
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
				<div className={ProductStyle["col"]}>
					<TitleH2 title="Les autres articles du même vendeur" />

					<div className={ProductStyle["view-more-list"]}>
						<ProductList slider={true} mini={true} />
					</div>
				</div>
				<div className={ProductStyle["col"]}>
					<TitleH2 title="Les articles dans la même catégorie" />

					<div className={ProductStyle["view-more-list"]}>
						<ProductList slider={true} />
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
              height: auto;
              position: relative;
              margin: 0 8px 10px -3px;

              img {
                width: 100%;
                display: block;
                padding: 0;
                border: 2px solid $blueColor;
                border-radius: 10px;
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
