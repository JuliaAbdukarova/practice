import { useEffect, useMemo, useState } from "react";
import styled from "styled-components"
import { useServerRequest } from "../../hooks";
import { PostCard, Pagination, Search} from './components'
import { PAGINATION_LIMIT } from "../../bff/constants";
import { debounce, getLastPageFromLinks } from './utils'


const MainContainer = ({className}) => {
    const requestServer = useServerRequest();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [shouldSearch, setShouldSearch] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');

    useEffect(()=>{
        requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(({res: {posts, links}})=>{
            setPosts(posts);
            //console.log(getLastPageFromLinks(links));
            setLastPage(getLastPageFromLinks(links));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[requestServer, page, shouldSearch]);

    const startDelayedSearch = useMemo (()=>debounce(setShouldSearch, 2000),[])

    const onSearch = ({target}) => {
        setSearchPhrase(target.value);
        startDelayedSearch(!shouldSearch);
    }

    return (
        <div className={className}>
            <div className="post-and-search">
                <Search searchPhrase={searchPhrase} onChange={onSearch}/>
                {
                posts.length > 0 ?
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

                :
                <div className="no-posts-found">
                    Статьи не найдены.
                </div>
                }
            </div>
            {lastPage > 1 && posts.length > 0 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
        </div>
    );
}


export const Main = styled (MainContainer)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .post-list {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 20px 80px;

    & .no-posts-found {
        font-size: 18px;
        text-align: center;
    }
}
`
