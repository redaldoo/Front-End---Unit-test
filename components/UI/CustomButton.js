import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CustomButton = ({
  typeButton,
  hrefButton,
  className,
  children,
  onClick,
}) => {
  return (
    <>
      <div className="button-container">
        {typeButton == "link" ? (
          <Link href={hrefButton}>
            <a className={`btn ${className}`}>{children}</a>
          </Link>
        ) : (
          <button
            className={`btn ${className}`}
            onClick={onClick}
            type="button"
          >
            {children}
          </button>
        )}
      </div>

      <style jsx>{`
        @import "./../../styles/helpers/variables";

        .button-container {
          a.btn {
            display: inline-block;
            font-size: 14px;
            line-height: 1;
          }

          .btn {
            background-color: $whiteColor;
            color: $darkGrayColor;
            border: 1px solid $darkGrayColor;
            border-radius: 25px;
            opacity: 1;
            padding: 10px 20px;
            min-width: 100px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
            transition: all 0.3s;
            cursor: pointer;

            &:hover {
              background-color: $darkGrayColor;
              color: $whiteColor;
            }

            &-no-border {
              border-width: 0px;

              &:hover {
                background-color: transparent;
                text-decoration: underline;
                color: $darkGrayColor;
              }
            }

            &-no-padding {
              padding: 0;
            }

            &-h-large {
              padding-top: 12px;
              padding-bottom: 12px;
            }

            &-full {
              width: 100%;
            }

            &-lowercase {
              text-transform: initial;
            }

            &-no-spacing {
              letter-spacing: initial;
            }

            &-min {
              min-width: 0px;
            }

            &-transparent {
              border-color: $darkGrayColor;
              color: $darkGrayColor;
              background-color: transparent;

              &:hover {
                border-color: transparent;
                color: $darkGrayColor;
                background-color: transparent;
              }
            }

            &-blue {
              border-color: $blueColor;
              color: $whiteColor;
              background-color: $blueColor;

              &:hover {
                color: $blueColor;
                background-color: $whiteColor;
              }
            }

            &-black {
              color: $whiteColor;
              background-color: $darkGrayColor;

              &:hover {
                color: $darkGrayColor;
                background-color: $whiteColor;
              }
            }

            &-white {
              background-color: #fff;
              color: $darkGrayColor;
            }
            &-large {
              background-color: #fff;
              color: $darkGrayColor;
              width: auto;
              height: auto;
              font-size: 20px;

              float: right;
              margin-right: 30px;
              margin-top: 1px;
              border-style: none;
              border-width: 1px;
            }

            &-large-modal {
              background-color: #79b52c;
              color: white;
              font-size: 8px;
              position: absolute;
              top: 0px;
              right: 0px;
              width: 30px;
              padding: 0px;
              height: 30px;
              min-width: 0px;
              border-radius: 0px;
              border: none;
              letter-spacing: 0;
            }

            &-white {
              background-color: #fff;
              color: $darkGrayColor;
              width: 100px;
              height: 35px;
              font-size: 10px;
              letter-spacing: 2.52px;
              float: right;
              margin-right: 30px;
              margin-top: 10px;
              border-radius: 20px;
              border-style: none;
              border-width: 1px;
              &:hover {
                background-color: $darkGrayColor;
                color: #fff;
              }

              &-submit {
                background-color: #fff;
                color: $darkGrayColor;
                width: 100px;
                height: 35px;
                font-size: 10px;
                letter-spacing: 2.52px;
                float: left;
                margin-right: 30px;
                margin-top: 10px;
                border-radius: 15px;
                border-style: none;
                border-width: 1px;
                &:hover {
                  background-color: $darkGrayColor;
                  color: #fff;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default CustomButton;
