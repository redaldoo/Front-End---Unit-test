import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterStyle from "./FooterPages.module.scss";
import Logo from "components/UI/Logo";

function FooterPages(props) {
  return (
    <>
      <footer className={FooterStyle["footer"]}>
        <div className={`${FooterStyle["footer-top"]} container no-padding`}>
          <div>
            <Logo />
          </div>
          <div className={FooterStyle["social-buttons"]}>
            <a
              href="#"
              className={`${FooterStyle["social-buttons__button"]} ${FooterStyle["social-button"]} ${FooterStyle["social-button--facebook"]}`}
            >
              <i className={`${FooterStyle["facebook"]}`}>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>

            <a
              href="#"
              className={`${FooterStyle["social-buttons__button"]} ${FooterStyle["social-button"]} ${FooterStyle["social-button--youtube"]}`}
            >
              <i className={`${FooterStyle["youtube"]}`}>
                <FontAwesomeIcon icon={faYoutube} />
              </i>
            </a>

            <a
              href="#"
              className={`${FooterStyle["social-buttons__button"]} ${FooterStyle["social-button"]} ${FooterStyle["social-button--instagram"]}`}
            >
              <i className={`${FooterStyle["instagram"]}`}>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>

            <a
              href="#"
              className={`${FooterStyle["social-buttons__button"]} ${FooterStyle["social-button"]} ${FooterStyle["social-button--twitter"]}`}
            >
              <i className={`${FooterStyle["twitter"]}`}>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </a>

            <a
              href="#"
              className={`${FooterStyle["social-buttons__button"]} ${FooterStyle["social-button"]} ${FooterStyle["social-button--google"]}`}
            >
              <i className={`${FooterStyle["google"]}`}>
                <FontAwesomeIcon icon={faGooglePlus} />
              </i>
            </a>
          </div>
        </div>
        <div className={`${FooterStyle["footer-bottom"]} container no-padding`}>
          <div className={FooterStyle["info"]}>
            <a href="" target="_blank">
              Ynov 2021 © Try & Buy
            </a>
          </div>
          <ul className={FooterStyle["links"]}>
            <li className="menu-item ">
              <a href="#"> Support</a>
            </li>
            <li className="menu-item ">
              <a href="#"> Contact Us</a>
            </li>
            <li className="menu-item ">
              <a href="#"> Disclaimer</a>
            </li>
            <li className="menu-item ">
              <a href="#"> Add more</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default FooterPages;
