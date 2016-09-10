import callApi from '../../util/apiCaller'

// Export Constants
export const ADD_POST = 'ADD_POST'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POST = 'DELETE_POST'

function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  }
}

function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts))
    })
  }
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)))
  }
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)))
  }
}
