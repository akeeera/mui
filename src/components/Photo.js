import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";

export default function Photo({ title, url, albumId, id }) {

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="150"
          image={url}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
