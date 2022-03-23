import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const [posts, setPosts] = useState([]);
  let { name } = useParams();
  useEffect(() => {
    console.log(name);
    Axios.get(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <div>
      <h2>{name.toLocaleUpperCase()}</h2>
      {posts.map((item) => (
        <div>
          <Link to={`/products/${item.id}`}>
            <img src={item.image} alt="img" width={200} height={200} />
          </Link>
          <h3>{`Rs.${item.price}`}</h3>
          <h3>{item.title}</h3>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
