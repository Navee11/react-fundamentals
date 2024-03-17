import React from "react";
import "../src/data";
import "../src/content.css";
import { bestsellerBooks, bestsellerElectronics, beautyProducts } from "./data";

const Content1 = (props) => {
  const { title, price, rating, reviews, image } = props.product;

  return (
    <div
      className="container"
      onClick={() => {
        console.log(`${title} Product is of Rs.${price}`);
      }}
    >
      <img src={image} alt="" />
      <h5>{title}</h5>
      <p style={{ display: "inline", marginRight: "100px" }}>Rs.{price}</p>
      <p style={{ display: "inline", textAlign: "right" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          style={{ display: "inline" }}
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        {rating}
      </p>
      <p style={{ fontSize: "0.75rem", textDecoration: "underline" }}>
        Reviewed by {reviews}
      </p>
    </div>
  );
};
const Content2 = (props) => {
  const { title, price, rating, reviews, image, author } = props.book;

  return (
    <div
      className="container"
      onClick={() => {
        console.log(`${title} Book is of Rs.${price}`);
      }}
    >
      <img src={image} alt="" />
      <h5>{title}</h5>
      <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "grey" }}>
        {author}
      </p>
      <p style={{ display: "inline", marginRight: "100px" }}>Rs.{price}</p>
      <p style={{ display: "inline", textAlign: "right" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          style={{ display: "inline" }}
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        {rating}
      </p>
      <p style={{ fontSize: "0.75rem", textDecoration: "underline" }}>
        Reviewed by {reviews}
      </p>
    </div>
  );
};
const Content3 = (props) => {
  const { title, price, rating, reviews, image } = props.product;

  return (
    <div
      className="container"
      onClick={() => {
        console.log(`${title} Product is of Rs.${price}`);
      }}
    >
      <img src={image} alt="" />
      <h5>{title}</h5>
      <p
        style={{
          display: "inline",
          marginRight: "100px",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        Rs.{price}
      </p>
      <p style={{ display: "inline", textAlign: "right" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          style={{ display: "inline" }}
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        {rating}
      </p>
      <p style={{ fontSize: "0.75rem", textDecoration: "underline" }}>
        Reviewed by {reviews}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <>
      <h1 style={{ fontSize: "2rem", margin: "20px" }}>
        Amazon Bestsellers in Electronics
      </h1>
      <div className="electronics">
        {bestsellerElectronics.map((product, index) => {
          return <Content1 product={product} key={index}></Content1>;
        })}
      </div>

      <h1 style={{ fontSize: "2rem", margin: "20px" }}>
        Amazon Bestsellers in Books
      </h1>
      <div className="books">
        {bestsellerBooks.map((book, index) => {
          return <Content2 book={book} key={index}></Content2>;
        })}
      </div>

      <h1 style={{ fontSize: "2rem", margin: "20px" }}>
        Amazon Bestsellers in Beauty Products
      </h1>
      <div className="beauty">
        {beautyProducts.map((product, index) => {
          return <Content3 product={product} key={index}></Content3>;
        })}
      </div>
    </>
  );
};
export default Content;
