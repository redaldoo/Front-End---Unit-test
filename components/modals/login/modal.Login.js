import FormField from "components/UI/form-field/FormField";
import TitleH2 from "components/UI/TitleH2";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "services/auth.service";
import { hideLogin } from "store/modal/modalSlice";
import CustomButton from "../../UI/CustomButton";
import LoginStyle from "./Login.module.scss";

const ModalLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const showLogin = useSelector((state) => state.modal.login);

  const Auth = new AuthService();

  const handleForm = (data) => {
    Auth.login(data)
      .then((data) => {
        if (data.token !== null) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("admin", data.admin);
          router.push("/products");
        } else {
          router.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal
        className={`${LoginStyle["login"]} ${LoginStyle["ReactModal"]}`}
        isOpen={showLogin}
        ariaHideApp={false}
      >
        <div className={`${LoginStyle["login-connect"]}`}></div>
        <div className={`${LoginStyle["login-classic"]}`}>
          <TitleH2
            title="Enter the following fields to login"
            className="title-h2--25-margin"
          />

          <CustomButton
            className="btn-large-modal"
            onClick={() => dispatch(hideLogin())}
          >
            X
          </CustomButton>
          <div>
            <FormField
              inputType="text"
              inputName="email"
              inputLabel="Email *"
              reference={register("email", {
                required: true,
              })}
            >
              {errors.email?.type == "required" ? (
                <span>L'email est obligatoire.</span>
              ) : (
                <></>
              )}
            </FormField>

            <FormField
              inputType="password"
              inputName="password"
              inputLabel="Mot de passe *"
              reference={register("password", {
                required: true,
              })}
            >
              {errors.password?.type == "required" ? (
                <span>Le mot de passe est obligatoire.</span>
              ) : (
                <></>
              )}
            </FormField>
            <CustomButton
              className="btn-full btn-h-large"
              onClick={handleSubmit(handleForm)}
            >
              Login
            </CustomButton>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalLogin;
