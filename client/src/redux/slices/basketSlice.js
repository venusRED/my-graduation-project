import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

const initialState = {
	basket: [],
	isLoading: false,
	status: null,
}

export const getUserBasket = createAsyncThunk(
	'basket/getUserBasket',
	async userId => {
		try {
			const { data } = await axios.get(`basket/getBasket/${userId}`)
			return data
		} catch (error) {
			return console.log(error.response.data)
		}
	}
)

export const addToBasket = createAsyncThunk(
	'basket/addToBasket',
	async ({ userId, basketItem }, { rejectWithValue }) => {
		try {
			await axios.post('basket/addItem', { userId, basketItem })
			return { message: 'Товар успешно добавлен в корзину' }
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const removeFromBasket = createAsyncThunk(
	'basket/removeFromBasket',
	async ({ userId, basketItemId }, { rejectWithValue }) => {
		try {
			await axios.delete('basket/removeItem', {
				data: { userId, basketItemId },
			})
			return { message: 'Товар успешно удален из корзины' }
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const increaseQuantity = createAsyncThunk(
	'basket/increaseQuantity',
	async (basketItemId, { rejectWithValue }) => {
		try {
			await axios.put('/increaseQuantity', { basketItemId })
			return { message: 'Количество товара увеличено' }
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const decreaseQuantity = createAsyncThunk(
	'basket/decreaseQuantity',
	async (basketItemId, { rejectWithValue }) => {
		try {
			await axios.put('/decreaseQuantity', { basketItemId })
			return { message: 'Количество товара уменьшено' }
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		clearBasket: state => {
			state.basket = []
		},
	},
	extraReducers: {
		[getUserBasket.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[getUserBasket.fulfilled]: (state, action) => {
			state.isLoading = false
			state.basket = action.payload
		},
		[getUserBasket.rejected]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[addToBasket.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[addToBasket.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[addToBasket.rejected]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[removeFromBasket.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[removeFromBasket.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[removeFromBasket.rejected]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[increaseQuantity.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[increaseQuantity.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[increaseQuantity.rejected]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[decreaseQuantity.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[decreaseQuantity.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
		[decreaseQuantity.rejected]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
		},
	},
})

export const selectBasket = state => state.basket.basket

export const { clearBasket } = basketSlice.actions

export default basketSlice.reducer
