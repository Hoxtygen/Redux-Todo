import React from 'react';
import './App.css';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers/todoReducer";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { loadState, saveState} from "./localStorage/localStorage";


function App() {
  const persistedState = loadState()
  const combinedReducer = combineReducers({
    todos: todoReducer,
    
  })

  const store = createStore(
    combinedReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    store.subscribe(() => {
      saveState({
        todos: store.getState().todos
      })
    })
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Welcome to Redux-Todo Application.</h1>
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
