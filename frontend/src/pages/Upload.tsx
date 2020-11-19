import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from "@material-ui/core";

type PropsType = {
    fileTitle: string
    fileDescription: string
    onSubmit: ( e: any ) => Promise<void>
    handleFileChange?: ( e: any ) => void
    handleTitleChange: ( e: any ) => void
    handleDescChange: ( e: any ) => void
    localFile: string
}

const Upload: React.FC<PropsType> = ( {localFile, fileDescription, fileTitle, onSubmit, handleFileChange, handleDescChange, handleTitleChange} ) => {


    return (
        <Grid container spacing={3} alignContent="center" justify="center" style={{height: "calc(100vh - 120px)"}}>
            <Grid item lg={6} md={6} sm={12}>

                <form onSubmit={onSubmit}>
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <TextField
                            onChange={handleTitleChange}
                            label="Title of your video"
                            helperText=""
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            rows={4}
                            multiline
                            onChange={handleDescChange}
                            label="Description of your video"
                            helperText=""
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Box mt={3} mb={3}>
                            <Button
                                variant="outlined"
                                component="label"
                                color="primary"
                            >
                                Choose your video
                                <input onChange={handleFileChange}
                                       type="file"
                                       hidden
                                />
                            </Button>
                        </Box>
                        <Button type="submit" variant="contained" color="primary"> Upload Video </Button>

                    </Box>
                </form>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
                <Card>
                    <CardMedia
                        component="video"
                        src={localFile}
                        title="Contemplative Reptile"
                        height="300"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {fileTitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {fileDescription}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Upload;

