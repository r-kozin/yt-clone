import React from "react";
import "./Recommended.css";
import { exampleData } from "../../../exampleData";
import VideoCard from "../VideoCard/VideoCard";
import { useParams } from "react-router-dom";

const Recommended = () => {
    const currentVideo = useParams()
  return (
    <div className="recommended-videos">
      <h3>Recommended Videos:</h3>
      <div className="video-list">
      {exampleData.items.map((video) => {
        if (video.id.kind !== "youtube#video") {
          return null;
        }
        if (video.id.videoId === currentVideo.id) {
          return null;
        }
        return (
          <VideoCard
            key={video.id.videoId}
            id={video.id.videoId}
            thumbnail={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            timestamp={video.snippet.publishedAt}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Recommended;
