import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as Arrow } from '../../assets/angle-arrow-down_icon-icons.com_73683.svg'
import { ReactComponent as Trash } from '../../assets/trash-slash-alt-svgrepo-com.svg'

export const BasketItem = ({ data = {} }) => {
	const { userId } = useSelector(state => state.auth)

	const removeItemClick = () => {}
	return (
		<div className='flex w-full'>
			<Link to={`/item/${data._id}`}>
				<img
					src={`http://localhost:1003/${data.image}`}
					alt={data.image}
					className='w-48'
				/>
			</Link>
			<div className='h-full w-full flex'>
				<div className='w-1/2 flex flex-col'>
					<label className='text-4xl text-main-black'>{data.brand}</label>
					<label className='text-2xl text-main-gray mb-4'>
						{data.description}
					</label>
					<label className='text-2xl text-main-black mb-2'>
						Выбранный размер: {data.size}
					</label>
				</div>
				<div className='w-1/2 flex flex-col'>
					<label className='text-4xl text-main-black'>{'£' + data.price}</label>
					<label className='text-2xl text-main-gray mb-4'>
						{'₽' + data.price * 103}
					</label>
					<div className='flex items-center space-x-2'>
						{data.quantity === 1 ? (
							<Trash onClick={removeItemClick} />
						) : (
							<Arrow className='rotate-90' />
						)}
						<label className='text-2xl text-main-black'>{data.quantity}</label>
						<Arrow className='-rotate-90' />
					</div>
				</div>
			</div>
		</div>
	)
}
