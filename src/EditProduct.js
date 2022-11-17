import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Navbar from "./Components/Navbar";
import "./Components/FRMAddProduct.css";

function ComponentB() {
  const uselocation = useLocation();

  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const id = uselocation.state.Id;
  const [name, setName] = useState(uselocation.state.Name);
  const [color, setColor] = useState(uselocation.state.Color);
  const [stock, setStock] = useState(uselocation.state.Stock);

  const Update = (e) => {
    e.preventDefault();
    const product = { id, name, color, stock };
    console.log(product);
    fetch("https://localhost:7157/api/Product", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };
  return (
    <container>
      <Navbar />
      <Paper elevation={3} style={paperStyle}>
        <div className="AddProduct">
          <h1>
            <b>edit product : {uselocation.state.Name}</b>
          </h1>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Product"
            variant="standard"
            fullWidth
            required
            defaultValue={uselocation.state.Name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Color"
            variant="standard"
            fullWidth
            required
            defaultValue={uselocation.state.Color}
            onChange={(e) => setColor(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Stock"
            variant="standard"
            fullWidth
            required
            defaultValue={uselocation.state.Stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <Button variant="contained" onClick={Update}>
            Confirm Edit
          </Button>
        </Box>
      </Paper>
    </container>
  );
}

export default ComponentB;
