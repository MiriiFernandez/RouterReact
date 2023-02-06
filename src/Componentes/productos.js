import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Idproducto from "./idproducto";
import estilo from "./estilo.css";

function Product(props) {
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    fetchApi();
  });

  const fetchApi = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      });
  };

  return (
    <div class="container">
      {productos.map((product) => (
        <div class="imagenes">
          <img width="300px" src={product.images[0]} />
          <button >
            <a href={"/idproducto/" + product.id}>
              Ver ID del producto
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}
export default Product;
