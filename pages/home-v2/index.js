/* eslint-disable @next/next/no-img-element */
import Title from "components/UI/Title";
import TitleH2 from "components/UI/TitleH2";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HomeStyle from "./Home.module.scss";
import ProductList from "./../../components/product-list/ProductList";
import CustomButton from "components/UI/CustomButton";
import { showSignup } from "store/modal/modalSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductService from "services/products.service";

const HomePageV2 = () => {
  const dispatch = useDispatch();

  const productService = new ProductService();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService.GetAllProduct({ id: 123 }).then((value) => {
      setProducts(value);
    });
  }, []);

  return (
    <>
      <div className={HomeStyle["home__part"]}>
        <div className="container">
          <div className={`${HomeStyle["home__title"]} col`}>
            <Title title="Products made" className="title__lg title__bold" />
            <TitleH2 title="Right for you" className="title-h2--home" />
          </div>
          <div className={`${HomeStyle["home__slider"]} col`}>
            <ProductList
              slider={true}
              mini={true}
              arrows={true}
              show={4}
              scroll={1}
              products={products}
            />
            <a href="#" className={HomeStyle["slider__more"]}>
              <div className="link-container">
                <span className="link-title1 title">VIEW MORE</span>
              </div>
              <div className="link-icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={HomeStyle["home__card"]}>
        <div className="container">
          <div className="row">
            <div
              className={`col ${HomeStyle["card"]} ${HomeStyle["card-one"]}`}
            >
              <div className="col">
                <TitleH2
                  title="For buyers"
                  className="title-h2--home title-h2--home-part"
                />
              </div>

              <div className="row">
                <div className={`col ${HomeStyle["card-col"]}`}>
                  <p>1.</p>
                  <p>Choose something to buy in your area</p>
                </div>
                <div className={`col ${HomeStyle["card-col"]}`}>
                  <p>2.</p>
                  <p>Try it & keep it as long as you want</p>
                </div>
                <div className={`col ${HomeStyle["card-col"]}`}>
                  <p>3.</p>
                  <p>But it & enjoy for life. team Try&Buy</p>
                </div>
              </div>

              <div className={`col ${HomeStyle["card-description"]}`}>
                Cuius acerbitati uxor grave accesserat incentivum, germanitate
                Augusti turgida supra modum, quam Hannibaliano regi fratris
                filio antehac Constantinus iunxerat pater, Megaera quaedam
                mortalis, inflammatrix saevientis adsidua, humani cruoris avida
                nihil mitius.
              </div>

              <div className={`col ${HomeStyle["card-buttons"]}`}>
                <CustomButton onClick={() => dispatch(showSignup())}>
                  Register
                </CustomButton>
                <CustomButton
                  typeButton="link"
                  hrefButton="#"
                  className="btn-no-border"
                >
                  More information
                </CustomButton>
              </div>
            </div>
            <div
              className={`col ${HomeStyle["card"]} ${HomeStyle["card-two"]}`}
            >
              <img
                className="image-one"
                src="https://cache.magicmaman.com/data/photo/w1000_ci/53/astuces-ranger-maison.jpg"
                alt=""
              />
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className={HomeStyle["home__card"]}>
        <div className="container">
          <div className="row">
            <div
              className={`col ${HomeStyle["card"]} ${HomeStyle["card-two"]}`}
            >
              <img
                className="image-one"
                src="https://www.jefaisconstruire.fr/wp-content/uploads/2019/09/ranger-sa-maison-667x287.jpg"
                alt=""
              />
              <div></div>
            </div>
            <div
              className={`col ${HomeStyle["card"]} ${HomeStyle["card-one"]}`}
            >
              <div className="col">
                <TitleH2
                  title="For salers"
                  className="title-h2--home title-h2--home-part"
                />
              </div>

              <div className="row">
                <div className={`col ${HomeStyle["card-col"]}`}>
                  <p>1.</p>
                  <p>Take a picture of your product & place it</p>
                </div>
                <div className={`col ${HomeStyle["card-col"]}`}>
                  <p>2.</p>
                  <p>Deal with your customers & sale it</p>
                </div>
                <div className={`col ${HomeStyle["card-col"]}`}>
                  <p>3.</p>
                  <p>Send Your product & get paid !</p>
                </div>
              </div>

              <div className={`col ${HomeStyle["card-description"]}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>

              <div className={`col ${HomeStyle["card-buttons"]}`}>
                <CustomButton onClick={() => dispatch(showSignup())}>
                  Register
                </CustomButton>
                <CustomButton
                  typeButton="link"
                  hrefButton="#"
                  className="btn-no-border"
                >
                  More information
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={HomeStyle["home__part"]}>
        <div className="container">
          <div className={`${HomeStyle["home__title"]} col`}>
            <Title title="Our services" className="title__lg title__bold" />
            <TitleH2 title="Right for you" className="title-h2--home" />
          </div>
          <div className={`${HomeStyle["home__col"]} row`}>
            <div className={`col`}>
              <img
                className="img-circle"
                src="https://media.istockphoto.com/photos/city-map-with-pin-pointers-3d-rendering-image-picture-id1189064346?s=612x612"
                alt=""
              />
              <p className={HomeStyle["title"]}>GEOLOC </p>
              <p className={HomeStyle["description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className={`col`}>
              <img
                className="img-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwmTnyvNNL55sVlHthjIjOQHmcelSxQcKkg&usqp=CAU"
                alt=""
              />
              <p className={HomeStyle["title"]}>CATEGORIES</p>
              <p className={HomeStyle["description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className={`col`}>
              <img
                className="img-circle"
                src="https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <p className={HomeStyle["title"]}>DELIVERY</p>
              <p className={HomeStyle["description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={HomeStyle["home__card"]}>
        <div className="container">
          <div className={`${HomeStyle["home__title"]} col`}>
            <Title title="Our customers" className="title__lg title__bold" />
            <TitleH2 title="Trust us" className="title-h2--home" />
          </div>
          <div className={`${HomeStyle["home__col"]} row`}>
            <div className={`col`}>
              <img
                className="img-circle"
                src="https://st.depositphotos.com/2069323/2156/i/600/depositphotos_21568785-stock-photo-man-pointing.jpg"
                alt=""
              />
              <p className={HomeStyle["description"]}>
                « Best experience Lorem ipsum dolor  »{" "}
              </p>
              <p className={HomeStyle["title"]}>JOE </p>
            </div>
            <div className={`col`}>
              <img
                className="img-circle"
                src="https://www.simplitoo.fr/media/articles/preview_Iqvnb2A.jpeg"
                alt=""
              />
              <p className={HomeStyle["description"]}>
                « Best experience for shopping ! »{" "}
              </p>
              <p className={HomeStyle["title"]}>MARIA</p>
            </div>
            <div className={`col`}>
              <img
                className="img-circle"
                src="https://www.snapchat-de.fr/wp-content/uploads/2018/06/personne.jpg"
                alt=""
              />
              <p className={HomeStyle["description"]}>
                « Lorem ipsum dolor  »{" "}
              </p>
              <p className={HomeStyle["title"]}>ALEX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description-card">
        <div id="desc-container">
          <h2 className="h1-subscribe">Subscribe</h2>
          <p className="text">Stay updated with our newsletter</p>
          <div id="col-2">
            <input type="email" placeholder="Type your Email" required />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .description-card {
          background: url("https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
            no-repeat padding-box;
          background-size: 100%;

          position: relative;
          height: 700px;
          background: #f4f1ef 0% 0% no-repeat padding-box;
          opacity: 1;
          flex-direction: column;
          justify-content: center;
          display: flex;

          #desc-container {
            background: url("https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
              no-repeat padding-box;
            background-size: 100%;
            box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
            text-align: center;
            border-radius: 5px;
            margin: 3em auto;

            height: 400px;
            width: 580px;
            padding: 1em;

            bottom: 0;
            right: 0;
            left: 0;
            top: 0;

            .h1-subscribe {
              margin-top: 30px;
              margin-left: auto;
              margin-right: auto;
              width: 300px;
              font: normal normal bold 32px/1px Raleway;
              letter-spacing: 0px;
              color: #707070;
              opacity: 1;
              margin-bottom: 2.5rem;
            }

            input {
              width: 210px;
              display: inline-block;
              text-align: center;
              border-radius: 7px;
              background: #eee;
              padding: 1em 2em;
              outline: none;
              border: none;
              color: #222;
              transition: 0.3s linear;
            }

            button {
              background-image: linear-gradient(
                to left,
                rgba(255, 146, 202, 0.75) 0%,
                rgba(145, 149, 251, 0.86) 100%
              );
              box-shadow: 0 9px 25px -5px #df91fb;
              font-family: "Abel", sans-serif;
              padding: 0.5em 1.9em;
              margin: 2.3em 0 0 0;
              border-radius: 7px;
              font-size: 1.4em;
              cursor: pointer;
              color: #ffffff;
              font-size: 1em;
              outline: none;
              border: none;
              transition: 0.3s linear;

              &:hover {
                transform: translatey(2px);
              }

              &:active {
                transform: translatey(5px);
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default HomePageV2;
