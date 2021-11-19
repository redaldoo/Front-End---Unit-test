import CustomButton from "components/UI/CustomButton";
import Title from "components/UI/Title";
import TitleH2 from "components/UI/TitleH2";
import React, { useState } from "react";
import ModalLogin from "../modals/login/modal.Login";
import ModalSignup from "../modals/signup/modal.SignUp";
import HeaderHomeStyle from "./HeaderHome.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showLogin, showSignup } from "store/modal/modalSlice";

const HeaderHome = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header className={HeaderHomeStyle["header"]}>
        <div>
          <CustomButton
            className="btn-white"
            onClick={() => dispatch(showSignup())}
          >
            Sign up
          </CustomButton>
          <CustomButton
            className="btn-white"
            onClick={() => dispatch(showLogin())}
          >
            Login
          </CustomButton>
          <ModalSignup />
          <ModalLogin />

          <div className={HeaderHomeStyle["logo-container"]}>
            <div className={HeaderHomeStyle["logo"]}>
              <span className={HeaderHomeStyle["fast-flicker"]}>Try</span>
              <span className={HeaderHomeStyle["and"]}>&</span>
              <span className={HeaderHomeStyle["flicker"]}>B</span>uy
            </div>
          </div>
        </div>

        {/* <div>
          <Title title="DISCOVER" />
          <TitleH2 title="Second Hand Elegant Outfit" />
        </div> */}
      </header>
    </>
  );
};

export default HeaderHome;
