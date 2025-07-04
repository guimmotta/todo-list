import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      title: 'Learn Redux',
      priority: enums.Priority.NORMAL,
      status: enums.Status.INPROGRESS,
      description: 'Study the Redux toolkit for state management',
      id: 1
    },
    {
      title: 'Build Todo App',
      priority: enums.Priority.LOW,
      status: enums.Status.INPROGRESS,
      description: 'Create a todo application using React and Redux',
      id: 2
    },
    {
      title: 'Write Documentation',
      priority: enums.Priority.HIGH,
      status: enums.Status.DONE,
      description: 'Document the project setup and usage',
      id: 3
    }
  ]
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const TaskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (TaskIndex >= 0) {
        state.itens[TaskIndex] = action.payload
      }
    }
  }
})

export const { removeTask, editTask } = taskSlice.actions

export default taskSlice.reducer
