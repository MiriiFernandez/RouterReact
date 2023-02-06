import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Idproducto(props) {
  const [productos, setProductos] = useState([]);
  const { id, setID } = useParams();

  useEffect(() => {
    fetchApi();
  });

  const fetchApi = () => {
    fetch("https://dummyjson.com/products/id")
      .then((res) => res.json())
      .then((data) => {
        setID(data.products);
      });
  };

  return (
    <div class="container">
      <h2> {productos?.title} </h2>
      <h3> {productos?.description} </h3>
      <h3> {productos?.price}  </h3>
    </div>
  );
}
export default Idproducto;
