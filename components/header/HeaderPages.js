/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
  faBars,
  faHeart,
  faMailBulk,
  faSearch,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "components/UI/CustomButton";
import FormField from "components/UI/form-field/FormField";
import Logo from "components/UI/Logo";
import React, { useEffect, useState } from "react";
import HeaderPagesStyles from "./HeaderPages.module.scss";
import FormFieldStyle from "./../../components/UI/form-field/FormField.module.scss";
import Link from "next/link";
import CategorieService from "services/categorie.service";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setSearchCategories,
  setSearchProducts,
  setSelectedCategory,
} from "store/search/searchSlice";
// import router from "next/router";
import { useForm } from "react-hook-form";
import ProductService from "services/products.service";
import { useRouter } from "next/router";

function HeaderPages(props) {
  const router = useRouter();
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [_document, set_document] = useState(null);
  const [_window, set_window] = useState(null);

  useEffect(() => {
    set_document(document);
    set_window(window);
  }, []);

  const toggleUserMenu = () => {
    setOpenUserMenu(!openUserMenu);
  };

  const box = _document?.getElementById("dropdown__content");

  const toggle = (event) => {
    event.stopPropagation();

    if (!event.target.closest(".dropdown__content")) {
      // console.log("Click outside");
      // setOpenUserMenu(false);
    } else {
      // console.log("Click inside");
    }
  };

  _window?.addEventListener("click", toggle);

  const body = _document?.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  _window?.addEventListener("scroll", () => {
    const currentScroll = _window?.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
      setOpenUserMenu(false);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      setOpenUserMenu(false);
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  const categoriesService = new CategorieService();
  const productsService = new ProductService();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.search.listCategories);
  const categorie = useSelector((state) => state.search.selectedCategory);

  useEffect(() => {
    categoriesService.GetAllCategories().then((value) => {
      dispatch(setSearchCategories(value));
    });
    productsService.GetAllProduct().then((value) => {
      dispatch(setSearchProducts(value));
    });
  }, []);

  useEffect(() => {
    if (categorie) {
      router.query.category = categorie;
      router.push(router);
      productsService.GetAllProduct({ category: categorie }).then((res) => {
        dispatch(setSearchProducts(res));
      });
    }
  }, [categorie]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type);
      if (name == "category") {
        dispatch(setSelectedCategory(value.category));
      }
      if (name == "name") {
        dispatch(setQuery(value.name));
        if (router.pathname == "/products" && router.query.name != value.name) {
          router.query.name = value.name;
          router.push(router);
        }
      }
      productsService.GetAllProduct(value).then((res) => {
        dispatch(setSearchProducts(res));
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      {openUserMenu ? (
        <div
          className={HeaderPagesStyles["dropdown__over"]}
          onClick={() => toggleUserMenu()}
        ></div>
      ) : (
        <></>
      )}
      <div className="header__guard"></div>
      <header className={`${HeaderPagesStyles["header"]} header`}>
        <div
          className={`container no-padding ${HeaderPagesStyles["header__container"]}`}
        >
          <div className={`${HeaderPagesStyles["header__brand"]} col col-auto`}>
            <Link href="/products">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div
            className={`${HeaderPagesStyles["header__search"]} col col-auto`}
          >
            {router.pathname.startsWith("/products") ? (
              <div className={HeaderPagesStyles["cards__search"]}>
                <div
                  className={`${HeaderPagesStyles["card"]} ${HeaderPagesStyles["card__two"]}`}
                >
                  <select
                    className="select"
                    name="category"
                    {...register("category", {})}
                  >
                    <option value="" defaultValue>
                      Toutes les catégories
                    </option>
                    {categories.map((el) => (
                      <option
                        key={el.id}
                        value={el.id}
                        selected={el.id == categorie}
                      >
                        {el.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className={`${HeaderPagesStyles["card"]} ${HeaderPagesStyles["card__one"]}`}
                >
                  <FontAwesomeIcon icon={faSearch} />

                  <FormField
                    className={`${FormFieldStyle["no-margin"]} ${FormFieldStyle["no-bg"]} ${FormFieldStyle["no-border"]}`}
                    inputType="text"
                    inputName="name"
                    inputLabel="Rechercher un produit"
                    reference={register("name", {})}
                  ></FormField>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`${HeaderPagesStyles["header__icons"]} Icone col col-auto`}
          >
            <CustomButton
              typeButton="link"
              hrefButton="/cart"
              className="btn-min btn-transparent btn-no-border btn-no-padding"
            >
              <FontAwesomeIcon icon={faShoppingBasket} />
            </CustomButton>
            <CustomButton
              typeButton="link"
              hrefButton="/wishlist"
              className="btn-min btn-transparent btn-no-border btn-no-padding"
            >
              <FontAwesomeIcon icon={faHeart} />
            </CustomButton>
            <div className={HeaderPagesStyles["user__dropdown"]}>
              <div
                className={HeaderPagesStyles["dropdown__button"]}
                onClick={() => toggleUserMenu()}
              >
                <CustomButton
                  className={`btn-min btn-transparent btn-no-border btn-no-padding`}
                >
                  <FontAwesomeIcon icon={faUser} />
                </CustomButton>
                <FontAwesomeIcon icon={faBars} className="button__bars" />
              </div>
              {openUserMenu ? (
                <div
                  id="dropdown__content"
                  className={HeaderPagesStyles["dropdown__content"]}
                >
                  <div className={HeaderPagesStyles["dropdown__item"]}>
                    <Link className="" href="/seller">
                      <a>
                        <span className="">Tableau de bord</span>
                      </a>
                    </Link>
                  </div>
                  <div className={HeaderPagesStyles["dropdown__item"]}>
                    <Link className="" href="/seller/orders">
                      <a>
                        <span className="">Mes commandes</span>
                      </a>
                    </Link>
                  </div>
                  <div className={HeaderPagesStyles["dropdown__item"]}>
                    <Link className="" href="/seller/products">
                      <a>
                        <span className="">Mes produits</span>
                      </a>
                    </Link>
                  </div>
                  <div className={HeaderPagesStyles["dropdown__item"]}>
                    <Link className="" href="/seller/shop">
                      <a>
                        <span className="">Ma boutique</span>
                      </a>
                    </Link>
                  </div>
                  <div className={HeaderPagesStyles["dropdown__item"]}>
                    <Link className="" href="/Account/Account">
                      <a>
                        <span className="">Mon profil</span>
                      </a>
                    </Link>
                  </div>
                  <div className={HeaderPagesStyles["dropdown__item"]}>
                    <Link className="" href="/">
                      <a>
                        <span
                          className=""
                          onClick={() => {
                            localStorage.removeItem("token");
                          }}
                        >
                          Se déconnecter
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </header>
      <style jsx global>
        {`
          .header__guard {
            height: 0px;
          }

          .scroll-down .header {
            transform: translate3d(0, -100%, 0);
          }

          .scroll-up {
            .header__guard {
              height: 88px;
            }

            .header {
              position: fixed;
              z-index: 99;
              left: 0;
              right: 0;
              top: 0;
              transform: translate3d(0, 0, 0);
            }
          }

          svg[data-icon="search"] + div {
            input,
            label {
              height: auto;
              line-height: 1;
            }
          }
        `}
      </style>
    </>
  );
}
export default HeaderPages;
