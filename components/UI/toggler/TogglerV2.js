import React from "react";
import TogglerV2Style from "./TogglerV2.module.scss";

const TogglerV2 = ({ checkName, checkLeft, checkRight, setChecked }) => {
  return (
    <>
      <div className={TogglerV2Style["toggler-v2"]}>
        <input
          id="toggle-on"
          className={TogglerV2Style["toggle-left"]}
          name="toggle"
          value="false"
          type="radio"
          defaultChecked
          onClick={() => setChecked(-1)}
        />
        <label htmlFor="toggle-on" className={TogglerV2Style["toggler-v2-btn"]}>
          {checkLeft}
        </label>
        <input
          id="toggle-off"
          className={TogglerV2Style["toggle-right"]}
          name="toggle"
          value="true"
          type="radio"
          onClick={() => setChecked(1)}
        />
        <label
          htmlFor="toggle-off"
          className={TogglerV2Style["toggler-v2-btn"]}
        >
          {checkRight}
        </label>
      </div>
    </>
  );
};

export default TogglerV2;
