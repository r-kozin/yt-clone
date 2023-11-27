import React from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Recommended from '../RecommendedVideos/Recommended'
import './VideoComponent.css'

const VideoComponent = (props) => {
  return (
    <div className="videoComponent">
        <VideoPlayer id={props.video.id} />
        <Recommended />
    </div>
  )
}

export default VideoComponent;
