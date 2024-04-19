import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

const initialState = {
	products: [],
	loading: false,
}

export const createProduct = createAsyncThunk(
	'products/createProduct',
	async params => {
		try {
			const { data } = await axios.post('/products', params)
			return data
		} catch (error) {
			console.error(error)
		}
	}
)

export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		try {
			const { data } = await axios.get('/products')
			return data
		} catch (error) {
			console.error(error)
		}
	}
)

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[createProduct.pending]: state => {
			state.loading = true
		},
		[createProduct.fulfilled]: (state, action) => {
			state.loading = false
			state.products.push(action.payload)
		},
		[createProduct.rejected]: state => {
			state.loading = false
		},
		[getAllProducts.pending]: state => {
			state.loading = true
		},
		[getAllProducts.fulfilled]: (state, action) => {
			state.loading = false
			state.products = action.payload.products
		},
		[getAllProducts.rejected]: state => {
			state.loading = false
		},
	},
})

export default productsSlice.reducer
