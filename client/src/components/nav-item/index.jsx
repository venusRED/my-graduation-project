import React from 'react'
import { Link } from 'react-router-dom'

export const NavItem = ({ text = '', url = '', active = '', click = NaN }) => {
	return (
		<Link to={`/${url}`}>
			<label
				className={`text-xl ${
					active === text
						? 'text-main-red underline decoration-2'
						: 'text-main-white'
				}`}
				onClick={click}
			>
				{text}
			</label>
		</Link>
	)
}
