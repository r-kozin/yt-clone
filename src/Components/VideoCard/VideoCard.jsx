import React from "react";
import "./VideoCard.css";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  const { thumbnail, title, channel, timestamp } = props;

  if (!thumbnail) {
    return <div>Thumbnail not found</div>;
  }

  function timeSince(time) {
    let formattedTime = Date.parse(time);
    return formatDistanceToNowStrict(formattedTime);
  }

  return (
    <div className="videoCard">
        <div className="thumbnail">
      <Link to={`/video/${props.id}`}>
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
      </Link>
        </div>
      <div className="videoInfo">
        <div className="avatar">
          <img src="" alt="avatar" />
        </div>
        <div className="videoText">
        <Link to={`/video/${props.id}`} className="routerLink">
          <h4>{title}</h4>
        </Link>
          <p>{channel}</p>
          <p>Views • {timeSince(timestamp) + " ago"}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
