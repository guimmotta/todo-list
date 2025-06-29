import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './reducers/tasks'
import filterReducer from './reducers/filters'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
