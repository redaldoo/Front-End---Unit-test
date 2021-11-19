/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import AdminSubHeader from "components/admin-subheader/AdminSubHeader";
import AdminLayout from "components/layout/AdminLayout";
import SellerLayout from "components/layout/SellerLayout";
import Breadcrumbs from "components/UI/Breadcrumbs";
import CustomTable from "components/UI/custom-table/CustomTable";
import CustomButton from "components/UI/CustomButton";
import FormField from "components/UI/form-field/FormField";
import Title from "components/UI/Title";
import Toggler from "components/UI/toggler/Toggler";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useStateManager } from "react-select";
import CategorieService from "services/categorie.service";
import ProductService from "services/products.service";
import NewProductStyle from "./EditProduct.module.scss";

const index = () => {
  const breadcrumbs = [
    { href: "/", title: "Accueil" },
    { href: "/products", title: "Mes produits" },
    { title: "Edition" },
  ];

  const router = useRouter();
  const { id } = router.query;

  const [categories, setCategories] = useState([]);

  const categoriesService = new CategorieService();
  const productsService = new ProductService();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  useEffect(() => {
    productsService.GetProductDetail(id).then((response) => {
      // setProduct(response);
      for (const [key, value] of Object.entries(response)) {
        setValue(key, value, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    });
  }, [id]);

  useEffect(() => {
    categoriesService.GetAllCategories().then((value) => {
      console.log(value);
      setCategories(
        value.map((el) => {
          return {
            value: el.id,
            label: el.name,
          };
        })
      );
    });
  }, []);

  const saveButton = (data) => {
    data.lat = 1.2;
    data.lng = 1.1;
    data.user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).id
      : null;
    productsService.UpdateProduct(id, data).finally(() => {
      router.push(`/seller/products`);
    });
  };

  return (
    <>
      <div className="seller__header">
        <Title title="Ajouter un produit" />
        <div>
          <CustomButton onClick={handleSubmit(saveButton)}>
            Enregistrer
          </CustomButton>
        </div>
      </div>

      <div className="seller__container">
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
    </>
  );
};

index.Layout = SellerLayout;

export default index;
