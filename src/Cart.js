import React from "react";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Button from "@mui/material/Button";

function Cart() {
  const [Products, setProducts] = useState([]);

  fetch("https://localhost:7157/api/Cart?id=" + 2)
    .then((response) => response.json())
    .then((json) => setProducts(json));

  const Delete = (product) => {
    console.log(product);
    fetch("https://localhost:7157/api/Cart?user=" + 2, {
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
        <table class="table">
          <thead class="header">
            <tr>
              <th scope="col">Productname</th>
              <th scope="col">Amount</th>
              <th scope="col"> </th>
            </tr>
          </thead>

          {Products.map((item) => {
            return (
              <tr class="TableInhoud" align="center">
                <td>{item.Name}</td>
                <td>{item.Stock}</td>
                <td>
                  <Button
                    className="Button"
                    color="error"
                    onClick={() => {
                      let result = window.confirm(
                        "Are you sure you want to delete?"
                      );

                      let message = result
                        ? Delete(item)
                        : "You clicked the Cancel button";
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Cart;
