import * as React from "react";
import {useEffect} from "react";
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/getPosts";
import Grid from "@mui/material/Grid";
import {getUsers} from "../actions/getUsers";
import {Autocomplete, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("md")]: {
            justifyContent: "start",
        },
    },
}));

function Posts() {
    const {posts, users} = useSelector((state) => state);
    const [value, setValue] = React.useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log(users.data)
    useEffect(() => {
        dispatch(getUsers());
        dispatch(getPosts());
    }, [dispatch]);

    return (<div className="posts">
            <Grid
                container
                spacing={3}
                justifyContent={"center"}
                className={classes.root}
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    justifyContent={"center"}
                    position={"absolute"}
                >
                    Posts
                </Typography>
                <Button onClick={() => {
                    setValue(users.data.map(name));
                    console.log(value)
                }}>Try</Button>
                <Autocomplete
                    getOptionLabel={(option) => option.name}
                    disablePortal
                    id="combo-box-demo"
                    options={users.data}
                    sx={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Movie"/>}
                />
                {posts.data.map((item) => (<Grid item xl={4} lg={4} md={6} sm={8} xs={12} mt={4} key={item.id}>
                    <Post
                        key={item.id}
                        title={item.title}
                        body={item.body}
                        userId={item.userId}
                        id={item.id}
                    />
                </Grid>))}
            </Grid>
        </div>
    )
        ;
}

export default Posts;
