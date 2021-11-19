/* eslint-disable react-hooks/rules-of-hooks */
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import FormField from "components/UI/form-field/FormField";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ProductService from "services/products.service";
import NewProductStyle from "./../../../seller/products/new/NewProduct.module.scss";
import CategorieService from "services/categorie.service";
import Toggler from "components/UI/toggler/Toggler";
import Select from "react-select";

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const categoriesService = new CategorieService();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoriesService.GetAllCategories().then((value) => {
      setCategories(
        value.map((el) => {
          return {
            value: el.id,
            label: el.name,
          };
        })
      );
      // setCategories(value);
    });
  }, []);

  const productsServices = new ProductService();

  useEffect(() => {
    productsServices.GetProductDetail(id).then((response) => {
      setProduct(response);
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
    control,
  } = useForm();

  const saveButton = (data) => {
    console.log({ data });
    // data.category = data.category[0].value;
    productsServices.UpdateProduct(id, data).finally(() => {
      router.push(`/admin/products`);
    });
  };

  const goBack = () => {
    router.push(`/admin/products`);
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
        <div className={`seller__content ${NewProductStyle["form__products"]}`}>
          <div
            className={`${NewProductStyle["form__field"]} ${NewProductStyle["form__field--50"]}`}
          >
            <FormField
              inputType="text"
              inputName="name"
              inputLabel="Nom du produit *"
              reference={register("name", {
                required: true,
                minLength: 4,
              })}
            >
              {errors.name?.type == "required" ? (
                <span>Le nom du produit est obligatoire.</span>
              ) : (
                <></>
              )}
              {errors.name?.type == "minLength" ? (
                <span>Veuillez renseigner au moins 4 caractères.</span>
              ) : (
                <></>
              )}
            </FormField>
          </div>
          <div
            className={`${NewProductStyle["form__field"]} ${NewProductStyle["form__field--50"]}`}
          >
            <FormField
              inputType="select"
              inputName="category"
              inputLabel="Catégorie du produit *"
              reference={register("category", {
                required: true,
              })}
              multiSelect={{
                options: categories,
              }}
              control={control}
            >
              {errors.category?.type == "required" ? (
                <span>La catégorie du produit est obligatoire.</span>
              ) : (
                <></>
              )}
            </FormField>
          </div>
          <div
            className={`${NewProductStyle["form__field"]} ${NewProductStyle["form__field--50"]}`}
          >
            <FormField
              inputType="number"
              inputName="price"
              inputLabel="Prix *"
              reference={register("price", {
                required: true,
                min: 1,
              })}
            >
              {errors.price?.type == "required" ? (
                <span>Le prix du produit est obligatoire.</span>
              ) : (
                <></>
              )}
              {errors.price?.type == "min" ? (
                <span>Le prix du produit doit être supérieur à 0.</span>
              ) : (
                <></>
              )}
            </FormField>
          </div>
          <div
            className={`${NewProductStyle["form__field"]} ${NewProductStyle["form__field--50"]}`}
          >
            <Toggler label="Actif" reference={register("status", {})} />
          </div>
          <div
            className={`${NewProductStyle["form__field"]} ${NewProductStyle["form__field--50"]}`}
          >
            <FormField
              inputType="text"
              inputName="image"
              inputLabel="Image du produit *"
              reference={register("image", {
                required: true,
              })}
            >
              {errors.image?.type == "required" ? (
                <span>L'image du produit est obligatoire.</span>
              ) : (
                <></>
              )}
            </FormField>
          </div>
          <div className={`${NewProductStyle["form__field"]}`}>
            <FormField
              inputType="textarea"
              inputName="description"
              inputLabel="Description *"
              reference={register("description", {
                required: true,
                minLength: 10,
              })}
            >
              {errors.description?.type == "required" ? (
                <span>La description du produit est obligatoire.</span>
              ) : (
                <></>
              )}
              {errors.description?.type == "minLength" ? (
                <span>Veuillez renseigner au moins 10 caractères.</span>
              ) : (
                <></>
              )}
            </FormField>
          </div>
          <div className={`${NewProductStyle["form__field"]}`}>
            <FormField
              inputType="textarea"
              inputName="richDescription"
              inputLabel="Longue description *"
              reference={register("richDescription", {
                required: true,
                minLength: 10,
              })}
            >
              {errors.richDescription?.type == "required" ? (
                <span>La description du produit est obligatoire.</span>
              ) : (
                <></>
              )}
              {errors.richDescription?.type == "minLength" ? (
                <span>Veuillez renseigner au moins 10 caractères.</span>
              ) : (
                <></>
              )}
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
