import * as enums from '../../utils/enums/Task'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  term: string
  requirement: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  requirement: 'all'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { setFilterTerm } = FilterSlice.actions

export default FilterSlice.reducer
