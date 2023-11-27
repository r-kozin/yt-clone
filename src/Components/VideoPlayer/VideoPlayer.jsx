import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <iframe
        width="1120"
        height="630"
        src={`https://www.youtube.com/embed/${props.id}?autoplay=1`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share"
        allowFullScreen="allowfullscreen"
      ></iframe>
      <div className="video-info">
        <h4>Video Title</h4>
        <p>Views • Timestamp</p>
        <p>Channel</p>
        <p>Description</p>
      </div>
    </div>

  );
};

export default VideoPlayer;
