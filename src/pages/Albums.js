import * as React from "react";
import AlbumPreview from "../components/AlbumPreview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { getAlbums } from "../actions/getAlbums";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "start",
    },
  },
}));

function Albums() {
  const { albums } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <div className="albums">
      <Grid
        container
        spacing={5}
        justifyContent={"center"}
        textAlign={"center"}
        className={classes.root}
      >
                <Typography
          gutterBottom
          variant="h6"
          component="div"
          justifyContent={"center"}
          position={"absolute"}
          ml={4}
        >
          Albums
        </Typography>
        {albums.data.map((item) => (
          <Grid item xl={4} lg={4} md={6} sm={6} xs={12} mt={2}  key={item.id}>
            <AlbumPreview title={item.title} id={item.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Albums;
