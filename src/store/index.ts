import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './reducer/tasks'
import filterReducer from './reducer/filters'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
