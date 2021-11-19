/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Logo = ({ white }) => {
  return (
    <>
      {white ? (
        <img src="/assets/images/icons/logo-white.svg" className="logo" />
      ) : (
        <img src="/assets/images/icons/logo.svg" className="logo" />
      )}

      <style jsx>
        {`
          @import "./../../styles/helpers/variables";

          .logo {
            height: 32px;

            @include isDesktop {
              height: 44px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Logo;
