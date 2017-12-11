import { combineReducers } from 'redux';
import LibrariesReducer from './LibrariesReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibrariesReducer ,
    selectedId: SelectionReducer
});