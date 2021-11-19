/* eslint-disable @next/next/no-img-element */
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AdminHeaderStyle from "./AdminHeader.module.scss";

const AdminHeader = ({ setIsOpen }) => {
  return (
    <>
      <header className={AdminHeaderStyle["header"]}>
        <div className={AdminHeaderStyle["header__bars"]}>
          <button
            onClick={() => setIsOpen(true)}
            // @click="$store.commit('sidebar/openBackSidebar')"
            className="text-gray-500 focus:outline-none lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className={AdminHeaderStyle["header__right"]}>
          <div>
            <button
              // @click="dropdownOpen = !dropdownOpen"
              className={AdminHeaderStyle["profile__button"]}
            >
              {/* <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                alt="Your avatar"
              /> */}
              <FontAwesomeIcon icon={faUser} />
            </button>

            <div
            // v-show="dropdownOpen"
            // @click="dropdownOpen = false"
            ></div>

            <div
              // v-show="dropdownOpen"
              className={AdminHeaderStyle["profile__dropdown"]}
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-500 hover:text-white"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-500 hover:text-white"
              >
                Products
              </a>
              <router-link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-500 hover:text-white"
              >
                Log out
              </router-link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default AdminHeader;
