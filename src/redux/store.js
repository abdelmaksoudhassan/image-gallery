import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './image.redcer'; 

const store = configureStore({
  reducer:{
    image: imageReducer
  }
})

export default store