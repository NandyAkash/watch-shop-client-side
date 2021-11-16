import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const HappyClient = ({reviews}) => 
{   

    return (
        <div style={{marginBottom: "90px"}}>
            <Typography style={{fontSize: "26px", marginTop: "60px" ,marginBottom:"25px", fontWeight: "600"}}>
                Some of our Happy Clients
            </Typography>
            <Carousel style={{marginBottom:"150px !important"}}>
            {
                reviews?.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </div>
    )
}
const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75"
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47"
    }
  });
function Item(props)
{
    return (
      
            <Paper>
            <h4 style={{display:"flex", alignItems: "center", justifyContent:"center"}} center>Product Name:<br/> {props.item.watch}</h4>
            <p>Review: {props.item.comment}</p>
                            <StyledRating
                                name="customized-color"
                                defaultValue={props.item.rating}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
        </Paper>
        
        
    )
}