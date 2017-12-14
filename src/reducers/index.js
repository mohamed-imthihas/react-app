import {combineReducers} from 'redux';
import common from './commonReducer';
import game from './gameReducer';
export default combineReducers({
    common,
    game
})