import React, { useRef, useState } from 'react'
import { IoVolumeMute } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

const Player = (props) => {
  console.log(props.data);

  let videoRef=useRef()

  let {state, vid, title}=props.data

  let [play,setPlay]=useState()

  let playOrPause=()=>{

    videoRef.current.autoplay = true

    setPlay(!play)
    if(play==true){
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }

  }

let mute=()=>{
  videoRef.current.muted=true
}

let unmute=()=>{
  videoRef.current.muted=false
}

  return (
    <>
    <h1>Video Player</h1>
    <video onClick={playOrPause} ref={videoRef} src={vid} className='leftVideo' ></video>
    <h3>{title}</h3>
<div className='videoControls' >
<span className='muteItem' onClick={mute} > <IoVolumeMute />     </span>
<span className='unmuteItem' onClick={unmute} > <VscUnmute />    </span>
</div>
   
    </>
  )
}

export default Player