import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { useServerRequest } from '../../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';

const CommentsContainer = ({className, comments, postId}) => {
    const [newComment, setNewComment] = useState('')
    const userId = useSelector(selectUserId)
    const dispatch = useDispatch();
    const serverRequest = useServerRequest();

    const onNewCommentAdd = (userId, postId, content) => {
        dispatch(addCommentAsync(serverRequest, userId, postId, content));
        setNewComment('')
    }

    return (
        <div className={className}>
            <div className = "new-comment">
                <textarea
                    name="comment"
                    //value={newComment}
                    placeholder='Комментарий...'
                    onChange={(target)=>{setNewComment(target.value)}}></textarea>
                <Icon
                    icon_id="fa-paper-plane-o"
                    size="18px"
                    margin="0 0 0 10px"
                    onClick={()=> onNewCommentAdd(userId, postId, newComment) }/>
            </div>
            <div className="comments">
                {comments.map(({id, author, content, publishedAt})=>(
                    <Comment
                        key={id}
                        postId={postId}
                        id={id}
                        author={author}
                        content={content}
                        publishedAt={publishedAt}
                    />
                ))}
            </div>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`
    width: 580px;
    margin: 0 auto;

    & .new-comment {
        display: flex;
        width: 100%;
        margin: 20px 0 0;
    }

    & .new-comment textarea {
        width: 550px;
        height: 120px;
        font-size:18px;
        resize: none;
    }
`
