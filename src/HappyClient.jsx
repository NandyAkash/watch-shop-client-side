import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Avatar, Paper, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { deepOrange } from '@mui/material/colors';

export const HappyClient = ({reviews}) => 
{   

    return (
        <div style={{marginBottom: "90px"}}>
            <Typography style={{fontSize: "26px", marginTop: "70px" ,marginBottom:"15px", fontWeight: "600"}}>
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
      
            <Paper style={{textAlign: "left", width: "100%"}}>
            <div style={{display: "flex",alignItems: "center"}}>
            <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt={props.item.user}
                src="/broken-image.jpg"
            />

             <h4 style={{marginLeft: "10px",}}>{props.item.user}</h4>
            </div>    
            <p style={{fontWeight: "600", color: "rgba(0,0,0,0.6)", margin: "1px 0px 5px 0px"}} center> {props.item.watch}</p>
            <p style={{margin: "0px 0px 5px 0px"}}><span style={{fontWeight: "600"}}>Review:</span> {props.item.comment}</p>
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