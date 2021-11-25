import { useState, React } from "react";
import { Comment } from "./Comment";
import { useSelector } from "react-redux";
import './Comments.css';

export const Comments = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        
        isVisible ? setIsVisible(false) : setIsVisible(true) ;
        
    }

    const comments = useSelector(state => state.redditPosts.commentsByPost);
    
    const { permalink } = props
    const relevantComments = comments.find(element => (Object.keys(element)[0]) === permalink);
    //console.log(relevantComments[permalink])
    //const numOfComments = relevantComments[permalink].length    
   
    if (relevantComments && isVisible) {
        return (
            <div>
                <div className="hideComments" onClick={changeVisibility}><i class='far fa-comment'></i>
                &nbsp; Hide Comments 
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
                <i class='far fa-comment'></i>&nbsp; Comments 
            </p>
           
        )
    }  
}
