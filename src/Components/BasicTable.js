import React from "react";
import { useState } from "react";

function BasicTable() {
  const [producten, setProducten] = useState([]);
  fetch("https://localhost:7157/api/Product")
    .then((response) => response.json())
    .then((json) => setProducten(json));

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
          <th>Stock</th>
        </tr>
        {producten.map((item) => {
          return <td>{JSON.stringify(item.Name)}</td>;
        })}
      </table>
    </div>
  );
}
export default BasicTable;
