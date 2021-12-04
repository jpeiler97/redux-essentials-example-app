import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'

//Created Redux Store
export default configureStore({
  //Add posts reducer to store
  reducer: {
    posts: postsReducer,
  },
})
