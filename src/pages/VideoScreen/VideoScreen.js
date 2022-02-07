import React from "react";
import image from "../../assets/images/cat.gif";
import styles from "./VideoScreen.module.css";
import audio from "../../assets/audio/ruin.mp3";

const VideoScreen = () => {
  return (
    <div className={styles.background}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.audio}>
        <audio controls autoPlay>
          <source src={audio} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default VideoScreen;
