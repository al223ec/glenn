import { combineReducers } from 'redux';
import glennSounds from './glenn_sounds_reducer'; 
import selectedValues from './selection_reducers';

export default combineReducers({
    glennSounds, selectedValues
});
