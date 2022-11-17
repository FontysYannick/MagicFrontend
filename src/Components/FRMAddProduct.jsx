import React, { useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './FRMAddProduct.css';

const FRMAddProduct = () => {
  const paperStyle={padding: '50px 20px', width:450, margin:"20px auto"}
  const[name, setName]=useState('');
  const[color, setColor]=useState('');
  const[stock, setStock]=useState('');

  const handleClick=(e)=>{
    e.preventDefault()
    const product={name, color, stock}
    console.log(product)
    fetch('https://localhost:7157/api/Product',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(product)
    }).then(()=>{
      console.log("New product Added")
    })
  }

  return (
    <container>
      <Paper elevation={3} style={paperStyle}>
      <div className='AddProduct'>   
        <h1><b>Maak een nieuw product</b></h1>
      </div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Product" variant="standard" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Color" variant="standard" fullWidth 
      value={color}
      onChange={(e)=>setColor(e.target.value)}
      />
      <TextField id="standard-basic" label="Stock" variant="standard" fullWidth 
      value={stock}
      onChange={(e)=>setStock(e.target.value)}
      />
    <Button 
      class="AddButton" variant="contained" onClick={handleClick}>Sla gegevens op
    </Button>
    </Box>
    </Paper>
    </container>
  );
}
export default FRMAddProduct;
