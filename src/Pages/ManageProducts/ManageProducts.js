import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
const ManageProducts = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://pure-woodland-40650.herokuapp.com/watches')
        .then(res=>res.json())
        .then(data => setWatches(data))
    },[watches])
    const handleOrder = id => {
        console.log(id)
        const confirmDelete = window.confirm('Are you sure to delete it?');
        if(confirmDelete) {
            const url = `https://pure-woodland-40650.herokuapp.com/watches/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0) {
                    alert('deleted successfully');
                    const remainingWatches = watches.filter(remainingWatch => remainingWatch.selectedPackageId !== id);
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
                    <TableCell><strong>Watch Name</strong></TableCell>
                    <TableCell align="right"><strong>Watch price</strong></TableCell>
                    <TableCell align="right"><strong>Email</strong></TableCell>
                    <TableCell align="right"><strong>Status</strong></TableCell>
                    <TableCell align="right"><strong>Delete Product</strong></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    
                {watches.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        <img style={{height: "100px"}} src={row.picture} alt="" />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right"><Button onClick={() => handleOrder(row._id)}><DeleteForeverIcon /></Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;