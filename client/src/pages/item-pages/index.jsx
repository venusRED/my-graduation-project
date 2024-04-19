import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { checkIsAuth } from '../../redux/slices/authSlice'
import axios from '../../utils/axios'

import { toast } from 'react-toastify'
import NoSignalImg from '../../assets/26d4387dc3795385abca.gif'
import { Accordion } from '../../components/accordion'
import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Slider } from '../../components/slider'
import { Wrapper } from '../../components/wrapper'

export const ItemPages = () => {
	const [product, setProduct] = useState(null)
	const [size, setSize] = useState('null')
	const { userId } = useSelector(state => state.auth)
	const isAuth = useSelector(checkIsAuth)
	const params = useParams()

	const fetchProduct = useCallback(async () => {
		const { data } = await axios.get(`/products/${params.id}`)
		setProduct(data)
	}, [params.id])
	useEffect(() => {
		fetchProduct()
	}, [])

	const currentDate = new Date()
	const futureDate = new Date(currentDate)
	futureDate.setDate(currentDate.getDate() + 4)
	const futureDay = futureDate.getDate()
	const futureMonth = futureDate.getMonth() + 1

	const addItemToBasket = async data => {
		try {
			await axios.post('basket/addItem', data)
			//http://localhost:1003/api/basket/addItem
			return { message: 'Товар успешно добавлен в корзину' }
		} catch (error) {
			return { success: false, message: error.message }
		}
	}

	const buttonChange = () => {
		if (!isAuth) {
			toast('You must be logged in to add an item to your basket')
		} else if (size === 'null') {
			toast('Please select a size')
		} else if (product) {
			const basketItem = {
				userId,
				productId: params.id,
				size,
				quantity: 1,
			}
			addItemToBasket(basketItem)
			toast('Added to your basket')
		}
	}

	if (!product) {
		return (
			<div className='w-screen'>
				<img src={NoSignalImg} alt='no signal' className='w-full' />
			</div>
		)
	}
	return (
		<>
			<main>
				<Wrapper>
					<div className='flex flex-col xs:flex-row mb-4'>
						<div className='hidden xs:flex flex-wrap w-2/3'>
							{product.imageUrls.map((img, index) => {
								return (
									<img
										key={index}
										src={`http://localhost:1003/${img}`}
										alt={img}
										className='w-1/2'
									/>
								)
							})}
						</div>
						<div className='xs:hidden w-full'>
							<Slider>
								{product.imageUrls.map(img => {
									return (
										<img
											src={`http://localhost:1003/${img}`}
											alt={img}
											className='w-full snap-center'
										/>
									)
								})}
							</Slider>
						</div>
						<div className='w-full xs:w-1/3 flex flex-col pt-8 px-4'>
							<div className='flex flex-col mb-12'>
								<label className='text-6xl text-main-black'>
									{product.brand_name}
								</label>
								<label className='text-2xl text-main-gray'>
									{product.short_description}
								</label>
							</div>
							<div className='flex flex-col mb-8'>
								<label className='text-4xl text-main-black'>
									{'£' + product.price}
								</label>
								<label className='text-base text-main-gray'>
									{'₽' + product.price * 103}
								</label>
							</div>
							<div className='flex flex-col mb-4'>
								{product.sizes === 'null' ? (
									<label className='text-2xl text-main-black mb-2'>
										Доступно только в одном размере.
									</label>
								) : (
									<select
										className='w-full p-2 text-base border-2 border-main-black rounded-lg mb-2'
										onChange={e => setSize(e.target.value)}
									>
										<option value='null'>---Выберете размер---</option>
										{product.sizes.split('/').map(i => {
											return <option value={i}>{i}</option>
										})}
									</select>
								)}
								<div className='flex space-x-2'>
									<div className='w-2/3 flex flex-col'>
										<Button
											text='Add to cart'
											totalBlack
											click={buttonChange}
										/>
									</div>
									<div className='w-1/3 flex flex-col'>
										<Button text='Buy' totalBlack />
									</div>
								</div>
							</div>
							<div className='flex flex-col mb-12'>
								<label className='text-2xl text-main-black'>
									{`Примерная дата доставки: ${futureDay}.${futureMonth}`}
								</label>
							</div>
							<div className='flex flex-col border-2 border-main-black px-2 py-3'>
								<label className='text-2xl text-main-black mb-2'>
									БЕСПЛАТНЫЙ ВОЗВРАТ
								</label>
								<label className='text-2xl text-main-black'>
									Вы можете вернуть товар в течение 14 дней.
								</label>
							</div>
						</div>
					</div>
					<div className='hidden xs:flex w-full'>
						<div className='w-1/3 flex flex-col'>
							<label className='text-4xl text-main-black mb-2'>Описание:</label>
							<label className='text-2xl text-main-black'>
								{product.brand_name}
							</label>
							<label className='text-xm text-main-gray mb-6'>
								{product.short_description}
							</label>
							<ul className='ml-6'>
								{product.long_description.split('/').map(i => {
									return <li className='list-disc'>{i}</li>
								})}
							</ul>
						</div>
						<div className='w-1/3 flex flex-col'>
							<label className='text-4xl text-main-black'>Материал:</label>
							<ul className='ml-6 mt-2 mb-8'>
								{product.composition.split('/').map(i => {
									return <li className='list-disc'>{i}</li>
								})}
							</ul>
							<label className='text-2xl text-main-black mb-2'>
								Артикул товара:
							</label>
							<label className='text-base text-main-black'>
								{product.article}
							</label>
						</div>
						<div className='w-1/3'>
							<img
								src={`http://localhost:1003/${product.imageUrls[0]}`}
								alt={product.imageUrls[0]}
								className='w-full'
							/>
						</div>
					</div>
					<div className='w-full xs:hidden flex flex-col '>
						<Accordion text='Описание'>
							<label className='text-2xl text-main-black'>
								{product.brand_name}
							</label>
							<label className='text-xm text-main-gray mb-6'>
								{product.short_description}
							</label>
							<ul className='ml-6'>
								{product.long_description.split('/').map(i => {
									return <li className='list-disc'>{i}</li>
								})}
							</ul>
						</Accordion>
						<Accordion text='Материал'>
							<ul className='ml-6 mt-2 mb-8'>
								{product.composition.split('/').map(i => {
									return <li className='list-disc'>{i}</li>
								})}
							</ul>
						</Accordion>
						<Accordion text='Артикул'>
							<label className='text-base text-main-black'>
								{product.article}
							</label>
						</Accordion>
					</div>
				</Wrapper>
			</main>
			<Footer />
		</>
	)
}
