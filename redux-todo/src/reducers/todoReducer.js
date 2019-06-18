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
        default:
            return state;
    }
}

export default todoReducer;