import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {useServerRequest} from '../../hooks'
import { Comments, PostContent } from './components'
import styled from 'styled-components';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors'

const PostContainer = ({className}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest()
    const post = useSelector(selectPost);

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id))
    }, [dispatch, requestServer, params.id])

    return (
        <div className = {className}>
            <PostContent post = {post}/>
            <Comments comments = {post.comments} postId={post.id}/>
        </div>
    )
};

export const Post = styled(PostContainer)`
    margin: 40px;
    padding: 0 80px;
`