import express, { Request } from "express";
import { Response } from "express-serve-static-core"
import http from "http";
import cors from "cors";
import fs from "fs";
import path from "path";
// @ts-ignore
import fileUpload from "express-fileUpload";
import { VideoData } from "../models/video";

require("dotenv").config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(fileUpload());

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../frontend/media');

app.use(express.static(publicDirectoryPath));
app.get('/video', async ( req: Request, res: any ) => {
    const dataJSON = await getVideoData();
    res.send(dataJSON);
})

app.post('/upload', ( req: any, res: Response ) => {
    const file = req.files.file;
    file.mv(`${__dirname}/../frontend/public/video/${file.name}`, ( err: any ) => {
        if ( err ) {
            console.log(err);
            return res.status(500).send(err);
        }
        const dataJSON = getVideoData();
        dataJSON.push({
            video_name: file.name,
            video_url: `/video/${file.name}`
        });
        const jsonData = JSON.stringify(dataJSON);
        fs.writeFileSync('data.json', jsonData);
        res.send({filename: file.name})
    })
});

const getVideoData = () : Array<VideoData> => {
    const dataBuffer = fs.readFileSync('data.json');
    return JSON.parse(dataBuffer.toString());
}

const io = require("socket.io")(server);

io.on('connection', ( socket: any ) => {
   socket.emit('sendMessage', (message: string) => {
       console.log(message)
   })

})
server.listen(port, () => {
    console.log(`Server is up on ${port}`)
})
