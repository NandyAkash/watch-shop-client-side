import React from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [loginData,setLoginData] = useState({});
    const [pass, setpass] = useState('')
    const [error, seterror] = useState(false)
    const history = useHistory();
    const location = useLocation();
    const {user, registrationUser, isLoading, authError} = useAuth();
    const redirect_uri = location.state?.from?.pathname || '/home';
    const handleOnBlur =(e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        if(pass.length <= 6){
            <Alert severity="error">Password must be good</Alert>
        }
        if(loginData.password !== loginData.password2) {
                seterror(true)
            return
           
        }
        console.log(user)
        if(user.email !== loginData.email) {
            registrationUser(loginData.email, loginData.password, loginData.name, history)
            history.push(redirect_uri);
        }
        
       
        e.preventDefault();
    }
    return (
        // {error &&  <Alert severity="error">Password must be good</Alert>}
        <Container>
        <Grid>
            <Grid item sx={{mt: 6}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Registration</Typography>
                    { !isLoading && <form onSubmit={handleSignUp}>
                    <TextField sx={{width: '75%', m:1}}
                    id="standard-basic"
                    name="name"
                    type="text"
                    onBlur={handleOnBlur}
                    label="Your Name"
                    variant="standard"
                    />
                    <TextField sx={{width: '75%', m:1}}
                    id="standard-basic"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    label="Your Email"
                    variant="standard"
                    />
                    <TextField sx={{width: '75%', m:1}}
                    id="outlined-password-input"
                    name="password"
                    onBlur={handleOnBlur}
                    label="Password"
                    type="password"
                    variant="standard"
                    onChange={(e) => setpass(e.target.value)}
                    />
                    <TextField sx={{width: '75%', m:1}}
                    id="outlined-password-input"
                    name="password2"
                    onBlur={handleOnBlur}
                    label="Re-type Password"
                    type="password"
                    variant="standard"
                    />
                    <Button sx={{width: '75%', m:1}}variant="contained" type="submit">SignUp</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text">Already registered? Please Login</Button></NavLink>
                </form>}
                {
                    isLoading && <CircularProgress />
                }
                {
                    user?.email  && 
                        <Alert severity="success">User has been created.</Alert>
                  
                }
                {
                    authError && 
                        <Alert severity="error">{authError}</Alert>
                  
                }
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;