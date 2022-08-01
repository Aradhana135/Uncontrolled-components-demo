import React, { useRef, useState } from 'react'

const VedioPlayer = () => {
    const [isPlaying,setIsPlaying]=useState(false)
    const ref=useRef(null)
    const handlePlay=()=>{
        const nextIsPlaying=!isPlaying
        setIsPlaying(nextIsPlaying)
        if(nextIsPlaying)
        ref.current.play()
        else
        ref.current.pause()
    }
  return (
    <>
    
    <div>
    <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"/>
          </video>
          </div>
          <div  style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
    <button onClick={handlePlay}>
        {isPlaying?"Play":"Pause"}
    </button>
    </div>
    </>
  )
}

export default VedioPlayer