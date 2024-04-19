import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../redux/slices/productsSlice.js'

const inputStyles =
	'w-full h-10 px-2 py-2 mb-4 border-b bg-main-white outline-none focus:border'

export const AddItemPages = () => {
	const [formData, setFormData] = useState({
		brand_name: '',
		short_description: '',
		price: '',
		images: [], // Changed to an array to hold multiple images
		composition: '',
		sizes: '',
		long_description: '',
		type: '',
	})
	const dispatch = useDispatch()

	const handleChange = e => {
		if (e.target.type === 'file') {
			// If input type is file, update the images array
			setFormData({ ...formData, images: e.target.files })
		} else {
			// Otherwise, update the form data as usual
			setFormData({ ...formData, [e.target.id]: e.target.value })
		}
	}

	const handleSubmit = async event => {
		event.preventDefault()
		try {
			const data = new FormData()
			// Append each image to the FormData object
			for (let i = 0; i < formData.images.length; i++) {
				data.append('images', formData.images[i])
			}
			// Append other form fields
			data.append('brand_name', formData.brand_name)
			data.append('short_description', formData.short_description)
			data.append('price', formData.price)
			data.append('composition', formData.composition)
			data.append('sizes', formData.sizes)
			data.append('long_description', formData.long_description)
			data.append('type', formData.type)
			dispatch(createProduct(data))
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<main className='w-screen h-screen bg-main-black flex'>
			<div className='w-1/4 h-screen bg-main-white shadow-xl shadow-main-white'>
				<form
					onSubmit={handleSubmit}
					enctype='multipart/form-data'
					className='p-4 flex flex-col'
				>
					<input
						type='text'
						id='brand_name'
						name='brand_name'
						onChange={handleChange}
						className={inputStyles}
						placeholder='brand'
					/>
					<input
						type='text'
						id='short_description'
						name='short_description'
						onChange={handleChange}
						className={inputStyles}
						placeholder='short description'
					/>
					<input
						type='number'
						id='price'
						name='price'
						onChange={handleChange}
						className={inputStyles}
						placeholder='price'
					/>
					<input
						type='file'
						id='images'
						multiple
						onChange={handleChange}
						className={inputStyles}
						placeholder='images'
					/>
					<input
						type='text'
						id='composition'
						name='composition'
						onChange={handleChange}
						className={inputStyles}
						placeholder='composition'
					/>
					<input
						type='text'
						id='sizes'
						name='sizes'
						onChange={handleChange}
						className={inputStyles}
						placeholder='sizes'
					/>
					<input
						type='text'
						id='long_description'
						name='long_description'
						onChange={handleChange}
						className={inputStyles}
						placeholder='long description'
					/>
					<select
						id='type'
						name='type'
						value={formData.type}
						onChange={handleChange}
					>
						<option value='For her'>For her</option>
						<option value='For him'>For him</option>
						<option value='Footwear'>Footwear</option>
						<option value='Bags'>Bags</option>
						<option value='Jewelry'>Jewelry</option>
						<option value='Accessories'>Accessories</option>
					</select>
					<input
						type='submit'
						value='Отправить'
						className='px-4 py-1 bg-opacity-0 ease-out duration-200 rounded-md cursor-pointer border-2 border-main-black text-main-black hover:bg-main-black hover:text-main-white'
					/>
				</form>
			</div>
			<div className='w-3/4 h-full'></div>
		</main>
	)
}
