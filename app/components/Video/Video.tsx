import React from 'react'
import styles from './Video.module.css'


function Video() {
  return (
    <>
    <video width="1500" height="600" controls autoPlay>
        <source src="/afxazeti.mp4" type="video/mp4" />
        <track
            src="/afxazeti.mp4"
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