import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState  } from 'react';

function JuiceComponent() {
  const [menu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  let menuC = menu.filter((m) => m.category === "Салад ба зууш");
  return (
      <div className="row">
      {menuC.map((data) => (
          <div className="col-6 col-md-4">
          <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={data.thumb_img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
  );
}

export default JuiceComponent;
