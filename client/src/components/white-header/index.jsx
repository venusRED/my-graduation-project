import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkIsAuth, logout } from '../../redux/slices/authSlice'

import { ReactComponent as LogoPinterest } from '../../assets/icons8-pinterest.svg'
import { ReactComponent as LogoTelegram } from '../../assets/icons8-telegram-app.svg'
import { ReactComponent as LogoVK } from '../../assets/icons8-vk-circled.svg'
import { ReactComponent as LogoYoutube } from '../../assets/icons8-youtube.svg'
import { ReactComponent as Basket } from '../../assets/package_0waytbjr96drBlack.svg'
import { Button } from '../button'
import { Wrapper } from '../wrapper'

export const WhiteHeader = ({ isBasket = false }) => {
	const isAuth = useSelector(checkIsAuth)
	const { username } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const logOutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
	}
	return (
		<header className='w-screen'>
			<Wrapper>
				<div className='w-screen flex items-center px-2'>
					<Link to='/'>
						<button className='text-lg text-main-black'>Back</button>
					</Link>
					<label className='text-2xl text-main-black mx-auto'>NotReal</label>
					<div className='flex space-x-2 items-center'>
						{isAuth ? (
							<>
								<label className='text-sm text-main-black'>{username}</label>
								{!isBasket && (
									<Link to='/basket'>
										<Basket className='w-6 h-6' />
									</Link>
								)}
								<Button text='Exit' click={logOutHandler} totalBlack />
							</>
						) : (
							<>
								<LogoPinterest />
								<LogoYoutube />
								<LogoTelegram />
								<LogoVK />
								<Link to='/authorization'>
									<Button text='Sign in' totalBlack />
								</Link>
							</>
						)}
					</div>
				</div>
			</Wrapper>
		</header>
	)
}
