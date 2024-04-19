import React, { useState } from 'react'

import { ReactComponent as Arrow } from '../../assets/angle-arrow-down_icon-icons.com_73683.svg'

export const Accordion = ({ text = '', children }) => {
	const [accordionActive, setAccordionActive] = useState(false)

	return (
		<div
			className='p-2 bg-main-white'
			onClick={() => setAccordionActive(!accordionActive)}
		>
			<div className='w-full flex items-center border-b-2 border-main-black'>
				<label className='text-2xl text-main-black mr-auto'>{text}</label>
				<Arrow className={accordionActive && 'rotate-180'} />
			</div>
			<div className='flex flex-col pt-2'>{accordionActive && children}</div>
		</div>
	)
}
