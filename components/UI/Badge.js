import React from "react";

const Badge = (props) => {
  return (
    <>
      <span>{props.children}</span>
      <style jsx>
        {`
          span {
            width: 32px;
            height: 26px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            background: #f2f1ef;
            text-align: center;
            line-height: 26px;
          }
        `}
      </style>
    </>
  );
};

export default Badge;
