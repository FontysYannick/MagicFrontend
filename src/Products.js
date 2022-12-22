import React from "react";
import "./Products.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Products() {
  const [producten, setProducten] = useState([]);

  fetch("https://localhost:7157/api/Product")
    .then((response) => response.json())
    .then((json) => setProducten(json));

  const navigate = useNavigate();

  const Edit = (product) => {
    navigate("/EditProduct", { state: product });
  };

  const Delete = (product) => {
    console.log(product);
    fetch("https://localhost:7157/api/Product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="flex-page">
          <Filter />
          <div class="grid-container">
            {producten.map((item) => {
              return (
                <div class="grid-item">
                  <img
                    alt=""
                    src="https://www.bazaargames.nl/images/cards/l/mic/wilhelt_the_rotcleaver_9063569_1.jpg"
                    className="d-inline-block align-top"
                  />
                  <h1 id="name">{item.Name}</h1>
                  <h4>
                    Color: {item.Color} Stock: {item.Stock}
                  </h4>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      Edit(item);
                    }}
                  >
                    Edit
                  </Button>
                  {"  "}
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      let result = window.confirm(
                        "Are you sure you want to delete?"
                      );

                      let message = result
                        ? Delete(item) + "item deleted"
                        : "You clicked the Cancel button";

                      alert(message);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
