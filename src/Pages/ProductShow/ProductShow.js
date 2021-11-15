import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './ProductShow.css'

const ProductShow =() => {
  const [watches, setWatches] = React.useState([]);
    React.useEffect(() => {
        fetch('https://pure-woodland-40650.herokuapp.com/watches')
        .then(res=>res.json())
        .then(data => setWatches(data))
        console.log(watches)
    },[])
  return (
    <ImageList className="product-show" sx={{ width: 500, height: 450, textAlign: "center" }} cols={3} rowHeight={164}>
      {watches.map((item) => (
        <ImageListItem key={watches._id}>
          <img
            src={watches.picture}
            srcSet={`${watches.picture}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}



export default ProductShow;