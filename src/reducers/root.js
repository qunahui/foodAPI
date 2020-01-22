import { combineReducers } from 'redux'
import authReducer from './auth'
import recipesReducer from './recipes'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    recipes: recipesReducer,
})
export default createRootReducer