import React from 'react'
import styles from './Video.module.css'


function Video() {
  return (
    <>
    <video width="320" height="240" controls autoPlay className={styles.vid}>
        <source src="/valentinoba.mp4" type="video/mp4" />
        <track
            src="/valentinoba.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
        />
        Your browser does not support the video tag.
    </video>
    </>
  )
}

export default Video