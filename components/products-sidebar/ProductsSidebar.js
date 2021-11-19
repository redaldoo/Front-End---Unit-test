import Badge from "components/UI/Badge";
import TitleH2 from "components/UI/TitleH2";
import React from "react";
import ProductsSidebarStyle from "./ProductsSidebar.module.scss";
import { Range, getTrackBackground } from "react-range";
import CustomButton from "components/UI/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import FormField from "components/UI/form-field/FormField";
import FormFieldStyle from "./../../components/UI/form-field/FormField.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "store/search/searchSlice";
import Link from "next/link";

const ProductsSidebar = () => {
  const MIN = 0;
  const MAX = 1000;

  const [values, setValues] = React.useState([25, 75]);
  const categories = useSelector((state) => state.search.listCategories);
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.search.selectedCategory);

  const handleClick = (id) => {
    dispatch(setSelectedCategory(id));
  };

  return (
    <>
      <div className={ProductsSidebarStyle["shop-widget"]}>
        <div className={ProductsSidebarStyle["widget-title"]}>
          <TitleH2 title="Filtrer par Lieu" className="h2-widget h2-simple" />
        </div>
        <div className={ProductsSidebarStyle["widget-localisation"]}>
          <div className={ProductsSidebarStyle["localisation-input"]}>
            <FormField
              className={FormFieldStyle["no-margin"]}
              inputType="text"
              inputName="lieu"
              inputLabel="Rechercher par lieu"
              googleMaps={true}
            ></FormField>
            <CustomButton className="btn-min btn-blue">
              <FontAwesomeIcon icon={faSearchLocation} />
            </CustomButton>
          </div>
        </div>
      </div>

      <div className={ProductsSidebarStyle["shop-widget"]}>
        <div className={ProductsSidebarStyle["widget-title"]}>
          <TitleH2 title="Catégories" className="h2-widget h2-simple" />
        </div>
        <div className={ProductsSidebarStyle["widget-filter"]}>
          <ul>
            {categories.map((el) => (
              <li
                key={el.id}
                className={
                  categorie == el.id ? ProductsSidebarStyle["selected"] : ""
                }
              >
                <a onClick={() => handleClick(el.id)}>{el.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`${ProductsSidebarStyle["shop-widget"]} ${ProductsSidebarStyle["shop-widget--last"]}`}
      >
        <div className={ProductsSidebarStyle["widget-title"]}>
          <TitleH2 title="Prix" className="h2-widget h2-simple" />
        </div>
        <div className={ProductsSidebarStyle["widget-filter"]}>
          <Range
            values={values}
            step={1}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              setValues(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#ffa800", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "14px",
                  width: "14px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2px",
                  border: "3px solid #ffa800",
                }}
              ></div>
            )}
          />
        </div>
        <div className={ProductsSidebarStyle["widget-price"]}>
          PRIX&nbsp;:&nbsp;{values[0].toFixed(0)}&euro;&nbsp;-&nbsp;
          {values[1].toFixed(0)}&euro;
        </div>
      </div>

      {/* <div className={ProductsSidebarStyle["shop-widget"]}>
        <div className={ProductsSidebarStyle["widget-title"]}>
          <TitleH2 title="Taille" className="h2-widget h2-simple" />
        </div>
        <div className={ProductsSidebarStyle["widget-size"]}>
          <ul>
            <li>
              <a href="#">S</a>
            </li>
            <li>
              <a href="#">M</a>
            </li>
            <li>
              <a href="#">L</a>
            </li>
            <li>
              <a href="#">XL</a>
            </li>
          </ul>
        </div>

        <div className={ProductsSidebarStyle["widget-separator"]}></div>

        <div className={ProductsSidebarStyle["widget-title"]}>
          <TitleH2 title="Etat" className="h2-widget h2-simple" />
        </div>
        <div className={ProductsSidebarStyle["widget-filter"]}>
          <ul>
            <li>
              <a href="#">Neuf avec etiquette</a>
            </li>
            <li>
              <a href="#">Jamais porté</a>
            </li>
            <li>
              <a href="#">En bon état</a>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default ProductsSidebar;
