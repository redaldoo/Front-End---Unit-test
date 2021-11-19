/* eslint-disable react-hooks/rules-of-hooks */
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import FormField from "components/UI/form-field/FormField";
import React from "react";
import NewCategoryStyle from "./NewCategory.module.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import CategorieService from "services/categorie.service";

const index = () => {
  const categoriesService = new CategorieService();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const saveButton = (data) => {
    console.log({ data });
    categoriesService.CreateCategorie(data).finally(() => {
      router.push(`/admin/categories`);
    });
  };

  const goBack = () => {
    router.push(`/admin/categories`);
  };

  return (
    <div>
      <AdminSubHeader
        titleValue="Nouvelle catégorie"
        rightBtn="Enregistrer"
        onClickRight={handleSubmit(saveButton)}
        showBack={true}
        onClickBack={goBack}
      />
      <div className="content__container">
        <div className="form__container">
          <FormField
            inputType="text"
            inputName="name"
            inputLabel="Nom de la catégorie"
            reference={register("name", {
              required: true,
              minLength: 4,
            })}
          >
            {errors.name?.type == "required" ? (
              <span>This field is required</span>
            ) : (
              <></>
            )}
            {errors.name?.type == "minLength" ? <span>min length</span> : <></>}
          </FormField>
        </div>
      </div>
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
