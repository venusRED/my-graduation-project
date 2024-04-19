import React from 'react'

import { Wrapper } from '../wrapper'

export const PagesPanel = ({ text = '', children }) => {
	return (
		<div className='w-screen min-h-screen'>
			<div className='flex justify-center items-center w-screen h-80 bg-main-black'>
				<label className='text-main-white text-5xl'>{text}</label>
			</div>
			<Wrapper>{children}</Wrapper>
		</div>
	)
}
