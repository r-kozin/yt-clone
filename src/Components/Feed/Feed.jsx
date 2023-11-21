import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Feed.css";
import thumbnail from "../../assets/images/thumbnail.jpg";
import { exampleData } from "../../../exampleData";

const Feed = () => {
  let videoIds = []; //array of video ids
  exampleData.items.forEach((item) => { //loop through each item in exampleData
    if (item.id.kind === "youtube#video") {
      videoIds.push(item.id.videoId); //push videoId to videoIds array
    }
  });
  //make a request to the youtube api to get the video details for each videoId

  return (
    <div className="feed">
      {exampleData.items.map((video) => {
        if (video.id.kind !== "youtube#video") {
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
  );
};

export default Feed;
