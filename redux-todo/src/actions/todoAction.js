import uuid from "uuid"
export const ADD_TODO = "ADD_TODO";

export const addTodo = value => {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            completed: false,
            value
        }
    }
}