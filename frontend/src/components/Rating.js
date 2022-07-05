import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((item) => (
        <span key={item}>
          <i
            style={{ color }}
            className={
              value >= item
                ? "fas fa-star"
                : value >= item - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-start"
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
