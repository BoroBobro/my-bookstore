import React from 'react'
const SingleComment = ({ comment }) => (
    <li>
        <strong>{comment.author}</strong>: {comment.comment} <span>({comment.rate}/5)</span>
    </li>
);

export default SingleComment;