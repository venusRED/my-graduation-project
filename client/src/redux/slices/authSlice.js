import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

const initialState = {
	user: null,
	userId: null,
	username: null,
	token: null,
	isLoading: false,
	status: null,
}

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async ({ email, username, password }) => {
		try {
			const { data } = await axios.post('/auth/registration', {
				email,
				username,
				password,
			})
			if (data.token) {
				window.localStorage.setItem('token', data.token)
			}
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async ({ username, password }) => {
		try {
			const { data } = await axios.post('/auth/login', {
				username,
				password,
			})
			if (data.token) {
				window.localStorage.setItem('token', data.token)
			}
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getMe = createAsyncThunk('auth/loginUser', async () => {
	try {
		const { data } = await axios.get('/auth/me')
		return data
	} catch (error) {
		console.log(error)
	}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.user = null
			state.username = null
			state.token = null
			state.isLoading = false
			state.status = null
		},
	},
	extraReducers: {
		[registerUser.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[registerUser.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
			state.user = action.payload.user
			state.userId = action.payload.user?._id
			state.username = action.payload.user?.username
			state.token = action.payload.token
		},
		[registerUser.rejectWithValue]: (state, action) => {
			state.status = action.payload.message
			state.isLoading = false
		},
		[loginUser.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[loginUser.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = action.payload.message
			state.user = action.payload.user
			state.userId = action.payload.user?._id
			state.username = action.payload.user?.username
			state.token = action.payload.token
		},
		[loginUser.rejectWithValue]: (state, action) => {
			state.status = action.payload.message
			state.isLoading = false
		},
		[getMe.pending]: state => {
			state.isLoading = true
			state.status = null
		},
		[getMe.fulfilled]: (state, action) => {
			state.isLoading = false
			state.status = null
			state.user = action.payload.user
			state.userId = action.payload.user?._id
			state.username = action.payload.user?.username
			state.token = action.payload.token
		},
		[getMe.rejectWithValue]: (state, action) => {
			state.status = action.payload.message
			state.isLoading = false
		},
	},
})

export const checkIsAuth = state => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer
