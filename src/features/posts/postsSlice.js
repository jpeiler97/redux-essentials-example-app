// Import createSlice
import { createSlice } from '@reduxjs/toolkit'

// Define initial state
const initialState = [
  { id: '1', title: 'First post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

//Create slice postsSlice and pass initialState to the slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

//Export postsSlice reducer function
export default postsSlice.reducer
