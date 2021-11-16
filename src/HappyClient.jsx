import React from 'react';
import Avatar from '@mui/material/Avatar';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export const HappyClient = (props) => 
{
    var items = [
        {

            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel style={{marginBottom:"150px !important"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
      
            <Paper>
                <h2 style={{display:"flex", alignItems: "center", justifyContent:"center"}} center><Avatar alt="Remy Sharp" src={"/static/images/avatar/1.jpg"} /> {props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
        
        
    )
}