import React, { useEffect, useState } from 'react';
import axios from "axios";
import io from "socket.io-client";

import Upload from "../pages/Upload";

// @ts-ignore
const socket = io();


const UploadContainer = () => {
    const [localFile, setLocalFile] = useState('');
    const [file, setFile] = useState('');
    const [fileTitle, setFileTitle] = useState('Your title')
    const [fileDescription, setFileDescription] = useState('Your Description')
    const onSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        socket.emit('sendMessage', fileTitle)
        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const handleFileChange = ({target: {files}}: any) => {
        const file = files[0];
        setLocalFile(URL.createObjectURL(file));
        setFile(file);
    }

    const handleTitleChange = ({target: {value}}: any) => {
        setFileTitle(value);
    }

    const handleDescChange = ({target: {value}}: any) => {
        setFileDescription(value);
    }
    useEffect(() => {
        setLocalFile('');
        setFile('');
        setFileTitle('Your title');
        setFileDescription('Your Description');

    }, [])
    return (
       <Upload onSubmit={onSubmit} fileTitle={fileTitle} fileDescription={fileDescription} handleFileChange={handleFileChange}
       handleDescChange={handleDescChange} handleTitleChange={handleTitleChange} localFile={localFile} />
    );
};

export default UploadContainer;
