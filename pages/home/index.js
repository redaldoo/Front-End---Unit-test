/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
      <style jsx>
        {`
          .slick-next {
            right: 0px;
          }

          .slick-next:before {
            color: black;
          }
        `}
      </style>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
      <style jsx>
        {`
          .slick-prev {
            left: 0px;
          }

          .slick-prev:before {
            color: black;
          }
        `}
      </style>
    </>
  );
}

export default function HomePage() {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          marginBlock: "-60px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  var setting = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
  };
  var setings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slide hi-slide">
        <h1 className="h1">Products made</h1>
        <h1 className="text">Right for you</h1>
        <Slider {...settings} className="with-arrows">
          <li>
            <img
              src="https://images.pexels.com/photos/7676006/pexels-photo-7676006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
          </li>

          <li>
            <img
              src="https://images.pexels.com/photos/7691354/pexels-photo-7691354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
          </li>

          <li>
            <img
              src="https://images.pexels.com/photos/9979107/pexels-photo-9979107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
          </li>

          <li>
            <img
              src="https://images.pexels.com/photos/7691376/pexels-photo-7691376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
          </li>

          <li>
            <img
              src="https://images.pexels.com/photos/7480090/pexels-photo-7480090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI97-VmxXD1-tp3GHL04Z5OkfJ8A4-ZvUJg&usqp=CAU"
              alt=""
            ></img>
          </li>

          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI97-VmxXD1-tp3GHL04Z5OkfJ8A4-ZvUJg&usqp=CAU"
              alt=""
            ></img>
          </li>
        </Slider>
        <a href="#" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">READ MORE</span>
              <span className="link-title2 title">READ MORE</span>
            </div>
          </span>
          <div className="link-icon">
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </a>
      </div>
      <div className="card-one">
        <div className="container">
          <div id="col">
            <div>
              <p className="titre-one">For buyers</p>
              <div className="col-3">
                <p className="titre-two">1.</p>
                <h1 className="text-h1">
                  Choose something to buy in your area
                </h1>
                <p className="titre-two">2.</p>
                <h1 className="text-h1">
                  Try it & keep it as long as you want{" "}
                </h1>
                <p className="titre-two">3.</p>
                <h1 className="text-h1">
                  But it & enjoy for life. team Try&Buy
                </h1>
              </div>
              <p className="description">
                Cuius acerbitati uxor grave accesserat incentivum, germanitate
                Augusti turgida supra modum, quam Hannibaliano regi fratris
                filio antehac Constantinus iunxerat pater, Megaera quaedam
                mortalis, inflammatrix saevientis adsidua, humani cruoris avida
                nihil mitius quam maritus; qui paulatim eruditiores facti
                processu temporis ad nocendum per clandestinos versutosque
                rumigerulos conpertis leviter addere quaedam male suetos falsa
                et placentia sibi discentes, adfectati regni vel artium
                nefandarum calumnias insontibus adfligebant.
              </p>

              <div id="col">
                <button className="button-register">Register</button>
                <a href="#" className="link">
                  <span>
                    <div className="link-container">
                      <span className="link-title1 title">
                        More information
                      </span>
                      <span className="link-title2 title"></span>
                    </div>
                  </span>
                  <div className="link-icon">
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <p>
              <img
                className="image-one"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI97-VmxXD1-tp3GHL04Z5OkfJ8A4-ZvUJg&usqp=CAU"
                alt=""
              ></img>
            </p>
          </div>
        </div>
      </div>

      <div className="card-one">
        <div className="container">
          <div id="col">
            <p>
              <img
                className="image-one"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI97-VmxXD1-tp3GHL04Z5OkfJ8A4-ZvUJg&usqp=CAU"
                alt=""
              ></img>
            </p>

            <div>
              <p className="titre-one">For buyers</p>
              <div className="col-3">
                <p className="titre-two">1.</p>
                <h1 className="text-h1">
                  Choose something to buy in your area
                </h1>
                <p className="titre-two">2.</p>
                <h1 className="text-h1">
                  Try it & keep it as long as you want{" "}
                </h1>
                <p className="titre-two">3.</p>
                <h1 className="text-h1">
                  But it & enjoy for life. team Try&Buy
                </h1>
              </div>
              <p className="description">
                Cuius acerbitati uxor grave accesserat incentivum, germanitate
                Augusti turgida supra modum, quam Hannibaliano regi fratris
                filio antehac Constantinus iunxerat pater, Megaera quaedam
                mortalis, inflammatrix saevientis adsidua, humani cruoris avida
                nihil mitius quam maritus; qui paulatim eruditiores facti
                processu temporis ad nocendum per clandestinos versutosque
                rumigerulos conpertis leviter addere quaedam male suetos falsa
                et placentia sibi discentes, adfectati regni vel artium
                nefandarum calumnias insontibus adfligebant.
              </p>

              <div id="col">
                <button className="button-register">Register</button>
                <a href="#" className="link">
                  <span>
                    <div className="link-container">
                      <span className="link-title1 title">
                        More information
                      </span>
                      <span className="link-title2 title"></span>
                    </div>
                  </span>
                  <div className="link-icon">
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide hi-slide">
        <h1 className="h1">Our services</h1>
        <h1 className="text">Right for you</h1>
        <Slider {...setting} className="with-arrows-two">
          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">DELIVERY</p>
            <p className="resume-des">
              Cuius acerbitati uxor grave accesserat incentivum, germanitate
              Augusti turgida supra modum, quam Hannibaliano Cuius acerbitati
              uxor grave accesserat incentivum, germanitate Augusti turgida
              supra modum, quam Hannibaliano
            </p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwmTnyvNNL55sVlHthjIjOQHmcelSxQcKkg&usqp=CAU"
              alt=""
            ></img>
            <p className="resume">CATEGORIES</p>
            <p className="resume-des">
              Cuius acerbitati uxor grave accesserat incentivum, germanitate
              Augusti turgida supra modum, quam Hannibaliano Cuius acerbitati
              uxor grave accesserat incentivum, germanitate Augusti turgida
              supra modum, quam Hannibaliano
            </p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://media.istockphoto.com/photos/city-map-with-pin-pointers-3d-rendering-image-picture-id1189064346?s=612x612"
              alt=""
            ></img>
            <p className="resume">GEOLOC </p>
            <p className="resume-des">
              Cuius acerbitati uxor grave accesserat incentivum, germanitate
              Augusti turgida supra modum, quam Hannibaliano Cuius acerbitati
              uxor grave accesserat incentivum, germanitate Augusti turgida
              supra modum, quam Hannibaliano
            </p>
          </li>
        </Slider>
      </div>

      <div className="slide hi-slides">
        <h1 className="h1">Our customers</h1>
        <h1 className="text">Trust us</h1>
        <Slider {...setings}>
          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">RIDA</p>
            <p className="resume-des"> Cuius acerbitati uxor grave</p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">NASSIR </p>
            <p className="resume-des"> Cuius acerbitati uxor grave</p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/1852083/pexels-photo-1852083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">MIRADO</p>
            <p className="resume-des"> Cuius acerbitati uxor grave</p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/10031324/pexels-photo-10031324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">CYLIA </p>
            <p className="resume-des"> Cuius acerbitati uxor grave</p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/10029378/pexels-photo-10029378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">CHAIMA </p>
            <p className="resume-des"> Cuius acerbitati uxor grave</p>
          </li>

          <li>
            <img
              className="img-circle"
              src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            ></img>
            <p className="resume">JOE </p>
            <p className="resume-des"> Cuius acerbitati uxor grave</p>
          </li>
        </Slider>
      </div>

      <div className="description-card">
        <div id="container">
          <h2 className="h1-subscribe">Subscribe</h2>
          <p className="text">Stay updated with our newsletter</p>
          <div id="col-2">
            <input type="email" placeholder="Type your Email" required />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          .hi-slide {
            position: relative;
            height: 700px;
            background-size: 50%;
            background: #f4f1ef 0% 0% no-repeat padding-box;
            opacity: 1;
            flex-direction: column;
            justify-content: center;
            display: flex;
          }

          .slick-dots li button {
            :before {
              background-color: white;
              border-color: black;

              border: 3px solid #707070;
              border-radius: 50%;
            }
          }

          .slick-dots li.slick-active button:before {
            opacity: 1;
            color: black !important;
            background-color: black;
          }
          .slick-dots li button:before {
            color: white;
          }

          .description-card {
            background: url("https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
              no-repeat padding-box;
            background-size: 100%;

            position: relative;
            height: 700px;
            background: #f4f1ef 0% 0% no-repeat padding-box;
            opacity: 1;
            flex-direction: column;
            justify-content: center;
            display: flex;
          }
          #container {
            background: url("https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
              no-repeat padding-box;
            background-size: 100%;
            box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
            text-align: center;
            border-radius: 5px;
            margin: 3em auto;

            height: 400px;
            width: 580px;
            padding: 1em;

            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
          }

          #container input {
            width: 210px;
            display: inline-block;
            text-align: center;
            border-radius: 7px;
            background: #eee;
            padding: 1em 2em;
            outline: none;
            border: none;
            color: #222;
            transition: 0.3s linear;
          }
          ::placeholder {
            color: #999;
          }
          #container input:focus {
            background: rgba(0, 0, 333, 0.1);
          }

          #container button {
            background-image: linear-gradient(
              to left,
              rgba(255, 146, 202, 0.75) 0%,
              rgba(145, 149, 251, 0.86) 100%
            );
            box-shadow: 0 9px 25px -5px #df91fb;
            font-family: "Abel", sans-serif;
            padding: 0.5em 1.9em;
            margin: 2.3em 0 0 0;
            border-radius: 7px;
            font-size: 1.4em;
            cursor: pointer;
            color: #ffffff;
            font-size: 1em;
            outline: none;
            border: none;
            transition: 0.3s linear;
          }
          #container button:hover {
            transform: translatey(2px);
          }
          #container button:active {
            transform: translatey(5px);
          }

          .hi-slides {
            position: relative;
            height: 700px;
            background-size: 50%;
            background: white 0% 0% no-repeat padding-box;
            opacity: 1;
            flex-direction: column;
            justify-content: center;
            display: flex;
          }

          .img-circle {
            border-radius: 50% !important	;
            width: 150px !important;
            height: 150px !important;
          }

          .resume {
            text-align: center;
            font: normal normal 600 16px/19px Raleway;
            letter-spacing: 3.2px;
            color: #6f7070;
            opacity: 1;
            margin-block: 20px;
          }

          .resume-des {
            text-align: center;
            font: normal normal 600 14px/24px Raleway;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-block: 20px;
            width: auto;
          }

          .subscribe {
            background: url("https://images.pexels.com/photos/4464816/pexels-photo-4464816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
              no-repeat;
            background-size: 100%;
            height: 500px;
            opacity: 1;
          }

          .subscribe-card {
            background: #ffffff 0% 0% no-repeat padding-box;
            opacity: 1;
            height: 400px;
            width: 800px;
            margin: 20px 20px 20px 20px;
          }

          .button-register {
            background: #ffffff 0% 0% no-repeat padding-box;
            border: 1px solid #707070;
            border-radius: 15px;
            opacity: 1;
            width: 108px;
            height: 30px;
            top: 1958px;
            left: 139px;
          }
          .titre-one {
            text-align: left;
            font: italic normal 900 46px/62px Playfair Display;
            letter-spacing: 0px;
            color: #6f7070;
            opacity: 1;
          }
          .titre-two {
            text-align: left;
            font: normal normal bold 45px/60px Playfair Display;
            letter-spacing: 9px;
            color: #6f7070;
            opacity: 1;
            text-decoration: underline gray;
          }

          .text-h1 {
            text-align: left;
            font: italic normal bold 16px/21px Playfair Display;
            letter-spacing: 0px;
            color: #6f7070;
            opacity: 1;
          }

          .description {
            text-align: left;
            font: normal normal 400 14px/24px Raleway;
            font-family: Geneva, Arial, Helvetica, sans-serif;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-block: 20px;
          }

          .card-one {
            position: relative;
            height: 700px;
            background-size: 50%;
            background: white 0% 0% no-repeat padding-box;
            opacity: 1;
            flex-direction: column;
            justify-content: center;
            display: flex;
          }

          .image-one {
            height: 400%;
            width: 200%;
          }

          #col {
            column-count: 2;
          }

          .col-3 {
            column-count: 3;
            justify-content: spacebetween;
            width: 80%;
          }
          .p {
            margin-bottom: 2rem;
          }

          .with-arrows {
            .slick-list {
              width: calc(100% - 60px);
              margin: auto;
            }
          }

          .with-arrows-two {
            .slick-list {
              width: calc(100% - 20px);
              margin: auto;
            }
          }
          .list-item-slider {
            padding: 10px;
          }
          .text {
            font: italic normal bold 25px/1px Playfair Display;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-left: auto;
            margin-right: auto;
            margin-block: 5px;
            margin-bottom: 5.5rem;
          }

          .h1 {
            margin-top: 5px;
            margin-left: auto;
            margin-right: auto;
            width: 241px;
            font: normal normal bold 32px/1px Raleway;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-bottom: 2.5rem;
          }

          .h1-subscribe {
            margin-top: 30px;
            margin-left: auto;
            margin-right: auto;
            width: 300px;
            font: normal normal bold 32px/1px Raleway;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-bottom: 2.5rem;
          }

          .li {
            height: 100%;
            width: 100%;
            padding: 10px;
          }

          .slick-slide img {
            margin: auto;
            height: 300px;
            width: 300px;
            object-fit: cover;
          }

          .link {
            height: 30px;
            align-items: center;
            color: #000;
            text-decoration: none;
            display: flex;
            justify-content: flex-end;
          }

          .mask {
            position: relative;
            padding: 0;
            height: 20px;
            overflow: hidden;
          }

          .link-container {
            transition: transform 0.4s ease;
          }

          .title {
            display: block;
            font-size: 20px;
            line-height: 20px;

            transition: transform 0.4s ease;
          }

          .link-title1 {
            transform-origin: right center;
          }

          .link-title2 {
            transform-origin: left center;
            transform: rotate(20deg);
          }

          .link-icon {
            position: relative;
            width: 35px;
            height: 35px;
            background: #f8f8ff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;

            overflow: hidden;
          }

          .icon {
            display: block;
            position: absolute;
            transition: transform 0.4s ease;
          }

          .icon:nth-child(2) {
            transform: translate(-40px);
          }

          .Gallery-Slider .Slick-Navigation .slick-dots {
            float: right;
            line-height: 52px;
            padding: 0;
            margin: 0;
          }

          .Gallery-Slider .Slick-Navigation .slick-dots li button {
            max-width: 9px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid #fff;
            background: Transparent;
            transition: all 0.5s;
            display: inline-block;
            font: 0px/0px tahoma;
          }

          .Gallery-Slider .Slick-Navigation .slick-dots li {
            display: inline-block;
            vertical-align: middle;
            padding: 0 2px;
          }

          .Gallery-Slider .Slick-Navigation .slick-dots li.slick-active button {
            background: #fff;
          }
        `}
      </style>
    </>
  );
}
