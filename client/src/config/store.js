
import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export const store = createStore(
    rootReducer,
    // applyMiddleware(thunk)
    applyMiddleware(thunk, createLogger())
  )