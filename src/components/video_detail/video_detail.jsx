import { useState } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = (props) => {
    const [showReply, setShowReply] = useState(false);

    const onReply = () => {
        setShowReply(!showReply);
    };

    const styleType = showReply === false ? styles.displayNone : styles.displayBlock;
    return(
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
        <h2 className={styles.videoTitle}>{props.video.snippet.title}</h2>
        <div className={styles.channelTitle}>
            {props.channels.map(channel => (
                <img className={styles.channelImg} key={channel.id} src={channel.snippet.thumbnails.default.url} alt="channelImg" />
            ))}
            <div className={styles.channelInfo}>
                <p>{props.video.snippet.channelTitle}</p>
                {props.channels.map(channel => (
                    <p className={styles.subscriberCount} key={channel.id}>구독자 {channel.statistics.subscriberCount}명</p>
                ))}
            </div>
        </div>
        <pre className={styles.description}>{props.video.snippet.description}</pre>
        <div className={styles.comment}>
            <h3>댓글</h3>
        </div>
        <div className={styles.replys}>
            {props.comments.map(comment => (
                <div className={styles.reply} key={comment.etag}>
                    <img className={styles.authorProfileImg} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="authorProfileImageUrl"/>
                    <div className={styles.reply__content}>
                        <p className={styles.authorDisplayName} key={comment.snippet.topLevelComment.snippet.authorChannelId.value}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                        <p className={styles.textOriginal}>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                        <i className="fas fa-thumbs-up"></i>
                        <span className={styles.likeCount}>{comment.snippet.topLevelComment.snippet.likeCount}</span>
                        <p className={styles.showReplies} onClick={onReply}>댓글 더보기</p>
                        <div>
                            {comment.replies && comment.replies.comments.map(reply => ( 
                                (comment.id === reply.snippet.parentId ? (
                                <div className={`${styleType}`} key={reply.id}>
                                    <div className={styles.replyInfo}>
                                        <img className={styles.replies__authorProfileImg} src={reply.snippet.authorProfileImageUrl} alt="authorProfileImageUrl"/>
                                        <div className={styles.replies__content}>
                                            <p className={styles.replies_authorDisplayName}>{reply.snippet.authorDisplayName}</p>
                                            <p className={styles.replies_textOriginal}>{reply.snippet.textOriginal}</p>
                                            <i className="fas fa-thumbs-up"></i>
                                            <span className={styles.likeCount}>{reply.snippet.likeCount}</span>
                                        </div>
                                    </div>   
                                </div>) : null)
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)};

export default VideoDetail;