import React from "react";
import "./VideoCard.css";

const VideoCard = (props) => {
    const { thumbnail, title, channel, timestamp } = props;

    if (!thumbnail) {
        return <div>Thumbnail not found</div>;
    }

  return (
    <div className="videoCard">
      <div className="thumbnail">
        <img src={thumbnail} alt="thumbnail" className="thumbnail"/>
      </div>
      <div className="videoInfo">
        <div className="avatar">
          <img src="" alt="avatar" />
        </div>
        <div className="videoText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>Views • {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
