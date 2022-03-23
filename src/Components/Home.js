import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import './navbar.css';

function Home() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ justifyContent: "center" }}>
      <Navbar />
      <SearchBar />
      <div className="catDesign">
        <ul style={{ listStyleType: "none", lineHeight: "2" }}>
          <li>
            <h3>Categories</h3>
          </li>
          {Categories.map((item, index) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/products/category/${item}`}
            >
              <li key={index}>{item.toUpperCase()}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
