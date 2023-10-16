import { useEffect, useState } from "react";
import styled from "styled-components"
import { useServerRequest } from "../../hooks";
import { PostCard, Pagination} from './components'
import { PAGINATION_LIMIT } from "../../bff/constants";
import { getLastPageFromLinks } from './utils'

const MainContainer = ({className}) => {
    const requestServer = useServerRequest();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(()=>{
        requestServer('fetchPosts', page, PAGINATION_LIMIT).then(({res: {posts, links}})=>{
            setPosts(posts);
            //console.log(getLastPageFromLinks(links));
            setLastPage(getLastPageFromLinks(links));
        });
    },[requestServer, page]);

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
            {lastPage > 1 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
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