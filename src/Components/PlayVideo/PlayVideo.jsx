import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/Like.png";
import share from "../../assets/Share.png";
import Dislike from "../../assets/Dislike.png";
import save from "../../assets/Save.png";
import Carry from "../../assets/Profile-logo.png";
import { API_KEY, value_converter } from "../../Data";
import moment from "moment";

function PlayVideo({ videoId }) {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [comments, setComments] = useState([]); // ✅ Fix: Added missing state for comments

    const fetchVideoData = async () => {
        try {
            const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videoDetails_url);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                setApiData(data.items[0]);
            }
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    const fetchChannelData = async () => {
        if (!apiData) return;
        try {
            const channel_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            const response = await fetch(channel_url);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                setChannelData(data.items[0]);
            }
        } catch (error) {
            console.error("Error fetching channel data:", error);
        }
    };

    const fetchComments = async () => {
        try {
            const comments_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=50&key=${API_KEY}`;
            const response = await fetch(comments_url);
            const data = await response.json();
            if (data.items) {
                setComments(data.items);
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData) {
            fetchChannelData();
            fetchComments();
        }
    }, [apiData]);

    return (
        <div className="play-video">
            <iframe
                title="YouTube Video"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apiData?.snippet?.title || "Title here"}</h3>

            <div className="play-video-info">
                <p>
                    {apiData ? value_converter(apiData.statistics.viewCount) : "2M"} Views &bull;{" "}
                    {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "4 days ago"}
                </p>
                <div>
                    <span><img src={like} alt="like" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
                    <span><img src={Dislike} alt="dislike" /></span>
                    <span><img src={save} alt="save" /></span>
                    <span><img src={share} alt="share" /></span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={channelData?.snippet?.thumbnails?.default?.url || ""} alt="profile" />
                <div>
                    <p>{apiData?.snippet?.channelTitle || ""}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apiData?.snippet?.description?.slice(0, 250) || "Description Here"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102} Comments</h4>

                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div className="comments" key={index}>
                            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="profile" />
                            <div>
                                <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                                <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                <div className="comment-action">
                                    <img src={like} alt="like" />
                                    <span>{value_converter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={Dislike} alt="dislike" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
            </div>
        </div>
    );
}

export default PlayVideo;
