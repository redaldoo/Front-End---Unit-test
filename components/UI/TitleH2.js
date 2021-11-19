import React from "react";

const TitleH2 = (props) => {
  return (
    <>
      <h2 className={`title-h2 ${props.className}`}>{props.title}</h2>

      <style jsx>{`
        @import "./../../styles/helpers/variables";

        .title-h2 {
          margin-bottom: 10px;
          letter-spacing: 1px;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          font-family: $secondaryFont;

          &--no-margin {
            margin: 0;
          }

          &--25-margin {
            margin-bottom: 25px;
          }

          &--simple {
            font-family: $mainFont;
          }

          &--widget {
            font-size: 18px;
            text-transform: uppercase;
          }

          &--home {
            font-size: 25px;

            &-part {
              font-size: 40px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default TitleH2;
