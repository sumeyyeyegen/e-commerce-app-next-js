import { createSlice } from '@reduxjs/toolkit'

interface CategoryState {
}

const initialState: CategoryState = {

}

export const categoryReducer: any = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
  },

  extraReducers: (builder) => {
  }
})

// export const { } = categoryReducer.actions

export default categoryReducer.reducer
