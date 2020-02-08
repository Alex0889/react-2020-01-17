import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {reviewIdGen} from './middlewares/review-id-gen.middleware'
import {userIdGen} from './middlewares/user-id-gen.middleware'

const enhancer = applyMiddleware(userIdGen, reviewIdGen, logging)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
