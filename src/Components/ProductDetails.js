import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState();
  let { id } = useParams();
  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt="img" width={200} height={200} />
      <h3>{`Rs.${product.price}`}</h3>
      <div>{product.description}</div>
        <button onClick={handleClick} >Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
