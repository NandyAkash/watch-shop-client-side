import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const {user, token} = useAuth();
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState([])
    const email = user.email;
    console.log(email)
    useEffect(()=>{
        fetch('https://pure-woodland-40650.herokuapp.com/users')
        .then(res=> res.json())
        .then(data=>setUsers(data))

    },[])
    const handleAdmin = (email) => {
        const user = { email };
        fetch('https://pure-woodland-40650.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
            setTimeout(() => {
                setSuccess(false)
            }, 3000);

    }
    return (
        <div>
            {/* <h4>{user.email}</h4>
            <Button variant="contained" onClick={handleAdmin(email)}>Make This user admin</Button>
            {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell align="right"><strong>Name</strong></TableCell>
                    <TableCell align="right"><strong>Email</strong></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    
                {users.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        {row.displayName}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={()=>handleAdmin(row.email)}>Make Admin</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            {success && <Alert severity="success">Made Admin successfully!</Alert>} 
            </TableContainer>
        </div>
    );
};

export default MakeAdmin;