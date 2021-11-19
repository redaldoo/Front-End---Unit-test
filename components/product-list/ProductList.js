import React from "react";
import ProductCard from "../product-card/ProductCard";
import ListStyle from "./ProductList.module.scss";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductList = (props) => {
  let posts = [[], [], [], [], [], [], [], [], [], []];
  if (props.products) {
    posts = props.products;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.show | 4,
    slidesToScroll: props.scroll | 4,
    arrows: props.arrows | false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {props.slider ? (
        <Slider {...settings} className={props.arrows ? "with-arrows" : ""}>
          {posts.map((post, index) => (
            <div className={`list-item-slider`} key={index}>
              <ProductCard product={post} mini={props.mini}></ProductCard>
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          <div className={ListStyle["list"]}>
            {posts.map((post, index) => (
              <div className={ListStyle["list-item"]} key={index}>
                <ProductCard product={post} mini={props.mini}></ProductCard>
              </div>
            ))}
          </div>
        </div>
      )}
      {props.pagination ? (
        <div className={ListStyle["list-pagination"]}>
          <ul>
            <li className={ListStyle["prev"]}>
              <a href="#">
                <FontAwesomeIcon icon={faArrowLeft} /> Précédent
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li className={ListStyle["active"]}>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li className={ListStyle["dots"]}>
              <a href="#">...</a>
            </li>
            <li>
              <a href="#">10</a>
            </li>
            <li className={ListStyle["next"]}>
              <a href="#">
                Suivant <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <style jsx global>
        {`
          .with-arrows {
            .slick-list {
              width: calc(100% - 70px);
              margin: auto;
            }
          }
          .list-item-slider {
            padding: 10px;
          }
          .slick-dots {
            position: relative;
            li {
              button:before {
                font-size: 16px;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default ProductList;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className={className} style={{ ...style }} onClick={onClick} />
      <style jsx>
        {`
          .slick-next {
            right: 0px;
            text-align: center;
            border: 1px solid #0b0808;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            &:before {
              font-size: 18px;
              content: "\f054";
              font-family: "Font Awesome 5 Free";
              font-weight: 700;
              color: #0b0808;
            }
          }
        `}
      </style>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className={className} style={{ ...style }} onClick={onClick} />
      <style jsx>
        {`
          .slick-prev {
            left: 0px;
            text-align: center;
            border: 1px solid #0b0808;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            &:before {
              font-size: 18px;
              content: "\f053";
              font-family: "Font Awesome 5 Free";
              font-weight: 700;
              color: #0b0808;
            }
          }
        `}
      </style>
    </>
  );
}
