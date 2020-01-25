import {createStore, combineReducers} from 'redux'
import info from './reducers'

const reducers = combineReducers({
    info
})

export const store = createStore(reducers)

