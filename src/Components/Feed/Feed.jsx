import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';
import { value_converter } from '../../Data';
import moment from 'moment';

function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const categoryId = category || "0"; // Default to "0" if undefined
      const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=500&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;

      const res = await fetch(videoList_url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setData(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (category !== undefined) {
      fetchData();
    }
  }, [category]);

  return (
    <div className="feed">
      {data.map((items,index) => (
        <Link to={`video/${items.snippet.categoryId}/${items.id}`} className="card">
          <img src={items.snippet.thumbnails?.medium?.url || 'https://via.placeholder.com/200'} alt="Video Thumbnail" />
          <h2>{items.snippet.title}</h2>
          <h3>{items.snippet.channelTitle}</h3>
          <p>{value_converter(items.statistics?.viewCount || 0)} views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
