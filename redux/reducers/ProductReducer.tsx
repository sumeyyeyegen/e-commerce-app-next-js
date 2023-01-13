import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchWrapper } from '../../helpers/wrapper';

interface ProductState {
  products: Array<any>
}

const initialState: ProductState = {
  products: []
}

export const fetchProducts = createAsyncThunk(
  'product/productList',
  async (thunkAPI) => {
    // let token: any = Cookies.get("user-token");
    const response = await fetchWrapper.get(`${process.env.NEXT_APP_BASE_ENDPOINT}/products`, undefined);

    return response.data.data
  }
)

export const productReducer: any = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action?.payload
    }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        // state.modelListErr = action.payload 
      })
  }
})

// export const { } = productReducer.actions

export default productReducer.reducer
