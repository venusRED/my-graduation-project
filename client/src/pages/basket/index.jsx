import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { BasketItem } from '../../components/basket-item'
import { Wrapper } from '../../components/wrapper'
import axios from '../../utils/axios'

export const Basket = () => {
	const [basket, setBasket] = useState([])
	const { userId } = useSelector(state => state.auth)
	console.log(userId)
	const getUserBasket = async id => {
		try {
			const { data } = await axios.get(`/basket/${id}`)
			return data
		} catch (error) {
			console.log(error)
			toast('Error getting')
		}
	}
	useEffect(() => {
		setBasket(getUserBasket(userId))
	}, [userId])

	if (basket.length === 0) {
		return (
			<div className='w-screen h-screen flex items-center justify-center'>
				<label className='text-main-black text-4xl'>
					You haven't added anything to the cart
				</label>
			</div>
		)
	}
	return (
		<Wrapper>
			<main className='w-full min-h-screen flex'>
				<div className='w-2/3'>
					{basket.map(item => {
						return <BasketItem key={item.id} data={item} />
					})}
				</div>
				<div className='w-1/3'></div>
			</main>
		</Wrapper>
	)
}
