import { useEffect, useLayoutEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {useServerRequest} from '../../hooks'
import { Comments, PostContent, PostForm } from './components'
import styled from 'styled-components';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors'

const PostContainer = ({className}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const isCreating = useMatch('/post');
    const isEditing = useMatch('/post/:id/edit');
    const requestServer = useServerRequest()
    const post = useSelector(selectPost);

    useLayoutEffect(()=>{
       dispatch(RESET_POST_DATA);
    },[dispatch, isCreating])

    useEffect(() => {
        if (isCreating) {
            return;
        }

        dispatch(loadPostAsync(requestServer, params.id))
    }, [dispatch, requestServer, params.id, isCreating])

    return (
        <div className = {className}>
            {isCreating || isEditing?
                (<PostForm post={post}>
                </PostForm>)
                :
                (
                <>
                    <PostContent post = { post}/>
                    <Comments comments = {post.comments} postId={post.id}/>
                </>)
            }
        </div>
    )
};

export const Post = styled(PostContainer)`
    margin: 40px;
    padding: 0 80px;
`
