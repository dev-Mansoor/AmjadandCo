import {createStore} from 'redux'
import { rootReducer } from './combineRed';

let store = createStore(rootReducer);


export default store;