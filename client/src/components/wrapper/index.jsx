import React from 'react'

export const Wrapper = ({ children }) => {
	return (
		<div
			className={`container mx-auto py-2 flex flex-wrap item-center justify-center`}
		>
			{children}
		</div>
	)
}
