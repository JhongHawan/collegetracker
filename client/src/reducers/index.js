import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer
    // Here you can have as many reducers as you want
    // Like authReducer, todoReducer, etc. 
}); 