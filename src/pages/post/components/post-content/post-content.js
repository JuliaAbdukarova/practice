import styled from 'styled-components';
import { Icon, H2 } from '../../../../components';

const PostContentContainer = ({className, post: {id, title, imageUrl, content, publishedAt}}) => {

    return (
        <div className={className}>
            <img src={imageUrl} alt={title}/>
            <H2>{title}</H2>
            <div className="special-panel">
                <div className="published-at">
                    <Icon
                        icon_id="fa-calendar-o"
                        size="18px"
                        margin="0 6px 0 0"
                        onClick={()=>{}}/>
                    {publishedAt}
                </div>
                <div className="buttons">
                    <Icon className = "user-data" icon_id="fa-pencil-square-o" size="21px" margin="0 10px 0 0" onClick={()=>{}}/>
                    <Icon className = "user-data" icon_id="fa-trash-o" size="21px" onClick={()=>{}}/>
                </div>
            </div>
            <div className="post-text">{content}</div>
        </div>
    )
}

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: -20px 0 20px;
    }

    & .published-at{
        display: flex;
        font-size: 18px;
    }

    & i {
        top: -1px;
        posision: relative;
    }

    & .buttons {
        display: flex;
    }
    & .post-text {
        font-size: 18px;
    }
`
