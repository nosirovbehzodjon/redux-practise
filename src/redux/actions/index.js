import { ADD_TODO, DECREMENT, INCREMENT, RESET } from "../type";
//counter

export const increment = (data) => {
    return {
        type: INCREMENT,
        payload: data,
    };
};

export const decrement = (data) => {
    return {
        type: DECREMENT,
        payload: data,
    };
};

export const reset = () => {
    return {
        type: RESET,
        payload: 0,
    };
};

//todos

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    };
};
