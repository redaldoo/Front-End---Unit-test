import FormField from "components/UI/form-field/FormField";
import TitleH2 from "components/UI/TitleH2 copy";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "services/auth.service";
import { hideSignup } from "store/modal/modalSlice";
import CustomButton from "../../UI/CustomButton";
import SignupStyle from "./Signup.module.scss";

const ModalSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const dispatch = useDispatch();
  const showSignup = useSelector((state) => state.modal.signup);

  const Auth = new AuthService();

  const handleForm = (data) => {
    data.lat = "1.2";
    data.lng = "1.2";
    Auth.SignUp(data)
      .then((data) => {
        if (data.token !== null) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("admin", data.admin);
          localStorage.setItem("user", JSON.stringify(data.user));
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
        className={`${SignupStyle["signup"]} ${SignupStyle["ReactModal"]}`}
        isOpen={showSignup}
        ariaHideApp={false}
      >
        <div className={`${SignupStyle["signup-connect"]}`}></div>
        <div className={`${SignupStyle["signup-classic"]}`}>
          <TitleH2
            title="Enter the following fields to sign up"
            className="title-h2--25-margin"
          />

          <CustomButton
            className="btn-large-modal"
            onClick={() => dispatch(hideSignup())}
          >
            X
          </CustomButton>
          <div className={SignupStyle["signup-form"]}>
            <div
              className={`${SignupStyle["signup-form--50"]} ${SignupStyle["signup-form--right"]}`}
            >
              <FormField
                inputType="text"
                inputName="name"
                inputLabel="Votre nom *"
                reference={register("name", {
                  required: true,
                })}
              >
                {errors.name?.type == "required" ? (
                  <span>Le nom est obligatoire.</span>
                ) : (
                  <></>
                )}
              </FormField>
            </div>

            <div
              className={`${SignupStyle["signup-form--50"]} ${SignupStyle["signup-form--left"]}`}
            >
              <FormField
                inputType="text"
                inputName="lastname"
                inputLabel="Votre prénom *"
                reference={register("lastname", {
                  required: true,
                })}
              >
                {errors.lastname?.type == "required" ? (
                  <span>Le prénom est obligatoire.</span>
                ) : (
                  <></>
                )}
              </FormField>
            </div>

            <div className={SignupStyle["signup-form--100"]}>
              <FormField
                inputType="email"
                inputName="email"
                inputLabel="Votre email *"
                reference={register("email", {
                  required: true,
                })}
              >
                {errors.email?.type == "required" ? (
                  <span>L email est obligatoire.</span>
                ) : (
                  <></>
                )}
              </FormField>
            </div>

            <div className={`${SignupStyle["signup-form--100"]}`}>
              <FormField
                inputType="password"
                inputName="password"
                inputLabel="Votre mot de passe *"
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
            </div>

            <div className={`${SignupStyle["signup-form--100"]}`}>
              <FormField
                inputType="password"
                inputName="confirmPassword"
                inputLabel="Confirmez votre mot de passe *"
                reference={register("confirmPassword", {
                  required: true,
                })}
              >
                {errors.confirmPassword?.type == "required" ? (
                  <span>La confirmation du mot de passe est obligatoire.</span>
                ) : (
                  <></>
                )}
              </FormField>
            </div>

            <div className={SignupStyle["signup-form--100"]}>
              <FormField
                inputType="text"
                inputName="phone"
                inputLabel="Votre téléphone *"
                reference={register("telephone", {
                  required: true,
                })}
              >
                {errors.telephone?.type == "required" ? (
                  <span>Le téléphone est obligatoire.</span>
                ) : (
                  <></>
                )}
              </FormField>
            </div>

            <div className={SignupStyle["signup-form--100"]}>
              <FormField
                inputType="text"
                inputName="adresse"
                inputLabel="Votre adresse *"
                reference={register("address", {
                  required: true,
                })}
              >
                {errors.address?.type == "required" ? (
                  <span>L adresse est obligatoire.</span>
                ) : (
                  <></>
                )}
              </FormField>
            </div>

            {/* <div className={SignupStyle["signup-form--100"]}>
							<FormField
								inputType="text"
								inputName="lat"
								inputLabel="lat *"
								reference={register("lat", {
									required: true,
								})}
							>
								{errors.lat?.type == "required" ? (
									<span>L adresse est obligatoire.</span>
								) : (
									<></>
								)}
							</FormField>
						</div>

						<div className={SignupStyle["signup-form--100"]}>
							<FormField
								inputType="text"
								inputName="lng"
								inputLabel="lng *"
								reference={register("lng", {
									required: true,
								})}
							>
								{errors.lng?.type == "required" ? (
									<span>lng est obligatoire.</span>
								) : (
									<></>
								)}
							</FormField>
						</div> */}

            <div className={SignupStyle["signup-form--100"]}>
              <CustomButton
                className="btn-full btn-h-large"
                onClick={handleSubmit(handleForm)}
              >
                SignUp
              </CustomButton>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalSignup;
