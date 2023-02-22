import { ADD_TODO, DECREMENT, INCREMENT, RESET } from "../type";

const initialState = {
    count: 0,
    todos: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        //counter
        case INCREMENT:
            return {
                count: state.count + action.payload,
            };
        case DECREMENT:
            return {
                count: state.count - action.payload,
            };
        case RESET:
            return {
                count: action.payload,
            };
        //todos
        case ADD_TODO:
            return {};
        default:
            return state;
    }
};
