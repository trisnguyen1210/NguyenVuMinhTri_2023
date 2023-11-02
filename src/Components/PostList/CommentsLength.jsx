import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/actions/commentActions";

function CommentsLength({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const commentsLength = comments.length;
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  return { comments, commentsLength };
}

export default CommentsLength;
