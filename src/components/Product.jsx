import React from "react";
import img1 from "../assets/images/car.jpg";
import img2 from "../assets/images/car2.jpg";
import img3 from "../assets/images/car3.jpg";
import img4 from "../assets/images/car4.jpg";
import img5 from "../assets/images/car5.jpg";
import img6 from "../assets/images/car6.jpg";
import ProductCard from "../Components/ProductCARDWORK";
import { Navbar } from "react-bootstrap";
import NavBar from "../Components/NavBar";

const data = [
  {
    id: 1,
    title: "Arma wtf",
    desc: "Some quick example text to build on the card title and make up the ",
    price: 300,
    image: img1,
  },
  {
    id: 2,
    title: "Arma wtf",
    desc: "Some quick example text to build on the card title and make up the ",
    price: 300,
    image: img2,
  },
  {
    id: 3,
    title: "Arma wtf",
    desc: "Some quick example text to build on the card title and make up the ",
    price: 100,
    image: img3,
  },
  {
    id: 4,
    title: "Arma wtf",
    desc: "Some quick example text to build on the card title and make up the ",
    price: 600,
    image: img4,
  },
  {
    id: 5,
    title: "Arma wtf",
    desc: "Some quick example text to build on the card title and make up the ",
    price: 400,
    image: img5,
  },
  {
    id: 6,
    title: "Arma wtf",
    desc: "Some quick example text to build on the card title and make up the ",
    price: 300,
    image: img6,
  },
];

const Products = () => {
  return (
    <div>
      <NavBar/>
      <h1>Product Page</h1>
      <div className="d-flex justify-content-between flex-wrap gap-4">
        {data.map((product) => {
          return (
            <div className="" key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;