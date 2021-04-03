import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = (props) => (
    <section className={styles.detail}>
        <iframe
            className={styles.video}  
            type="text/html" 
            title="youtube video player"
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${props.video.id}?autoplay=1`}
            frameBorder="0" 
            allowFullScreen>
        </iframe>
        <h2>{props.video.snippet.title}</h2>
        <div className={styles.channelTitle}>
            {props.channels.map(channel => (
                <img className={styles.channelImg} key={channel.id} src={channel.snippet.thumbnails.default.url} alt="channelImg" />
            ))}
            <div className={styles.channelInfo}>
                <p>{props.video.snippet.channelTitle}</p>
                {props.channels.map(channel => (
                    <p className={styles.subscriberCount} key={channel.id}>{channel.statistics.subscriberCount}</p>
                ))}
            </div>
        </div>
        <pre className={styles.description}>{props.video.snippet.description}</pre>
    </section>
);

export default VideoDetail;