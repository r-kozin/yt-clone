import React from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const VideoComponent = (props) => {
    console.log(props)
    console.log(props.video.id)
  return (
    <div className="videoComponent">
        <VideoPlayer id={props.video.id} />
    </div>
  )
}

export default VideoComponent;
