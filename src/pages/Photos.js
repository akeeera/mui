import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { getPhotos } from "../actions/getPhotos";
import { makeStyles } from "@mui/styles";
import Photo from "../components/Photo";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "start",
    },
  },
}));

function Photos() {
  const { photos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="albums">
      {/* <Grid
        container
        spacing={5}
        justifyContent={"center"}
        textAlign={"center"}
        className={classes.root}
      >
        {photos.data.map((item) => (
          <Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={item.id}>
            <Photo
              title={item.title}
              url={item.url}
              albumId={item.albumId}
              id={item.id}
            />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
}

export default Photos;
