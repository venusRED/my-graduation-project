import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { loginUser } from '../../redux/slices/authSlice'

import { toast } from 'react-toastify'
import bgAuth from '../../assets/bg-auth.jpg'

const inputStyles =
	'w-full h-10 px-2 py-2 border-b bg-main-white outline-none focus:border'

export const AuthorizationPages = () => {
	const [listAuthorization, setListAuthorization] = useState({
		username: '',
		password: '',
	})
	const { status } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async () => {
		try {
			dispatch(loginUser({ ...listAuthorization }))
			setListAuthorization({
				username: '',
				password: '',
			})
			toast(status)
			console.log(status)
			navigate('/')
		} catch (error) {
			console.log(error)
			toast(status)
		}
	}

	const inputHandler = e => {
		setListAuthorization({
			...listAuthorization,
			[e.target.id]: e.target.value,
		})
		console.log(listAuthorization)
	}

	return (
		<main className='w-screen h-screen flex'>
			<div className='w-full xs:w-4/6 md:w-2/6 xl:w-1/5 h-full z-10 bg-main-white border-r border-main-gray shadow shadow-main-gray pl-8 pr-6 pt-12 overflow-auto'>
				<div className='w-full h-auto mb-4'>
					<Link to='/'>
						<h1 className='text-6xl text-main-red mb-10 cursor-pointer'>
							NotReal
						</h1>
					</Link>
					<h2 className='text-4xl text-main-black mb-4'>
						Log in to your account
					</h2>
					<h3 className='text-xl text-main-black'>
						Don't have an account?{' '}
						<Link to='/registration'>
							<span className='hover:text-main-red duration-200 cursor-pointer'>
								Sign Up
							</span>
						</Link>
					</h3>
				</div>
				<form onSubmit={e => e.preventDefault()}>
					<div className='mb-4'>
						<label className='text-xl mb-1'>Nickname</label>
						<input
							type='text'
							id='username'
							placeholder='Nickname'
							onChange={inputHandler}
							value={listAuthorization.nickname}
							className={
								inputStyles +
								`${
									status === 'The password or login is incorrect'
										? ' border-main-red'
										: 'border-main-black'
								}`
							}
						/>
					</div>
					<div className='mb-4'>
						<label className='text-xl mb-1'>Password</label>
						<input
							type='password'
							id='password'
							placeholder='Password'
							onChange={inputHandler}
							value={listAuthorization.password}
							className={
								inputStyles +
								`${
									status === 'The password or login is incorrect'
										? ' border-main-red'
										: 'border-main-black'
								}`
							}
						/>
					</div>
					<input
						type='submit'
						value='Next'
						onClick={handleSubmit}
						className='px-6 py-1 bg-opacity-0 ease-out duration-200 rounded-md border-2 text-xl border-main-black text-main-black hover:bg-main-black hover:text-main-white'
					/>
				</form>
			</div>
			<div className='hidden xs:flex xs:w-2/6 md:w-4/6 xl:w-4/5 h-full'>
				<img src={bgAuth} alt='bgAuth' className='w-full h-full object-cover' />
			</div>
		</main>
	)
}
