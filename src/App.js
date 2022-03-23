import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import MyProfile from "./Components/MyProfile";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/profile" element={<MyProfile />} />
          <Route  path="/products/category/:name" element={<ProductList />} />
          <Route  path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
