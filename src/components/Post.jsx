import React, { useState, useEffect } from 'react';
import '../assets/Post.css';
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

function Post(props) {
  const calculateTimeLeft = (date) => {
    const targetDate = new Date(date);
    const now = new Date();
    const difference = now - targetDate;
    return Math.floor(difference / (1000 * 60 * 60));
  };

  const [hourAgo, setHourAgo] = useState(calculateTimeLeft(props.date));
  const [liked, setLiked] = useState(props.initialLiked);

  useEffect(() => {
    const timer = setInterval(() => {
      setHourAgo(calculateTimeLeft(props.date));
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, [props.date]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-author">
        <img src={props.authorImg} alt="Author" />
        <div>
          <h1>{props.userName}</h1>
          <small>{hourAgo} hours ago</small>
        </div>
      </div>
      <p>{props.content}</p>
      <img src={props.postImg} alt="Post" />
      <div className="post-stats">
        <span>{props.comments} comments · {props.shares} shares</span>
      </div>
      <div className="post-activity">
        <div className="post-activity-link" onClick={toggleLike} style={{ cursor: 'pointer' }}>
          {liked ? <BiSolidLike size={28} /> : <BiLike size={28} />}
          <span>  Like</span>
        </div>
        <div className="post-activity-link">
          <FaRegCommentDots size={28} />
          <span>  Comment</span>
        </div>
        <div className="post-activity-link">
          <FaRegShareSquare size={28} />
          <span>  Share</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
