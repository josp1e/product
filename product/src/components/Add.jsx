import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

// Providing default values for product in case it's undefined or missing properties
const defaultProduct = {
  title: '',
  price: '',
  category: '',
  image: '',
};

const Add = ({ product = defaultProduct }) => {
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState({
    title: product.title || '',
    price: product.price || '',
    category: product.category || '',
    image: product.image || '',
  });

  const showData = () => {
    console.log(form);
  };

  const valueCap = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <div>
        <TextField
          required
          id="title"
          label="Title"
          name="title"
          value={form.title}
          onChange={valueCap}
        />
        <br />
        <TextField
          required
          id="category"
          label="Category"
          name="category"
          value={form.category}
          onChange={valueCap}
        />
        <br />
        <TextField
          required
          id="price"
          label="Price"
          name="price"
          value={form.price}
          onChange={valueCap}
        />
        <br />
        <TextField
          required
          id="image"
          label="Image URL"
          name="image"
          value={form.image}
          onChange={valueCap}
        />
        <br />
        <Button variant="contained" color="success" onClick={showData}>
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default Add;
