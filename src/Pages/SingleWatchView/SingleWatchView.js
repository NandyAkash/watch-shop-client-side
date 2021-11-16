import { Button, Card, CardActionArea, CardContent, CardMedia, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const SingleWatchView = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const history = useHistory();
    useEffect(() => {
        fetch(`https://pure-woodland-40650.herokuapp.com/watch/${id}`)
        .then(res=>res.json())
        .then(data => setSingleProduct(data))
    },[])
    const {name, picture, description, price} = singleProduct;
    const placeOrder = () =>{
        const userId = user.uid;
        const userName = user.displayName;
        const userEmail = user.email;
        const userAddress = address;
        const userNumber = number;
        const selectedWatchId = id;
        const selectedWatch = name;
        const WatchPrice = price;
        const orderPackage = {userId, userName, userEmail, userAddress, userNumber, selectedWatchId, selectedWatch, WatchPrice};
        fetch('https://pure-woodland-40650.herokuapp.com/orders',{
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderPackage)
        })
        .then(res=> res.json())
        .catch(err => console.log(err));
        alert('Your Order Have been Placed');
        history.push('/home');
}
    return (
        <Container style={{ marginTop: "20px", textAlign:"-webkit-center" }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={picture}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Box>
            <TextField
                sx={{width: '75%', m:1}}
                id="filled-textarea"
                label="Address"
                placeholder="Address"
                multiline
                variant="filled"
                value={address} onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <TextField
                sx={{width: '75%', m:1}}
                id="filled-number"
                label="Number"
                type="number"
                placeholder="Number"
                variant="filled"
                value={number} onChange={(e) => setNumber(e.target.value)}
                />
            </Box>
            <Button variant="contained" onClick={placeOrder}>Confirm order</Button>
        </Container>
    );
};

export default SingleWatchView;