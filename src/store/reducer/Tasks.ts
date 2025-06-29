import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Learn Redux',
      enums.Priority.NORMAL,
      enums.Status.INPROGRESS,
      'Study the Redux toolkit for state management',
      1
    ),
    new Task(
      'Build Todo App',
      enums.Priority.LOW,
      enums.Status.INPROGRESS,
      'Create a todo application using React and Redux',
      2
    ),
    new Task(
      'Write Documentation',
      enums.Priority.HIGH,
      enums.Status.DONE,
      'Document the project setup and usage',
      3
    )
  ],
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { removeTask } = taskSlice.actions

export default taskSlice.reducer
