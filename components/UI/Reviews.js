import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = (props) => {
  let init = 5;
  return (
    <>
      <div className="product-rate">
        {[...Array(props.stars)].map((_, i) => (
          <FontAwesomeIcon
            className="product-rate-star"
            icon={faStar}
            key={i}
          />
        ))}
        {[...Array(init - props.stars)].map((_, i) => (
          <FontAwesomeIcon
            className="product-rate-star"
            icon={["far", "star"]}
            key={i}
          />
        ))}
      </div>

      <style jsx global>{`
        @import "./../../styles/helpers/variables";

        .product-rate {
          margin-bottom: 10px;
          &-star {
            color: $orangeColor;

            &:not(:first-child) {
              margin-left: 2.5px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Reviews;
