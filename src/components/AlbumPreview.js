import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";

export default function AlbumPreview({ title, id }) {
  const navigate = useNavigate();
  const [previewUrl, setPreview] = React.useState("");

  useEffect(() => {
    if (previewUrl.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then((response) => response.json())
        .then((result) => setPreview(result[0].url));
    }
  }, [id]);

  console.log(previewUrl);

  return (
    <Card
      onClick={() => {
        navigate(`${id}`);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={previewUrl}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
