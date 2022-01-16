import { useEffect, React  } from "react";
import { checkMediaType } from "../../util/checkMediaType";
import ReactPlayer from 'react-player';
import { fetchComments } from "../../API/redditSlice";
import { useDispatch, useSelector } from "react-redux";
import { Comments } from "../Comments/Comments";
import './Post.css';
import loading from '../../images/loading-buffering.gif'


export const Post = (props) => {
    
    const dispatch = useDispatch();
    const mediaType = checkMediaType(props.post.url);
    const posts = useSelector(state => state.redditPosts.posts);
    const comments = useSelector(state => state.redditPosts.commentsByPost);
    const isPostsLoading = useSelector(state => state.redditPosts.isPostsLoading);
    const postLink = `https://www.reddit.com/${props.post.permalink}`;

    useEffect(() => dispatch(fetchComments(props.post.permalink)), [posts])

    
    const userUrl = `https://www.reddit.com/user/${props.post.author}`;
    
  

     if (isPostsLoading) {
        return <div className="loadingPostContainer"><img className="loading" src={loading} /></div>
     }

    
    return (
        <div className="postContainer">
            
            <a target="_blank" href={postLink}><h4>{props.post.title}</h4></a>
            
            <p>by <a target="_blank" href={userUrl}> {props.post.author}</a> </p>
             {mediaType === 'image' && <div><img src={props.post.url} /></div>}
             {mediaType === 'video' && <ReactPlayer style={{"max-width": "100%", "margin": "auto"}} url={props.post.url}/>}
             {props.post.text && <div className="text">{props.post.text}</div>}
             {props.post.media?.reddit_video?.fallback_url && <ReactPlayer style={{"max-width": "100%", "margin": "auto"}} url={props.post.media.reddit_video.fallback_url} controls={true} volume={0.5} />}
             {!mediaType && <a target="_blank" href={props.post.url}> Read More</a>}
             
            
            {comments.length > 0 && <Comments permalink={props.post.permalink}/>}
            
        </div>
    )
}
