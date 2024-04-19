import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { store } from './redux/store'

import { getMe } from './redux/slices/authSlice'
import { getAllProducts } from './redux/slices/productsSlice'

import { ToastContainer } from 'react-toastify'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { PagesPanel } from './components/pages-panel'
import { WhiteHeader } from './components/white-header'
import { Accessories } from './pages/accessories'
import { AddItemPages } from './pages/add-item-pages'
import { AuthorizationPages } from './pages/authorization-pages'
import { Bags } from './pages/bags'
import { Basket } from './pages/basket'
import { Footwear } from './pages/footwear'
import { ForHer } from './pages/for-her'
import { ForHim } from './pages/for-him'
import { Home } from './pages/home'
import { ItemPages } from './pages/item-pages'
import { Jewelry } from './pages/jewelry'
import { RegistrationPages } from './pages/registration-pages'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMe())
		dispatch(getAllProducts())
	}, [dispatch])

	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/authorization' element={<AuthorizationPages />} />
					<Route path='/registration' element={<RegistrationPages />} />
					<Route path='/items' element={<AddItemPages />} />
					<Route
						path='/item/:id'
						element={
							<>
								<WhiteHeader />
								<ItemPages />
							</>
						}
					/>
					<Route
						path='/basket'
						element={
							<>
								<WhiteHeader isBasket />
								<Basket />
							</>
						}
					/>
					<Route
						path='/*'
						element={
							<>
								<Header />
								<Routes>
									<Route
										path='/'
										element={
											<PagesPanel text='Homecoming'>
												<Home />
											</PagesPanel>
										}
									/>
									<Route
										path='/her'
										element={
											<PagesPanel text='For her'>
												<ForHer />
											</PagesPanel>
										}
									/>
									<Route
										path='/him'
										element={
											<PagesPanel text='For him'>
												<ForHim />
											</PagesPanel>
										}
									/>
									<Route
										path='/footwear'
										element={
											<PagesPanel text='Footwear'>
												<Footwear />
											</PagesPanel>
										}
									/>
									<Route
										path='/bags'
										element={
											<PagesPanel text='Bags'>
												<Bags />
											</PagesPanel>
										}
									/>
									<Route
										path='/jewelry'
										element={
											<PagesPanel text='Jewelry'>
												<Jewelry />
											</PagesPanel>
										}
									/>
									<Route
										path='/accessories'
										element={
											<PagesPanel text='Accessories'>
												<Accessories />
											</PagesPanel>
										}
									/>
								</Routes>
								<Footer />
							</>
						}
					/>
				</Routes>
				<ToastContainer
					position='bottom-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
			</Router>
		</Provider>
	)
}

export default App
