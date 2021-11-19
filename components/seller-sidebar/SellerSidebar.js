import React from "react";
import SellerSidebarStyle from "./SellerSidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faShoppingCart,
  faStore,
  faTachometerAlt,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "components/UI/Badge";
import Link from "next/link";
import { useRouter } from "next/router";

const SellerSidebar = () => {
  const router = useRouter();

  return (
    <>
      <div className={SellerSidebarStyle["account-sidebar"]}>
        <ul className={SellerSidebarStyle["menu-list"]}>
          <li>
            <Link href="/seller">
              <a
                className={`${
                  router.pathname == "/seller"
                    ? SellerSidebarStyle["menu-item--active"]
                    : ""
                } ${SellerSidebarStyle["menu-item"]}`}
              >
                <FontAwesomeIcon icon={faTachometerAlt} />
                <span>Tableau de bord</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/seller/orders">
              <a
                className={`${
                  router.pathname.startsWith("/seller/orders")
                    ? SellerSidebarStyle["menu-item--active"]
                    : ""
                } ${SellerSidebarStyle["menu-item"]}`}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Mes commandes</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/seller/products">
              <a
                className={`${
                  router.pathname.startsWith("/seller/products")
                    ? SellerSidebarStyle["menu-item--active"]
                    : ""
                } ${SellerSidebarStyle["menu-item"]}`}
              >
                <FontAwesomeIcon icon={faBullhorn} />
                <span>Mes produits</span>
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/seller/shop">
              <a
                className={`${
                  router.pathname.startsWith("/seller/shop")
                    ? SellerSidebarStyle["menu-item--active"]
                    : ""
                } ${SellerSidebarStyle["menu-item"]}`}
              >
                <FontAwesomeIcon icon={faStore} />
                <span>Ma boutique</span>
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/seller/settings">
              <a
                className={`${
                  router.pathname.startsWith("/seller/settings")
                    ? SellerSidebarStyle["menu-item--active"]
                    : ""
                } ${SellerSidebarStyle["menu-item"]}`}
              >
                <FontAwesomeIcon icon={faTools} />
                <span>Paramètres</span>
              </a>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default SellerSidebar;
