// reducer is func, initialState is object
export const createStore = (reducer, initialState) => {
    let state = initialState;

    // return current state
    const getState = () => state;

    // change state w/ param {action: "", payload: ""}
    const dispatch = action => {
        state = reducer(state, action)

    }

    return { getState, dispatch };
};

// takes state {} and action {type: "STRING", payload: []}
export const reducer = (state, action) => {
    switch (action.type) {
    // saves user name
        case 'UPDATE_BOARD':
            return {
            ...state,
            name: action.payload,
        };     
        default:
            return state;
    }
}









