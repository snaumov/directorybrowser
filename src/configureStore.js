import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import listing from './frontend/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    listing,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
}