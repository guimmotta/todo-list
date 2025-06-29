import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './reducer/Tasks'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
