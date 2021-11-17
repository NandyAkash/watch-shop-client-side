import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Carousal from '../../../Carousal';
import Watch from '../../Watch/Watch';
import Review from '../Review/Review';
import './Home.css';
import Footer from '../../Shared/Footer/Footer'
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://pure-woodland-40650.herokuapp.com/watches')
        .then(res=>res.json())
        .then(data => setWatches(data))
    },[])
    return (
       <div>
           
           
           <Box className="carousel-container">
                <Carousal />
            </Box>
            <Container>
            
            <Typography style={{fontSize:"46px", fontWeight: "700"}}>Latest design Watches</Typography>
            <Box className="watches-home">
                
                {
                    watches.slice(0,6).map(watch =><Watch key={watch._id} data={watch}></Watch> )
                }
            </Box>
            <Review />
            <ContactUs />
            </Container>
            <Footer />
        </div>
    );
};

export default Home;