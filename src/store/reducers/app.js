const initialState = {
    dark_mode: true
};

export default (state = initialState, action) => {

    switch(action.type) {

        case 'TOGGLE_DARK_MODE': 

            return {
                ...state,
                dark_mode: !state.dark_mode
            };

        default:
            return state;
    }

}