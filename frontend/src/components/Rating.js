import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[...Array(5).keys()].map((item) => (
        <span key={item + 1}>
          <i
            style={{ color }}
            className={
              value >= item + 1
                ? "fa-solid fa-star"
                : value >= item + 1 - 0.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

// define the default color here
Rating.defaultProps = {
  color: "#f8e825",
};

// predefine the prop types (& if required) of Rating
// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };
export default Rating;
