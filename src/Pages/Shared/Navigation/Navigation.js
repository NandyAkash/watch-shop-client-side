import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import  {NavLink}  from "react-router-dom";
import useAuth from "../../../Hooks/useAuth"
const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    {
                        user?.email ?
                        <NavLink style={{textDecoration: "none", color: "white"}} to='/dashboard'><Button color="inherit">DashBoard</Button></NavLink>
                        :
                        <IconButton></IconButton>
                    }
                    <Typography style={{paddingLeft: "60px"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Watch Shop
                    </Typography>
                    <NavLink style={{textDecoration: "none", color: "white"}} to='/watches'><Button color="inherit">More Watches</Button></NavLink>
                    {
                        user?.email ?
                        (
                            <>
                            <Button onClick={logOut} color="inherit">LogOut</Button>
                            <Typography>
                                Hello, <a style={{marginLeft:"5px",textDecoration:"none", color:"white"}} href="#login">{user?.displayName}</a>
                            </Typography>
                            </>
                        )
                        :
                        <NavLink style={{textDecoration: "none", color: "white"}} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }
                    
                    </Toolbar>
                </AppBar>
            </Box>
    );
};

export default Navigation;