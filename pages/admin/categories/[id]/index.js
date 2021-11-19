/* eslint-disable react-hooks/rules-of-hooks */
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import FormField from "components/UI/form-field/FormField";
import React, { useEffect, useState } from "react";
import NewCategoryStyle from "./NewCategory.module.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CategorieService from "services/categorie.service";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const categoriesService = new CategorieService();

  useEffect(() => {
    categoriesService.GetCategorieDetail(id).then((response) => {
      for (const [key, value] of Object.entries(response)) {
        setValue(key, value, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    });
  }, [id]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const saveButton = (data) => {
    console.log({ data });
    categoriesService.UpdateCategorie(id, data).finally(() => {
      router.push(`/admin/categories`);
    });
  };

  const goBack = () => {
    router.push(`/admin/categories`);
  };

  return (
    <div>
      <AdminSubHeader
        titleValue="Modification catégorie"
        rightBtn="Modifier"
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
