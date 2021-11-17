import React, { useEffect, useState } from 'react';
import { HappyClient } from '../../../HappyClient';


const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
      fetch(`https://pure-woodland-40650.herokuapp.com/review`)
      .then(res=>res.json())
      .then(data => setReviews(data))
  },[])

    return (
      <div style={{display: "grid", placeItems: "center"}}>
      {
        <HappyClient reviews={reviews}></HappyClient>
      }
      </div>
    );

}
export default Review;