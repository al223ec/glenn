import {
    SELECT_GLENN_SOUND_ACTION_TYPE
} from '../actions/types'; 

const INITIAL_STATE = {
    selectedGlennSound: null,
}; 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_GLENN_SOUND_ACTION_TYPE:
            return {
                ...state,
                selectedGlennSound: action.payload,
            }; 
        default: 
         return state; 
    }
};

