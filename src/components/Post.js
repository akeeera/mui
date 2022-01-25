import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  likeIcon: {
    "& svg": {
      color: red[500],
    },
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({ title, body, userId, id }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const { users } = useSelector((state) => state);
  const [comments, setComments] = React.useState([]);
  const [like, setLike] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLike(!like);
    const dictionary = JSON.parse(localStorage.getItem("likeDictionary")) || {};

    if (!like) {
      dictionary[id] = true;
      localStorage.setItem("likeDictionary", JSON.stringify(dictionary));
    } else {
      delete dictionary[id];
      localStorage.setItem("likeDictionary", JSON.stringify(dictionary));
    }
  };

  useEffect(() => {
    const dictionary = JSON.parse(localStorage.getItem("likeDictionary"));
    if (dictionary[id]) {
      setLike(true);
    }
  }, []);

  const user = users.data.find((item) => item.id === userId);

  useEffect(() => {
    if (expanded && comments.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then((result) => setComments(result));
    }
  }, [expanded]);

  if (!user) {
    return <></>;
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.username}
        subheader={user.email}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://allchinareview.com/wp-content/uploads/2017/01/iStock-545286388.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {title}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="like"
          id={id}
          onClick={handleLike}
          className={like ? classes.likeIcon : ""}
        >
          <FavoriteBorder />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            {comments.map((comment) => {
              return (
                <Grid container item key={comment.id}>
                  <Grid item>
                    <Typography variant="overline" color="text.secondary">
                      {comment.email}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{comment.body}</Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
