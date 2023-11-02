import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/actions/commentActions";
import user from "../../assets/user.png";
import "./style.css";
function CommentPost({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  return (
    <div>
      {comments?.map((comment) => (
        //   console.log(comment),
        <div key={comment.id}>
          <div className="comment_avatar">
            <img src={user}></img>
            <p>{comment.email}</p>
          </div>
          <div className="comment_content">
            <p>{comment.body}</p>
            <a href="#">Reply to</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentPost;
