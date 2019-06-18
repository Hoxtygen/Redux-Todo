import * as types from "../actions/todoAction"
import dummyTodo from "../dummyTodo";

function todoReducer(state = dummyTodo, action) {
    switch (action.type) {
        case (types.ADD_TODO):
            return [...state, action.payload];    
        default:
            return state;
    }
}

export default todoReducer;