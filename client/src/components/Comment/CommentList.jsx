import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    console.log(data);
    setComments(data);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
