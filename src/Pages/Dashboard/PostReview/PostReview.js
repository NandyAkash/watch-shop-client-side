import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75"
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47"
    }
  });

const PostReview = (props) => {
    const {user} = useAuth();
    const {uid} = user;
    const [orders, setOrders] = useState([]);
    const [watch, setwatch] = useState('');    
    useEffect(() => {
        fetch(`https://pure-woodland-40650.herokuapp.com/orders/${uid}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    // console.log(orders);
    return (
        <div>
           <div>
               {watch && <AddReview watch={watch}/>}
           {
               orders?.map(item => (
                   <>
                    <Container key={item.selectedWatch} style={{ display:"flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "20px", textAlign:"-webkit-center" }}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                <Typography gutterBottom component="div">
                                    {item.selectedWatch}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {item.userName}
                                </Typography>
                                </CardContent>
                        </Card>   
                        
                        <Button onClick={() => setwatch(item.selectedWatch)} variant="contained">Post Review</Button>
                    </Container>
                   </>
               ))

           }
           </div>
           
        </div>
    );
};

const AddReview = ({watch}) => {
    const {user} = useAuth();
    const [rating, setRating] = useState(3);
    const [comment, setComment] = useState('');
    const history = useHistory();
    const postReview = () => {
        const review = {user: user.displayName, watch, comment, rating}
        console.log(review)
        fetch('https://pure-woodland-40650.herokuapp.com/review',{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .catch(err => console.log(err));
        alert('Succesfully review given.');
        history.push('/home');

    }
    

    return(
        <>
        <h6>{watch}</h6>
        <TextareaAutosize
                            value={comment}
                            onChange={(e) => setComment(e.target.value) }
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="Enter Your Review"
                            style={{ width: "40%" }}
                            />
                            <Box
                            sx={{
                                "& > legend": { mt: 2 }
                            }}
                            >
                            <Typography component="legend">Rating: </Typography>
                            <StyledRating
                                name="customized-color"
                                defaultValue={rating}
                                onChange={(e) => setRating(e.target.value)}
                                getLabelText={(value) => 
                                    `${value} Heart${value !== 1 ? "s" : ""}`
                                }
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                            </Box>
                            <Button sx={{m:1}} variant="contained" onClick={() => postReview()}>Post Review</Button>
                            </>
    )
                            }
export default PostReview;