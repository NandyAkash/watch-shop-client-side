import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ManageProducts from '../ManageProducts/ManageProducts';
import Watch from '../Watch/Watch';
import './Watches.css';
const Watches = (props) => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://pure-woodland-40650.herokuapp.com/watches')
        .then(res=>res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <Container className="wacthes">
            <Typography>Latetst Watches</Typography>
            <div className="watch-collection">
            {
                watches.map(watch => <Watch 
                    key={watch._id} 
                    data={watch}
                   ></Watch>)
            }
             </div>
        </Container>
    );
};

export default Watches;