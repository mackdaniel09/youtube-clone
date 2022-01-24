import React from "react";
import "./RecommendVideos.css";
import VideoCard from "./VideoCard";

function RecommendVideos() {
  return (
    <div className="recommendVidoes">
      <h1>Recommended</h1>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="this is a youtube video"
          views="1.2M views"
          timestamp="3 days ago"
          channelImage="https://source.unsplash.com/random/100x100"
          channel="Youtube Clone"
          image="https://source.unsplash.com/random/300x300"
        />
        <VideoCard
          title="this is a youtube video"
          views="1.2M views"
          timestamp="3 days ago"
          channelImage="https://source.unsplash.com/random/100x101"
          channel="Youtube Clone"
          image="https://source.unsplash.com/random/300x301"
        />
        <VideoCard
          title="this is a youtube video"
          views="1.2M views"
          timestamp="3 days ago"
          channelImage="https://source.unsplash.com/random/100x102"
          channel="Youtube Clone"
          image="https://source.unsplash.com/random/300x302"
        />
        <VideoCard
          title="this is a youtube video"
          views="1.2M views"
          timestamp="3 days ago"
          channelImage="https://source.unsplash.com/random/100x103"
          channel="Youtube Clone"
          image="https://source.unsplash.com/random/300x303"
        />
        <VideoCard
          title="this is a youtube video"
          views="1.2M views"
          timestamp="3 days ago"
          channelImage="https://source.unsplash.com/random/100x104"
          channel="Youtube Clone"
          image="https://source.unsplash.com/random/300x304"
        />
        <VideoCard
          title="this is a youtube video"
          views="1.2M views"
          timestamp="3 days ago"
          channelImage="https://source.unsplash.com/random/100x105"
          channel="Youtube Clone"
          image="https://source.unsplash.com/random/300x305"
        />
      </div>
    </div>
  );
}
export default RecommendVideos;
