"use client"

import styles from './BackgroundVideo.module.css';

export default function BackgroundVideo() {
  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback.jpg"
        className={styles.videoElement}
      >
        <source src="/Back2.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className={styles.overlay}></div>
    </div>
  );
}
