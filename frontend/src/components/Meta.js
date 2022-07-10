import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Kitty City",
  description: "We sell the best products for the cheapest price",
  keywords: "cat, cat accessories, cat tree, cat bed",
};

export default Meta;
