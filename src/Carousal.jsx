import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom';


function Carousal() {
    const [watches, setWatches] = React.useState([]);
    React.useEffect(() => {
        fetch('https://pure-woodland-40650.herokuapp.com/watches')
        .then(res=>res.json())
        .then(data => setWatches(data.slice(0,6)))
        console.log(watches)
    },[])
    return (
        <Carousel autoPlay>
            {
                watches.slice(0,6).map( (item, i) => <Item key={i} item={item} /> )
            }
            
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img style={{objectFit: "cover", height: "200px", backgroundPosition: "center center"}} src={props.item.picture} alt="" />
            
            <p>{props.item.name}</p>

            <Link style={{textDecoration:"none"}} to="/watches"><Button sx={{m:1}} variant="contained" className="CheckButton">
                Check it out!
            </Button></Link>
        </Paper>
    )
}

export default Carousal

