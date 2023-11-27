import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoComponent from "../../Components/VideoComponent/VideoComponent";
import "./VideoPage.css";

const VideoPage = () => {
  const videoId = useParams()
  console.log(videoId)
  return (
    <div className="videoPage">
      <Sidebar />
      <VideoComponent video={videoId} />
    </div>
  );
};

export default VideoPage;
