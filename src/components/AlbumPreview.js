import * as React from "react";
import {useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {APIService} from "../api/API";

export default function AlbumPreview({title, id}) {
    const navigate = useNavigate();
    const [previewUrl, setPreview] = React.useState("");

    useEffect(() => {
        if (previewUrl.length === 0) {
            APIService.get(`https://jsonplaceholder.typicode.com/photos`, {params: {albumId: id, kek: id}})
                .then((result) => setPreview(result[0].url));
        }
    }, [id]);

    console.log(previewUrl)

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
