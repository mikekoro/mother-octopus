//import axios from 'axios';

export const toggleDarkMode = () => async (dispatch) => {
    dispatch({
        type: 'TOGGLE_DARK_MODE'
    });
}