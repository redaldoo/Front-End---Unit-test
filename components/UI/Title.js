import React from "react";

const Title = (props) => {
  return (
    <div className={`${props.className} title__page`}>
      <h1>{props.title}</h1>

      <style jsx>{`
        .title__page {
          font-weight: 600;
          font-size: 28px;

          h1 {
            font-size: inherit;
            font-weight: inherit;
            /* margin-top: -5px; */
            /* line-height: 28px; */
          }

          &.title__bold {
            font-weight: 700;
          }

          &.title__lg {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default Title;
