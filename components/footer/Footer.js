/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="pt-exebar"></div>
          <div className="container no-padding">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                <div className="widget footer_widget">
                  <h5 className="footer-title">Address</h5>
                  <div className="gem-contacts">
                    <div className="gem-contacts-item gem-contacts-address">
                      Corporate Office : Doon House, B-275(A), First floor
                      Sector-57, Shushant Lok 3 Near Hong Kong Bazzar, Gurugram
                      Pin 122001, Haryana.
                    </div>
                    <div className="gem-contacts-item gem-contacts-phone">
                      <i className="fa fa-phone" aria-hidden="true"></i> Phone:{" "}
                      <a href="">+91-9122588799</a>
                    </div>

                    <div className="gem-contacts-item gem-contacts-address mt-2">
                      Reg. Office : Doon House, D2/3, 4th Floor, Chandra Tower,
                      IDBI Bank Building Dimna Road, Mango, Jamshedpur-831012,
                      Jharkhand.
                    </div>
                    <div className="gem-contacts-item gem-contacts-phone">
                      <i className="fa fa-phone" aria-hidden="true"></i> Phone:{" "}
                      <a href="">+91 9122588799</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="widget footer_widget">
                      <h5 className="footer-title">Recent News</h5>
                      <ul className="posts  styled">
                        <li className="clearfix gem-pp-posts">
                          <div className="gem-pp-posts-text">
                            <div className="gem-pp-posts-item">
                              <a>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit.
                              </a>
                            </div>
                            <div className="gem-pp-posts-date">
                              Call +00-01234567891
                            </div>
                          </div>
                        </li>
                        <li className="clearfix gem-pp-posts">
                          <div className="gem-pp-posts-text">
                            <div className="gem-pp-posts-item">
                              <a>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit.
                              </a>
                            </div>
                            <div className="gem-pp-posts-date">
                              Call +91-9122588799
                            </div>
                          </div>
                        </li>
                        <li className="clearfix gem-pp-posts">
                          <div className="gem-pp-posts-text">
                            <div className="gem-pp-posts-item">
                              <a>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit
                              </a>
                            </div>
                            <div className="gem-pp-posts-date">
                              Call +91-9122588799
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="widget">
                      <h5 className="footer-title">Email Us</h5>
                      <div className="textwidget">
                        <div
                          role="form"
                          className="wpcf7"
                          id="wpcf7-f4-o1"
                          lang="en-US"
                          dir="ltr"
                        >
                          <form method="post" className="wpcf7-form">
                            <div className="contact-form-footer">
                              <p>
                                <span className="wpcf7-form-control-wrap your-first-name">
                                  <input
                                    type="text"
                                    name="your-first-name"
                                    size="40"
                                    className="wpcf7-form-control wpcf7-text"
                                    aria-invalid="false"
                                    placeholder="Your name"
                                  />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap your-email_1">
                                  <input
                                    type="email"
                                    name="your-email_1"
                                    size="40"
                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email"
                                    aria-invalid="false"
                                    placeholder="Your email"
                                  />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap your-message">
                                  <textarea
                                    name="your-message"
                                    cols="40"
                                    rows="10"
                                    className="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                    placeholder="Your message"
                                  ></textarea>
                                </span>
                              </p>
                              <div>
                                <input
                                  type="submit"
                                  value="Send"
                                  className="wpcf7-form-control wpcf7-submit"
                                />
                                <span className="ajax-loader"></span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                <div className="widget widget_gallery gallery-grid-4">
                  <h5 className="footer-title">Our Gallery</h5>
                  <ul className="magnific-image">
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a className="magnific-anchor">
                        <img
                          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                          alt=""
                        ></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container no-padding">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-site-info">
                  Ynov 2021 ©{" "}
                  <a href="" target="_blank">
                    Try & Buy{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <nav
                  id="footer-navigation"
                  className="site-navigation footer-navigation centered-box"
                  role="navigation"
                >
                  <ul
                    id="footer-menu"
                    className="nav-menu styled clearfix inline-inside"
                  >
                    <li
                      id="menu-item-26"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"
                    >
                      <a href="#">Support</a>
                    </li>
                    <li
                      id="menu-item-27"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"
                    >
                      <a href="#">Contact Us</a>
                    </li>
                    <li
                      id="menu-item-28"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"
                    >
                      <a href="#">Disclaimer</a>
                    </li>
                    <li
                      id="menu-item-29"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"
                    >
                      <a href="#">Add more</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-3">
                <div id="footer-socials">
                  <div className="socials inline-inside socials-colored">
                    <a
                      href="#"
                      target="_blank"
                      title="Facebook"
                      className="socials-item"
                    >
                      <i className="fab  facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                      </i>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      title="Twitter"
                      className="socials-item"
                    >
                      <i className="fab twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                      </i>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      title="Instagram"
                      className="socials-item"
                    >
                      <i className="fab instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                      </i>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      title="YouTube"
                      className="socials-item"
                    >
                      <i className="fab youtube">
                        <FontAwesomeIcon icon={faYoutube} />
                      </i>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      title="Telegram"
                      className="socials-item"
                    >
                      <i className="fab telegram">
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .page-wrapper {
            position: absolute;
            bottom: 0;
            width: 100%;
            z-index: 11111;
          }

          footer p,
          footer strong,
          footer b,
          footer {
            color: #a6a6a6;
          }

          .footer-top {
            background: white;
            background-size: cover;
            background-position: center;
            padding: 0 0 20px;
            font-family: arial;
            padding-top: 30px;
          }

          .footer-top,
          .footer-bottom {
            background-color: gray;
          }

          .footer-bottom {
            padding: 15px 0;
            border-top: 1px solid #313646;
            background-color: #181828 !important;
            color: #b0b0b0;
            font-family: serif;
            // }
            color: #99a9b5;
            padding-top: 15px;
          }

          .footer-site-info {
            font-size: 92.86%;
          }
          #footer-navigation,
          #footer-navigation li a:hover,
          .custom-footer,
          .custom-footer li a:hover {
            color: white;
          }

          #footer-navigation,
          #footer-navigation li a,
          .custom-footer,
          .custom-footer li a {
            color: #white;
            padding-top: 15px;
          }

          .footer-bottom ul {
            margin: 0;
          }
          .inline-inside {
            font-size: 0;
            line-height: 0;
          }
          .clearfix:after,
          .clearfix:before {
            content: "";
            display: table;
          }
          #footer-menu li {
            display: inline-block;
            padding: 0 21px;
            position: relative;
            line-height: 1;
          }

          #footer-navigation,
          #footer-navigation li a,
          .custom-footer,
          .custom-footer li a {
            color: #99a9b5;
            padding-top: 15px;
          }

          #footer-navigation,
          #footer-navigation li a,
          .custom-footer,
          .custom-footer li a {
            color: #99a9b5;
            padding-top: 15px;
          }
          #footer-menu li + li:before {
            content: "";
            width: 0;
            height: 100%;
            position: absolute;
            left: -1px;
            top: 0;
            font-size: 0;
            border-left: 1px solid #232234;
            border-right: 1px solid #333146;
          }

          navigation li a,
          .custom-footer,
          .custom-footer li a {
            color: #99a9b5;
            padding-top: 15px;
          }

          #footer-socials {
            text-align: right;
          }

          #footer-socials .socials {
            text-align: right;
            margin: 0 -7px;
            display: inline-block;
            vertical-align: middle;
          }

          a.socials-item {
            display: inline-block;
            vertical-align: top;
            text-align: center;
            -o-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            margin: 0 5px;
            line-height: 16px;
            padding: 10px;
            border-radius: 50%;
            background-color: #141421;
            border: 1px solid #2e2e4c;
            box-shadow: 3px 9px 16px rgb(0, 0, 0, 0.4),
              -3px -3px 10px rgba(255, 255, 255, 0.06),
              inset 14px 14px 26px rgb(0, 0, 0, 0.3),
              inset -3px -3px 15px rgba(255, 255, 255, 0.05);
          }

          .socials-item i {
            display: inline-block;
            font-weight: normal;
            width: 1em;
            height: 1em;
            line-height: 1;
            font-size: 16px;
            text-align: center;
            vertical-align: top;
            font-feature-settings: normal;
            font-kerning: auto;
            font-language-override: normal;
            font-size-adjust: none;
            font-stretch: normal;
            font-style: normal;
            font-synthesis: weight style;
            font-variant: normal;
            font-weight: normal;
            text-rendering: auto;
          }

          .facebook {
            color: #4e64b5;
          }

          .twitter {
            color: #00aced;
          }
          .instagram {
            color: #9a8f62;
          }
          .youtube {
            color: #c82929;
          }

          .telegram {
            color: #2ca5e0;
          }

          a.socials-item:hover {
            box-shadow: 0 0px 20px rgba(84, 1, 74, 0.7);
            border-color: rgba(255, 6, 224, 0.61);
            background: linear-gradient(
              to right,
              rgba(255, 9, 9, 0.12941176470588237),
              #c000ffb5,
              rgba(255, 0, 94, 0.14)
            );
          }

          .footer-bottom a:hover {
            color: white;
          }

          footer p,
          footer li {
            font-size: 15px;
            line-height: 22px;
          }

          .widget {
            margin-bottom: 50px;
          }

          .footer-title {
            margin-bottom: 40px;
            color: #fff;
            font-weight: 500;
            text-transform: capitalize;
            padding-bottom: 15px;
            font-size: 16px;
            position: relative;
          }

          .footer-title:after {
            width: 50px;
            background: #fff;
            opacity: 0.2;
            height: 1px;
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .gem-contacts-item {
            padding-top: 10px;
            font-size: 15px;
            color: white;
          }

          .gem-contacts-item i {
            padding-right: 10px;
          }

          .gem-pp-posts-text {
            color: white;
          }

          footer .widget ul {
            list-style: none;
            margin-top: 5px;
          }

          .posts li {
            border-bottom: 1px solid #393d50;
            padding-bottom: 12px;
            padding-top: 6px;
          }

          footer p,
          footer li {
            font-size: 15px;
            line-height: 22px;
            color: white;
          }

          .gem-pp-posts-date {
            color: #00bcd4;
            font-size: 89.5%;
            color: white;
          }

          footer p {
            line-height: 24px;
            margin-bottom: 10px;
            font-size: 15px;
          }

          .wpcf7-form-control-wrap .wpcf7-form-control {
            padding: 7px !important;
            width: 100%;
          }

          .wpcf7-form-control-wrap input {
            background: #white;
            overflow: hidden;
            border: 1px solid #2e344d;
            background-color: #1c1f2f;
            box-shadow: 10px 10px 36px rgb(0, 0, 0, 0.5),
              -13px -13px 23px rgba(255, 255, 255, 0.03);
            border-radius: 5px;
            transition: all 0.3s ease-in-out 0s;
          }

          .wpcf7-form-control-wrap input:hover {
            background-color: transparent;
            box-shadow: 10px 10px 36px rgb(0, 0, 0, 0.5),
              -13px -13px 23px rgba(255, 255, 255, 0.03),
              inset 14px 14px 70px rgb(0, 0, 0, 0.2),
              inset -15px -15px 30px rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.2);
            color: white;
          }

          .wpcf7 .wpcf7-form .contact-form-footer textarea {
            height: 160px;
            width: 100%;
          }

          .wpcf7-form-control-wrap textarea:hover {
            background-color: transparent;
            box-shadow: 10px 10px 36px rgb(0, 0, 0, 0.5),
              -13px -13px 23px rgba(255, 255, 255, 0.03),
              inset 14px 14px 70px rgb(0, 0, 0, 0.2),
              inset -15px -15px 30px rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.2);
            color: white;
          }

          .wpcf7-form-control-wrap textarea {
            background: #white;
            overflow: hidden;
            border: 1px solid #2e344d;
            background-color: #1c1f2f;
            box-shadow: 10px 10px 36px rgb(0, 0, 0, 0.5),
              -13px -13px 23px rgba(255, 255, 255, 0.03);
            border-radius: 5px;
            transition: all 0.3s ease-in-out 0s;
          }

          textarea {
            overflow: auto;
            resize: vertical;
          }

          .wpcf7 .wpcf7-form .contact-form-footer .wpcf7-submit {
            width: 100%;
            padding: 11px;
            margin: 0;
            line-height: 0;
          }
          .wpcf7-form .contact-form-footer .wpcf7-submit {
            background-color: #394050;
            color: #white;
            border: none;
            cursor: pointer;
            padding: 15px 40px;
            font-size: 14px;
            font-weight: 400;
            transition: all 0.5s;
            letter-spacing: 2px;
            color: rgba(255, 255, 255, 0.5);
            box-shadow: none;
            text-transform: uppercase;
            outline: none !important;
            background-color: #1c1f2f;
            border-radius: 5px;
            min-width: 140px;
            /* box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04); */
            box-shadow: 3px 9px 16px rgb(0, 0, 0, 0.4),
              -3px -3px 10px rgba(255, 255, 255, 0.06),
              inset 14px 14px 26px rgb(0, 0, 0, 0.3),
              inset -3px -3px 15px rgba(255, 255, 255, 0.05);
            border-width: 1px 0px 0px 1px;
            border-style: solid;
            border-color: #2e344d;
            transition: all 0.3s ease-in-out 0s;
          }

          .wpcf7-form input[type="submit"] {
            height: 40px;
            line-height: 21px;
            padding: 10px 40px;
            font-size: 14px;
          }

          .posts li a {
            color: #99a9b5;
          }

          .wpcf7-form .contact-form-footer .wpcf7-submit:hover {
            box-shadow: 0 0px 20px rgba(84, 1, 74, 0.7);
            border-color: rgba(255, 6, 224, 0.61);
            background: linear-gradient(
              to right,
              rgba(255, 9, 9, 0.12941176470588237),
              #c000ffb5,
              rgba(255, 0, 94, 0.14)
            );
            color: white;
          }

          img {
            border-style: none;
            height: auto;
            max-width: 100%;
            vertical-align: middle;
          }
          .widget_gallery a {
            display: inline-block;
          }
          footer .widget ul {
            list-style: none;
            margin-top: 5px;
          }
          .widget_gallery ul {
            padding-left: 0;
            display: table;
          }

          .widget_gallery li {
            display: inline-block;
            width: 33.33%;
            float: left;
            transition: all 0.5s;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -o-transition: all 0.5s;
            padding: 2px;
          }

          .widget_gallery.gallery-grid-4 li {
            width: 30%;
          }

          #waterdrop {
            height: 30px;
          }

          #waterdrop canvas {
            bottom: -70px !important;
          }

          .footer-site-info {
            padding-top: 10px;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
