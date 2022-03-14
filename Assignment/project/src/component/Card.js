import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState  } from 'react';
import Busket from '../component/Busket';
import Menu from '../component/Menu';
import "../css/style.css";

function CardComponent() {
  const [menu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  return (
    <div className='row d-flex mx-2'>
    <div className="productList col-8">
        <div>
          <Menu />
        </div>
        <div className="row">
          {menu.map((data) => (
              <div className="col-6 col-md-3">
              <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              alt=""
              height="120"
              image={data.thumb_img}
            />
            <CardContent>
              <Typography variant="h6">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {data.recipe}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">Share</Button>
              <Button size="medium">Сагслах</Button>
            </CardActions>
          </Card>
            </div>
          ))}
          </div>
    </div>
    <div className="order-0 col-4">
        <Busket />
    </div>
    </div>
  );
}

export default CardComponent;