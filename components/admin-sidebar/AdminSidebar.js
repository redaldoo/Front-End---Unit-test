import React from "react";
import AdminSidebarStyle from "./AdminSidebar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faClipboardList,
  faStore,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const AdminSidebar = ({ setIsOpen, isOpen }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`${AdminSidebarStyle["overlay"]} ${
          isOpen ? AdminSidebarStyle["overlay--open"] : ""
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`${AdminSidebarStyle["sidebar"]} ${
          isOpen ? AdminSidebarStyle["sidebar--open"] : ""
        }`}
      >
        <div className={AdminSidebarStyle["sidebar__header"]}></div>
        <nav className={AdminSidebarStyle["sidebar__menu"]}>
          <Link href="/admin">
            <a
              className={`${
                router.pathname == "/admin"
                  ? AdminSidebarStyle["menu__item--active"]
                  : ""
              } ${AdminSidebarStyle["menu__item"]}`}
            >
              <FontAwesomeIcon icon={faTachometerAlt} />
              <span className="mx-4">Tableau de bord</span>
            </a>
          </Link>

          <Link href="/admin/orders">
            <a
              className={`${
                router.pathname == "/admin/orders"
                  ? AdminSidebarStyle["menu__item--active"]
                  : ""
              } ${AdminSidebarStyle["menu__item"]}`}
            >
              <FontAwesomeIcon icon={faClipboardList} />
              <span className="mx-4">Gestion des commandes</span>
            </a>
          </Link>

          <Link href="/admin/categories">
            <a
              className={`${
                router.pathname == "/admin/categories"
                  ? AdminSidebarStyle["menu__item--active"]
                  : ""
              } ${AdminSidebarStyle["menu__item"]}`}
            >
              <FontAwesomeIcon icon={faStore} />
              <span className="mx-4">Gestion des catégories</span>
            </a>
          </Link>

          <Link href="/admin/products">
            <a
              className={`${
                router.pathname == "/admin/products"
                  ? AdminSidebarStyle["menu__item--active"]
                  : ""
              } ${AdminSidebarStyle["menu__item"]}`}
            >
              <FontAwesomeIcon icon={faBarcode} />
              <span className="mx-4">Gestion des produits</span>
            </a>
          </Link>

          <Link href="/admin/users">
            <a
              className={`${
                router.pathname == "/admin/users"
                  ? AdminSidebarStyle["menu__item--active"]
                  : ""
              } ${AdminSidebarStyle["menu__item"]}`}
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="mx-4">Gestion des utilisateurs</span>
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
