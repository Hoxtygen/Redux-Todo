import * as types from "../actions/todoAction"
import dummyTodo from "../dummyTodo";

function todoReducer(state = dummyTodo, action) {
    switch (action.type) {
        case (types.ADD_TODO):
            return [...state, action.payload];
        case (types.MARK_COMPLETE):
            return state.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: true };
                    }
                    return todo;
                });
        case (types.DELETE_TODO): 
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}

export default todoReducer;