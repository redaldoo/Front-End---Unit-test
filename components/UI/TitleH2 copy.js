import React from "react";

const TitleH2 = (props) => {
  return (
    <>
      <div className={`title-container ${props.className}`}>
        <h2>{props.title}</h2>
      </div>

      <style jsx>{`
        @import "./../../styles/helpers/variables";

        .title-container {
          margin-bottom: 10px;

          h2 {
            letter-spacing: 1px;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            font-family: $secondaryFont;
          }

          &.title-container--no-margin {
            margin: 0;
          }
        }

        .h2-simple {
          h2 {
            font-family: $mainFont;
          }
        }
        .h2-widget {
          h2 {
            font-size: 18px;
            text-transform: uppercase;
          }
        }

        .h2-home {
          h2 {
            font-size: 25px;
          }
        }
      `}</style>
    </>
  );
};

export default TitleH2;
