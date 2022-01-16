import { useState, React } from "react";
import { Comment } from "./Comment";
import { useSelector } from "react-redux";
import './Comments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';

export const Comments = (props) => {

    const commentIcon = <FontAwesomeIcon icon={faComment} className="commentIcon" />


    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        
        isVisible ? setIsVisible(false) : setIsVisible(true) ;
        
    }

    const comments = useSelector(state => state.redditPosts.commentsByPost);
    
    const { permalink } = props
    const relevantComments = comments.find(element => (Object.keys(element)[0]) === permalink);
    let numOfComments;

    if(relevantComments && relevantComments.hasOwnProperty(permalink)){
        console.log(relevantComments[permalink]);
        numOfComments = relevantComments[permalink].length
    }    
   
   
    if (relevantComments && isVisible) {
        return (
            <div>
                <div className="hideComments" onClick={changeVisibility}><span>{commentIcon}</span>
                &nbsp;Hide Comments&nbsp;({numOfComments})
                </div>

                <div className="commentsDiv">
                    {relevantComments[permalink].map(comment => <Comment comment={comment} />)}
                </div>
            
            </div>
        )
    }
    
    else {

        return (
            <p className="showComments" 
                onClick={changeVisibility}> 
                <span>{commentIcon}</span>&nbsp;Comments&nbsp;({numOfComments})
            </p>
           
        )
    }  
}
