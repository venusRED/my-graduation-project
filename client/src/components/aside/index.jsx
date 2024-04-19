import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkIsAuth, logout } from '../../redux/slices/authSlice'

import { ReactComponent as LogoClose } from '../../assets/icons8-close.svg'
import { ReactComponent as LogoPinterest } from '../../assets/icons8-pinterest.svg'
import { ReactComponent as LogoTelegram } from '../../assets/icons8-telegram-app.svg'
import { ReactComponent as LogoVK } from '../../assets/icons8-vk-circled.svg'
import { ReactComponent as LogoYoutube } from '../../assets/icons8-youtube.svg'
import { ReactComponent as Basket } from '../../assets/package_0waytbjr96dr.svg'
import { Button } from '../button'
import { NavItem } from '../nav-item'

export const Aside = ({ closeMenu = NaN }) => {
	const isAuth = useSelector(checkIsAuth)
	const { username } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const logOutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
	}
	return (
		<>
			<div className='fixed top-0 left-0 z-20 xs:w-3/4 w-1/4 h-screen bg-main-black opacity-50' />
			<aside className='fixed top-0 right-0 z-20 xs:w-1/4 w-3/4 h-screen flex flex-col items-center bg-main-black'>
				<div className='flex items-center w-full px-2 py-2'>
					<LogoClose onClick={closeMenu} className='mr-auto' />
					<div className='flex space-x-2 items-center ml-auto'>
						{isAuth ? (
							<>
								<label className='text-sm text-main-white'>{username}</label>
								<Link to='/basket'>
									<Basket className='w-6 h-6' />
								</Link>
								<Button text='Exit' red click={logOutHandler} />
							</>
						) : (
							<>
								<Link to='/authorization'>
									<Button text='Sign in' red />
								</Link>
							</>
						)}
					</div>
				</div>
				<nav className='flex flex-col items-center'>
					<NavItem text='Home' click={closeMenu} />
					<NavItem text='For her' url='her' click={closeMenu} />
					<NavItem text='For him' url='him' click={closeMenu} />
					<NavItem text='Footwear' url='footwear' click={closeMenu} />
					<NavItem text='Bags' url='bags' click={closeMenu} />
					<NavItem text='Jewelry' url='jewelry' click={closeMenu} />
					<NavItem text='Accessories' url='accessories' click={closeMenu} />
				</nav>
				<div className='flex mt-auto space-x-2 pb-4'>
					<LogoPinterest />
					<LogoYoutube />
					<LogoTelegram />
					<LogoVK />
				</div>
			</aside>
		</>
	)
}
