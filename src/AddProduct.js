import React from "react";
import "./AddProduct.css";
import Navbar from "./Components/Navbar";
import FRMAddProduct from "./Components/FRMAddProduct";

function AddProduct() {
  return (
    <div className="AddProduct">
      <Navbar />
      <FRMAddProduct />
    </div>
  );
}

export default AddProduct;
