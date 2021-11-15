import { Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img src="https://i.ibb.co/Wp01qvL/hqdefault.jpg" alt="https://i.ibb.co/Wp01qvL/hqdefault.jpg"></img>
            <div class="centered">
                <Typography>Designable Luxury Watches</Typography>
                <NavLink style={{textDecoration: "none", color: "white"}} to='./watches'><Button sx={{m:"20px"}} variant="contained">Get a Watch Now</Button></NavLink>
            </div>
        </div>
    );
};

export default Banner;