import uuid from "uuid"
export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETE = 'MARK_COMPLETE';


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

export function markComplete(id) {
    return {
      type: MARK_COMPLETE,
      payload: id,
    };
  }