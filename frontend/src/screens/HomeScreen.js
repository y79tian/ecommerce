import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    // const fetchProducts = async () => {
    //   // by default it will look at the localhost:3000 as the root url, to look at localhost:4000, we
    //   // need to add proxy (in the frontend package.json)
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProducts();

    // call the action to get the data
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          <Col></Col>
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
