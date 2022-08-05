import { legacy_createStore as createStore } from 'redux'
import scoreReducer from './reducer'

const store = createStore(scoreReducer)

export default store
