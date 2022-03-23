import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import './navbar.css';

function SearchBar() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="serchbar">
      <i className="fas fa-search"></i>
      <input className="searchfield" placeholder=" Search Products here..." onChange={handleChange} />
      {query.length ? (
        data
          .filter((post) => {
            if (post.title.toLowerCase().includes(query.toLocaleLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <div key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${post.id}`}
              >
                <p>{post.title}</p>
              </Link>
            </div>
          ))
      ) : (
        <div>...</div>
      )}
    </div>
  );
}

export default SearchBar;
