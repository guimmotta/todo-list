import * as enums from '../../utils/enums/Task'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  term?: string
  criteria: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  criteria: 'all'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilterCriteria: (state, action: PayloadAction<FilterState>) => {
      state.criteria = action.payload.criteria
      state.value = action.payload.value
    }
  }
})

export const { setFilterTerm, changeFilterCriteria } = FilterSlice.actions

export default FilterSlice.reducer
