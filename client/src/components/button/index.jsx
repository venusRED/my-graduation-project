import React from 'react'

const redStyles =
		'border-2 border-main-red text-main-red hover:bg-main-red hover:text-main-white',
	totalBlackStyles =
		'border-2 border-main-black text-main-black hover:bg-main-black hover:text-main-white'

const notFunction = () => console.log('notFunction')

export const Button = ({
	text = '',
	click = notFunction,
	red = false,
	totalBlack = false,
}) => {
	return (
		<button
			className={`px-4 py-1 bg-opacity-0 ease-out duration-200 rounded-md cursor-pointer ${
				red ? redStyles : totalBlack ? totalBlackStyles : 'border-0'
			}`}
			onClick={click}
		>
			{text}
		</button>
	)
}
