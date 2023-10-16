import { useEffect, useState } from "react";
import styled from "styled-components"
import { useServerRequest } from "../../hooks";
import { PostCard} from './components'

const MainContainer = ({className}) => {
    const requestServer = useServerRequest();
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        requestServer('fetchPosts').then((posts)=>{
            setPosts(posts.res);
            console.log('Main page')
            console.log(posts)
            console.log(posts.res)

        });
    },[requestServer]);

    return (
        <div className={className}>
            <div className="post-list">
                {
                    posts.map(({id, title, imageUrl, publishedAt, commentsCount})  => <PostCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    imageUrl={imageUrl}
                                    publishedAt={publishedAt}
                                    commentsCount={commentsCount} />
                    )
                }
            </div>
        </div>
    );
}


export const Main = styled (MainContainer)`
& .post-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}

`
