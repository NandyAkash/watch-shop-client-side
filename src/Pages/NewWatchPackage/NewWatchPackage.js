import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './NewWatchPackage.css'

const NewWatchPackage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState('');
    const [dialColor, setDialColor] = useState('');
    const [caseSize, setCaseSize] = useState('');
    const [description, setDescription] = useState('');

    const addOfferPackage = () => {
        const newOfferPackage = {name, price, picture, caseSize,dialColor,description};
        fetch('https://pure-woodland-40650.herokuapp.com/watches',{
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newOfferPackage)
        })
        .then(res=> res.json())
        .catch(err => console.log(err));
        alert('Your Package has been added');
    }
    return (
        <Box style={{display: "grid", placeItems: "center", marginTop: "90px"}}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>
                Add New Watch Product
            </Typography>
      <div style={{display: "flex", flexDirection: "column"}}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Watch Name" 

        />
        <TextField
          id="outlined-disabled"
          value={price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="Watch Price" 
        />
        <TextField
          id="outlined-picture-input"
          value={picture} onChange={(e)=> setPicture(e.target.value)} type="text" placeholder="Watch Image URL" 
        />
        <TextField
          id="outlined-read-only-input"
          value={dialColor} onChange={(e)=> setDialColor(e.target.value)} type="text" placeholder="Dial Color"
        />
        <TextField
          id="outlined-number"
          value={caseSize} onChange={(e)=> setCaseSize(e.target.value)} type="text" placeholder="Case Size" 
        />
        <TextField
          id="outlined-helperText"
          value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Watch Description" 
        />
      </div>
      <Button sx={{m:"20px"}} variant="contained" size="small"
      onClick={addOfferPackage} type="submit">Add new watch package</Button>
      </Box>
    );
};

export default NewWatchPackage;