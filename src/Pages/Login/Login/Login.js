import { Button, Container, Grid, TextField, Typography,CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const [loginData,setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    
    const handleGoogleLogin = () => {
        signInGoogle(location, history)

            
    }

    const handleOnChange =(e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    
    const handleLogin = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
        
    }
    
    return (
        <Container>
            <Grid>
                <Grid item sx={{mt: 6}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Please Login</Typography>
                        <form onSubmit={handleLogin}>
                        <TextField sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="email"
                        onBlur={handleOnChange}
                        label="Your Email"
                        variant="standard"
                        />
                        <TextField sx={{width: '75%', m:1}}
                        id="outlined-password-input"
                        name="password"
                        onBlur={handleOnChange}
                        label="Password"
                        type="password"
                        variant="standard"
                        />
                        <Button sx={{width: '75%', m:1}} variant="contained" type="submit">Login</Button>
                        <NavLink style={{textDecoration: 'none'}} to="/register"><Button variant="text">New User? Please SignUP</Button></NavLink>
                        {
                        isLoading && <CircularProgress />
                        }
                        {
                            user?.email  && <Alert severity="success">User is logged in.</Alert>
                        }
                        {
                            authError && 
                                <Alert severity="error">{authError}</Alert>
                        }
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button sx={{width: '75%', m:1}} variant="contained" onClick={handleGoogleLogin}>Google Signin</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
