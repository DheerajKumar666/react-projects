import React from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";


const VideoItem = (props) => {
  console.log(props.data.video);

  let {setVid, setTitle}=props.data

 let {thumbnailUrl, title, views, videoUrl, subscriber}=props.data.video

 let changeVideo=()=> {
   setVid(videoUrl)
   setTitle(title)
 }

  return (
    <div className='videoItem' >
      <img onClick={changeVideo} src={thumbnailUrl} alt={title} className='rightImage' />
      <p> <BsFillEyeFill /> {views} </p>
       <p> <RiUserFollowFill />  {subscriber}     </p>
      </div>
  )
}

export default VideoItem