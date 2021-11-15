import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Watch from '../Watch/Watch';
import './Watches.css';
const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/watches')
        .then(res=>res.json())
        .then(data => setWatches(data))
    })
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