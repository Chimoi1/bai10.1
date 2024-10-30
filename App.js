import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Đảm bảo import đúng store
import TodoApp from './TodoApp';

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default App;
