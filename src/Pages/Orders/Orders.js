import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/useAuth';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';

const Orders = (props) => {
    const {user} = useAuth();
    const {uid} = user;
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`https://pure-woodland-40650.herokuapp.com/orders/${uid}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])

    const handleOrder = id => {
        console.log(id)
        const confirmDelete = window.confirm('Are you sure to delete it?');
        if(confirmDelete) {
            const url = `https://pure-woodland-40650.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0) {
                    alert('deleted successfully');
                    const remainingWatches = orders.filter(remainingWatch => remainingWatch.selectedPackageId !== id);
                    // setOrders(remainingWatches);
                }
            })
        }
    }



    
    return (
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><strong>Product Name</strong></TableCell>
                    <TableCell align="right"><strong>Name</strong></TableCell>
                    <TableCell align="right"><strong>Email</strong></TableCell>
                    <TableCell align="right"><strong>Status</strong></TableCell>
                    <TableCell align="right"><strong>Delete Order</strong></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    
                {orders.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        {row.selectedWatch}
                    </TableCell>
                    <TableCell align="right">{row.userName}</TableCell>
                    <TableCell align="right">{row.userEmail}</TableCell>
                    <TableCell align="right">Pending</TableCell>
                    <TableCell align="right"><Button onClick={() => handleOrder(row.selectedWatchId)}><DeleteForeverIcon /></Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;