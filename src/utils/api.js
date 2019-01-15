const api = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'leituraProject'
}

//get gategories
export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

//add post
export const postPostAPI = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post)
  }).then(res => res.json())

//get posts
export const getPostsAPI = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

//get post id
export const getPostDetailAPI = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .catch(res => console.log(res))

//get /posts/:id/comments
export const getCommentsAPI = (parentId) =>
  fetch(`${api}/posts/${parentId}/comments`, { headers })
    .then(res => res.json())

// delete /posts/:id
export const removePostAPI = (postID) =>
  fetch(`${api}/posts/${postID}`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(postID)
  }).then(res => res.json())

//edit post
export const editPostAPI = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(post)
  }).then(res => res.json())

//add comments
export const addCommentAPI = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())

// vote post
export const votePostAPI = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: headers,
    // body: JSON.stringify(post)
  }).then(res => res.json())

  // vote post
export const voteCommentAPI = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: headers,
    body: {option}
  }).then(res => res.json())


// edit comment
export const editCommentAPI = (commentId, params) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(params)
  }).then(res => res.json())


// delete comment
export const removeCommentAPI = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: headers,
  }).then(res => res.json())