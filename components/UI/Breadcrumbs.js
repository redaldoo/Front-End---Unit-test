import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ list }) => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container no-padding">
          <ul className="col">
            {list.map((element, index) => {
              if (index < list.length - 1) {
                return (
                  <li key={index}>
                    <Link href={element.href}>
                      <a>{element.title}</a>
                    </Link>
                  </li>
                );
              } else {
                return <li key={index}>{element.title}</li>;
              }
            })}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .breadcrumbs {
          background-color: #f6f7fb;
          position: relative;
          padding: 30px 0px;
          margin-top: -20px;

          ul {
            text-align: left;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;

            li {
              display: inline-block;
              position: relative;

              &:not(:last-child):after {
                content: "\f061";
                font-family: "Font Awesome 5 Free";
                font-weight: 700;
                font-size: 12px;
                margin-left: 10px;
                margin-right: 10px;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Breadcrumbs;
