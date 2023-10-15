import { useRef } from 'react';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks';

const PostFormContainer = ({className,
        post: {id, title, imageUrl, content, publishedAt}}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const requestServer = useServerRequest();

    const onSave = () => {
        const newImageUrl = imageRef.current.value;
        const newTitle = titleRef.current.value;
        const newContent = sanizeContent(contentRef.current.innerHTML);


        dispatch(savePostAsync(requestServer, {
                id,
                image: newImageUrl,
                title: newTitle,
                content: newContent}))
            .then(()=>{  navigate(`/post/${id}`)});

        console.log(newImageUrl, newTitle, newContent);
    }

    return (
        <div className={className}>
            <Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..."/>
            <Input ref={titleRef} defaultValue={title} placeholder="Заголовок..."/>
            <SpecialPanel publishedAt={publishedAt} margin="20px 0" editButton={
                <Icon
                    icon_id="fa-floppy-o"
                    size="21px"
                    margin="0 10px 0 0"
                    onClick={onSave}/>
            }/>
            <div
                ref={contentRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                className="post-text">{content}</div>
        </div>
    )
}

export const PostForm = styled(PostFormContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .post-text {
        font-size: 18px;
        white-space: pre-line;
    }
`
