import React, {useEffect, useState} from 'react';
import Home from "../pages/Home";
import axios from "axios";
import {VideoData} from "../../type/type";

const HomeContainer = () => {
    const [data, setData] = useState<Array<VideoData>>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/video')
            .then((res) => {
                setData([...res.data]);
            })
        setLoading(false);

    }, [])
    return (
        <Home loading={loading}  data={data} />
    );
};

export default HomeContainer;
