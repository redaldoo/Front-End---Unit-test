import React from "react";
import TogglerStyle from "./Toggler.module.scss";

const Toggler = ({ label, reference }) => {
  return (
    <>
      <div className={TogglerStyle["toggler__container"]}>
        <input type="checkbox" name="toggle" id="toggle" {...reference} />
        <label htmlFor="toggle"></label>
      </div>
      <label>{label}</label>
    </>
  );
};

export default Toggler;
