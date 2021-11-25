import React from "react";
import './Comment.css';

export const Comment = ( props ) => {

    const rootUrl = 'https://www.reddit.com/user/'
    const authorLink = `${rootUrl}${props.comment.author}`;

        return (
        <div className="commentDiv">
            <p>{props.comment.body}</p>
            <a target="_blank" href={authorLink} >{props.comment.author}</a>

        </div>)
    
}