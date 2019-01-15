import * as ServerAPI from '../utils/api.js'

export const LOAD_POSTS = 'LOAD_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
})

export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
})