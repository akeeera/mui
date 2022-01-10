import * as React from "react";
import ReactDOM from "react-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Cards() {
  return (
    <div className="App">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://photocentra.ru/images/main46/463164_main.jpg"
          alt="card-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="#" underline="none">
              Share
            </Link>
          </Button>
          <Button size="small">
            <Link href="https://en.wikipedia.org/wiki/Lizard" underline="none">
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ReactDOM.render(<Cards />, document.querySelector("#app"));
export default Cards;
