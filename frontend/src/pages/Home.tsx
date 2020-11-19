import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { VideoData } from "../../type/type";
import Spinner from "../components/Spinner";
import io from "socket.io-client";


// @ts-ignore
const socket = io();

type PropType = {
    loading: boolean
    data: Array<VideoData>
}

const Home: React.FC<PropType> = ( {loading, data} ) => {
    useEffect(() => {
        socket.emit('video');
    })
    if ( loading )
        return <Spinner/>
    return (
        <Grid container spacing={3} direction="row"
              justify="flex-start"
              alignItems="flex-start"
        >
            {data.map(( el ) => (
                <Grid key={el.video_name} item lg={4} md={6} sm={12} xs={12}>
                    <Card>
                        <CardMedia
                            component="video"
                            src={process.env.PUBLIC_URL + el.video_url}
                            title="Contemplative Reptile"
                            height="300"
                            controls
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {el.video_name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Home;
