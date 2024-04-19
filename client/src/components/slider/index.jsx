import React from 'react'

export const Slider = ({ children }) => {
	return (
		<div className='w-full flex space-x-4 overflow-x-scroll snap-x snap-mandatory'>
			{children}
		</div>
	)
}
