import { Box } from '@mui/system';
import React from 'react';
import ProductShow from '../../ProductShow/ProductShow';
import Watches from '../../Watches/Watches';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
       <Box>
           <Banner></Banner>
           <Watches></Watches>
           <ProductShow></ProductShow>
       </Box>
    );
};

export default Home;