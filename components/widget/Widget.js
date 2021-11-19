import TitleH2 from "components/UI/TitleH2";
import React from "react";
import WidgetStyle from "./Widget.module.scss";

const Widget = (props) => {
  return (
    <div className={WidgetStyle["widget"]}>
      {props.title ? (
        <div className={WidgetStyle["widget__header"]}>
          <TitleH2
            className="h2-widget title-container--no-margin"
            title={props.title}
          />
        </div>
      ) : (
        <></>
      )}
      <div
        className={`${WidgetStyle["widget__content"]} ${
          props.title ? "" : WidgetStyle["widget__content--no-pt"]
        }`}
      >
        {props.children}
      </div>
      <div className={WidgetStyle["widget__footer"]}>
        <div className={WidgetStyle["footer__left"]}>{props.footerLeft}</div>
        <div className={WidgetStyle["footer__right"]}>{props.footerRight}</div>
        {props.footerCenter ? (
          <div className={WidgetStyle["footer__center"]}>
            {props.footerCenter}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Widget;
