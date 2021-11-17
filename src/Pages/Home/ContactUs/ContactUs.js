import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const ContactUs = () => {
    return (
        <div style={{marginBottom: "180px"}}>
            <h3>Want to know more about us</h3>
            <p>Let us know some information about you.</p>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                    required
                    label="Full Name"
                    defaultValue=""
                    />
                    <TextField
                    required
                    label="Email"
                    defaultValue=""
                    />
                    <TextField
                    required
                    label="Number"
                    defaultValue="+8801"
                    />
                    <TextField
                    label="Your address"
                    defaultValue=""
                    />
                    
                   
                </div>
      
            </Box>
            <Button style={{marginTop:"20px"}} variant="contained">Submit</Button>
        </div>
    );
};

export default ContactUs;