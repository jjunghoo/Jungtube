import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
    const displayType = props.display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => props.onVideoClick(props.video)}>
            <div className={`${styles.video} ${displayType}`}>
                <img className={`${styles.thumbnail} ${displayType}`} src={props.video.snippet.thumbnails.medium.url} 
                    alt="video thumbnail"
                />
                <div className={`${styles.metadata} ${displayType}`}>
                    <p className={styles.title}>{props.video.snippet.title}</p>
                    <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )};

export default VideoItem;