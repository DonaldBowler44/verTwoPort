import React, { useRef, useEffect } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./audioPlayer.css";
import FutWar from "../../audio/FutureWar.mp3"

const Player = () => {
    const audioRef = useRef(null);
  
    useEffect(() => {
      audioRef.current.audio.current.play();
    }, []);
  
    return (
      <AudioPlayer
        className='AudioStyle'
        ref={audioRef}
        autoPlay
        autoPlayAfterSrcChange
        src={FutWar}
        volume={0.5}
        onPlay={e => console.log("onPlay")}
        // other props
      />
    );
  }
  
  export default Player;

// const Player = () => (
//     <AudioPlayer
//         className='AudioStyle'
//         autoPlay={true}
//         src={FutWar}
//         volume={0.5}
//         onPlay={e => console.log("onPlay")}
//         //other props
//         />
// );

// export default Player;
