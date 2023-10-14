import { transformComment } from "../transformers"

export const getComments = (postIs) =>
    fetch(`http://localhost:3005/comments?postId=${postIs}`)
        .then((loadedComments)=>loadedComments.json())
        .then((loadedComments) => loadedComments.map(transformComment))
