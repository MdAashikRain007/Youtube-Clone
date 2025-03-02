import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { API_KEY, value_converter } from "../../Data";
import { Link } from 'react-router-dom'

function Recommended({ categoryId }) {
    const [apiData, setApiData] = useState([]);
    
    const fetchData = async () => {
        const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=70&key=${API_KEY}`;
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className='Recommmended'>
            {apiData.map((items, index) => {
                return (
                   
                    <Link to={`/video/${items.snippet.categoryId}/${items.id}`}key={index} className="side-video-list">
                        <img src={items.snippet.thumbnails.medium.url} alt="thumbnail" />
                        <div className="vid-info">
                            <h4>{items.snippet.title}</h4>
                            <p>{items.snippet.channelTitle}</p>
                            <p>{value_converter(items.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended