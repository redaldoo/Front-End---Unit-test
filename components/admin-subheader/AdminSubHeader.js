import React from "react";
import AdminSubHeaderStyle from "./AdminSubHeader.module.scss";
import Link from "next/link";
import Title from "components/UI/Title";
import TitleH2 from "components/UI/TitleH2";
import CustomButton from "components/UI/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const AdminSubHeader = (props) => {
  const router = useRouter();
  return (
    <>
      <div className={AdminSubHeaderStyle["subheader"]}>
        <div className={AdminSubHeaderStyle["subheader__container"]}>
          <div className={AdminSubHeaderStyle["subheader__left"]}>
            {props.showBack ? (
              <>
                <div className="subheader__back">
                  <CustomButton
                    className="btn-min btn-transparent btn-no-border"
                    onClick={props.onClickBack}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </CustomButton>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className={AdminSubHeaderStyle["titles"]}>
              {props.breadcrumbs ? (
                <>
                  <ul className={AdminSubHeaderStyle["breadcrumb"]}>
                    {props.breadcrumbs.map((breadcrumb, index) => (
                      <li
                        className={`${AdminSubHeaderStyle["breadcrumb__item"]}`}
                        key={index}
                      >
                        {breadcrumb.link ? (
                          <Link href={breadcrumb.link}>
                            <a>
                              {breadcrumb.icon ? (
                                <>
                                  <FontAwesomeIcon icon={breadcrumb.icon} />
                                </>
                              ) : (
                                <></>
                              )}
                              <span
                                className={
                                  breadcrumb.icon
                                    ? AdminSubHeaderStyle["span-icon"]
                                    : ""
                                }
                              >
                                {breadcrumb.anchor}
                              </span>
                            </a>
                          </Link>
                        ) : (
                          <>
                            {breadcrumb.icon ? (
                              <>
                                <FontAwesomeIcon icon={breadcrumb.icon} />
                              </>
                            ) : (
                              <></>
                            )}
                            <span
                              className={
                                breadcrumb.icon
                                  ? AdminSubHeaderStyle["span-icon"]
                                  : ""
                              }
                            >
                              {breadcrumb.anchor}
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <></>
              )}
              <Title title={props.titleValue} />
            </div>
          </div>
          {props.rightBtn ? (
            <div className={AdminSubHeaderStyle["subheader__right"]}>
              <CustomButton className="btn-black" onClick={props.onClickRight}>
                {props.rightBtn}
              </CustomButton>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminSubHeader;
