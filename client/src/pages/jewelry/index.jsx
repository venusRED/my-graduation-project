import React from 'react'
import { useSelector } from 'react-redux'

import { Items } from '../../components/items'

export const Jewelry = () => {
	const { products } = useSelector(state => state.products)
	console.log(products)
	if (!products.length) {
		return (
			<div className='text-xl text-center text-main-black py-10'>
				Products not found
			</div>
		)
	}

	return (
		<main className='flex flex-col mb-8'>
			{products
				.filter(i => i.type === 'Jewelry')
				.map(item => {
					return <Items key={item._id} data={item} />
				})}
		</main>
	)
}
