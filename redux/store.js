import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Đảm bảo import đúng reducer từ file todoSlice

const store = configureStore({
  reducer: {
    todos: todoReducer, // Đảm bảo key "todos" khớp với tên trong todoSlice
  },
});

export default store;
