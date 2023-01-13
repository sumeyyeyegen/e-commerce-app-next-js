import { createSlice } from '@reduxjs/toolkit'

interface BasketState {
}

const initialState: BasketState = {

}

export const basketReducer: any = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
  },

  extraReducers: (builder) => {
  }
})

// export const { } = basketReducer.actions

export default basketReducer.reducer
