import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const videoId = useParams()
  console.log(videoId)
  return (
    <div className="videoPage">
<iframe 
  width="560" 
  height="315" 
  src={`https://www.youtube.com/embed/${videoId.id}`}
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allowfullscreen="allowfullscreen"></iframe>
    </div>
  );
};

export default VideoPage;
