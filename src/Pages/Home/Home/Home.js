import { Box } from '@mui/system';
import React from 'react';
import Carousal from '../../../Carousal';
import {HappyClient} from '../../../HappyClient';
import Watches from '../../Watches/Watches';

const Home = () => {

    return (
       <Box>
           <Carousal />
           <Watches ></Watches>
           <HappyClient />
       </Box>
    );
};

export default Home;