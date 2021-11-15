import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography,Button } from '@mui/material';
import './Watch.css'
import { NavLink } from 'react-router-dom';

const Watch = (prop) => {
    const {_id, picture, name, price, dialColor, description} = prop.data;
    return (
        <div>
            
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia

                    component="img"
                    height="140"
                    image={picture}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                {description.slice(0,120)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                {price}
                    </Typography>
                </CardContent>
                <NavLink style={{textDecoration: 'none'}} to={`/watch/${_id}`}>
                <Button sx={{m:"20px"}} variant="contained" size="small">Add to cart</Button>
                </NavLink>
                </Card>
        </div>
    );
};

export default Watch;