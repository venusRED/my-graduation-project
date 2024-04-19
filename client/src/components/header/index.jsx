import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkIsAuth, logout } from '../../redux/slices/authSlice'

import { ReactComponent as LogoMenu } from '../../assets/icons8-menu.svg'
import { ReactComponent as LogoPinterest } from '../../assets/icons8-pinterest.svg'
import { ReactComponent as LogoTelegram } from '../../assets/icons8-telegram-app.svg'
import { ReactComponent as LogoVK } from '../../assets/icons8-vk-circled.svg'
import { ReactComponent as LogoYoutube } from '../../assets/icons8-youtube.svg'
import { ReactComponent as Basket } from '../../assets/package_0waytbjr96dr.svg'
import { Aside } from '../aside'
import { Button } from '../button'
import { NavItem } from '../nav-item'
import { Wrapper } from '../wrapper'

export const Header = () => {
	const isAuth = useSelector(checkIsAuth)
	const { username, userId } = useSelector(state => state.auth)
	console.log(userId)
	const dispatch = useDispatch()
	const [activeNavItem, setActiveNavItem] = useState('Home')
	const [activeAside, setActiveAside] = useState(false)

	const logOutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
	}

	return (
		<header className='fixed top-0 left-0 w-screen h-auto bg-main-black z-50'>
			<Wrapper>
				<label className='text-2xl text-main-red pl-4 mr-auto'>NotReal</label>
				<nav className='hidden md:flex space-x-2 mx-auto'>
					<NavItem
						text='Home'
						active={activeNavItem}
						click={() => setActiveNavItem('Home')}
					/>
					<NavItem
						text='For her'
						url='her'
						active={activeNavItem}
						click={() => setActiveNavItem('For her')}
					/>
					<NavItem
						text='For him'
						url='him'
						active={activeNavItem}
						click={() => setActiveNavItem('For him')}
					/>
					<NavItem
						text='Footwear'
						url='footwear'
						active={activeNavItem}
						click={() => setActiveNavItem('Footwear')}
					/>
					<NavItem
						text='Bags'
						url='bags'
						active={activeNavItem}
						click={() => setActiveNavItem('Bags')}
					/>
					<NavItem
						text='Jewelry'
						url='jewelry'
						active={activeNavItem}
						click={() => setActiveNavItem('Jewelry')}
					/>
					<NavItem
						text='Accessories'
						url='accessories'
						active={activeNavItem}
						click={() => setActiveNavItem('Accessories')}
					/>
				</nav>
				<div className='hidden md:flex space-x-2 items-center ml-auto'>
					{isAuth ? (
						<>
							<label className='text-sm text-main-white'>{username}</label>
							<Link to='basket'>
								<Basket className='w-6 h-6' />
							</Link>
							<Button text='Exit' click={logOutHandler} red />
							{username === 'Admin' && (
								<Link to='items'>
									<Button text='Add_item' red />
								</Link>
							)}
						</>
					) : (
						<>
							<LogoPinterest />
							<LogoYoutube />
							<LogoTelegram />
							<LogoVK />
							<Link to='/authorization'>
								<Button text='Sign in' red />
							</Link>
						</>
					)}
				</div>
				<div className='flex md:hidden pr-4 py-1 ml-auto'>
					<LogoMenu onClick={() => setActiveAside(true)} />
				</div>
				{activeAside && (
					<Aside
						activeNavItemValue={activeNavItem}
						closeMenu={() => setActiveAside(false)}
					/>
				)}
			</Wrapper>
		</header>
	)
}
