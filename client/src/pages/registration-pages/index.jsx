import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { checkIsAuth } from '../../redux/slices/authSlice'

import { registerUser } from '../../redux/slices/authSlice'

import { toast } from 'react-toastify'
import bgRegister from '../../assets/bg-register.jpg'

const inputStyles =
	'w-full h-10 px-2 py-2 border-b border-main-black bg-main-white outline-none focus:border'

export const RegistrationPages = () => {
	const [listRegistrations, setListRegistrations] = useState({
		email: '',
		username: '',
		password: '',
	})
	const isAuth = useSelector(checkIsAuth)
	const { status } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async () => {
		try {
			dispatch(registerUser({ ...listRegistrations }))
			setListRegistrations({
				email: '',
				username: '',
				password: '',
			})
			toast(status)
		} catch (error) {
			console.log(error)
			toast(status)
		}
		if (isAuth) navigate('/')
	}

	const inputHandler = e => {
		setListRegistrations({
			...listRegistrations,
			[e.target.id]: e.target.value,
		})
		console.log(listRegistrations)
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
					<h2 className='text-4xl text-main-black mb-4'>Create your account</h2>
					<h3 className='text-xl text-main-black'>
						Have an account?{' '}
						<Link to='/authorization'>
							<span className='hover:text-main-red duration-200'>
								Log in now
							</span>
						</Link>
					</h3>
				</div>
				<form onSubmit={e => e.preventDefault()}>
					<div className='mb-4'>
						<label className='text-xl mb-1'>Email</label>
						<input
							type='email'
							id='email'
							placeholder='Email'
							onChange={inputHandler}
							value={listRegistrations.email}
							className={inputStyles}
						/>
					</div>
					<div className='mb-4'>
						<label className='text-xl mb-1'>Nickname</label>
						<input
							type='text'
							id='username'
							placeholder='Nickname'
							onChange={inputHandler}
							value={listRegistrations.nickname}
							className={inputStyles}
						/>
						<label className={`text-sm`}>
							There must be at least 8 and no more than 25 characters
						</label>
					</div>
					<div className='mb-4'>
						<label className='text-xl mb-1'>Password</label>
						<input
							type='password'
							id='password'
							placeholder='Password'
							onChange={inputHandler}
							value={listRegistrations.password}
							className={inputStyles}
						/>
						<label className={`text-sm `}>
							There must be at least 8 and no more than 16 characters
						</label>
					</div>
					<div className='mb-4 flex'>
						<div className='h-full pt-1 mr-1'>
							<input
								type='checkbox'
								id='political'
								placeholder='Password'
								className='w-4 h-4'
							/>
						</div>
						<label htmlFor='political' className='text-lg text-main-black'>
							I accept the Privacy Policy and the Terms of Service
						</label>
					</div>
					<input
						type='submit'
						value='Next'
						onClick={handleSubmit}
						className='px-6 py-1 bg-opacity-0 ease-out duration-200 rounded-md border-2 text-xl border-main-black text-main-black hover:bg-main-black hover:text-main-white'
					/>
				</form>
			</div>
			<div className='hidden xs:flex xs:w-2/6 md:w-4/6 xl:w-4/5 h-ful'>
				<img
					src={bgRegister}
					alt='bgAuth'
					className='w-full h-full object-cover'
				/>
			</div>
		</main>
	)
}
