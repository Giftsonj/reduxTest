

const initialState = {

    count: 0,
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    console.log(newState)
    switch (action.type) {
        case "COUNT_CHANGE":
            // return Object.assign({}, newState, { count: initialState.count+action.payload });
            return Object.assign({}, newState, { count: newState.count + 1 });

        case "COUNT_DECREASE":
            return Object.assign({}, newState, { count: newState.count - 1 })
        default:
            return newState;
    }
}

export default reducer;