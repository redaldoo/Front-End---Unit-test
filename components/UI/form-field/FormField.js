import React from "react";
import FormFieldStyle from "./FormField.module.scss";
import { usePlacesWidget } from "react-google-autocomplete";
// import Select from "react-dropdown-select";
import { Controller } from "react-hook-form";
import Select from "react-select";

const FormField = ({
  className,
  inputType,
  inputName,
  inputLabel,
  reference,
  children,
  googleMaps,
  handleGoogleMaps,
  iconSet,
  iconEmplacement,
  iconValue,
  multiSelect,
  control,
}) => {
  const googleWidget = usePlacesWidget({
    apiKey: "AIzaSyC5jRVUL9RanfNv1z2Xv4iUqqyGz1vFuwU",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      // types: ["(regions)"],
      types: ["address"],
      componentRestrictions: { country: "fr" },
    },
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "#fff" : "#424242",
      padding: 10,
      backgroundColor: state.isSelected ? "#424242" : "#fff",
    }),
  };

  return (
    <>
      <div
        className={`${className} ${
          inputType == "select" ? "" : FormFieldStyle["field"]
        }`}
      >
        {inputType == "textarea" ? (
          <textarea
            name={inputName}
            id={inputName}
            placeholder={inputLabel}
            {...reference}
            autoComplete="off"
            rows="5"
          ></textarea>
        ) : inputType == "select" ? (
          <Controller
            control={control}
            name={inputName}
            {...reference}
            defaultValue={multiSelect.defaultInputValue}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                styles={customStyles}
                id={inputName}
                placeholder={inputLabel}
                value={multiSelect.options.filter((c) => value == c.value)}
                onChange={(val) => onChange(val.value)}
                inputRef={ref}
                name={inputName}
                options={multiSelect.options}
              />
            )}
          />
        ) : googleMaps ? (
          <input
            type={inputType}
            name={inputName}
            id={inputName}
            placeholder={inputLabel}
            {...reference}
            ref={googleWidget.ref}
            autoComplete="off"
          />
        ) : (
          <input
            type={inputType}
            name={inputName}
            id={inputName}
            placeholder={inputLabel}
            {...reference}
            autoComplete="off"
          />
        )}

        {inputType == "select" ? (
          <></>
        ) : (
          <label htmlFor={inputName}>{inputLabel}</label>
        )}

        {children ? (
          <div className={FormFieldStyle["errors"]}>{children}</div>
        ) : (
          <></>
        )}
      </div>

      <style jsx global>{`
        .css-1s2u09g-control,
        .css-1pahdxg-control {
          height: 3.125rem !important;
          border-radius: 15px !important;
          box-shadow: none;
          transition: all 0.3s;
          padding: 0 !important;
          padding-right: 0.75rem !important;

          &:hover {
            border: 1px solid #0000002b !important;
          }

          &:focus-within {
            outline: none !important;
            box-shadow: 0 0 0 0.2rem #fed700b8 !important;
            border: 1px solid #0000002b !important;
          }

          input {
            border: none !important;
            &:not(:placeholder-shown) {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
          }
        }
      `}</style>
    </>
  );
};

export default FormField;
