import React from 'react'
import { Link } from 'react-router-dom'

export const Items = ({ data }) => {
	return (
		<Link to={`/item/${data._id}`}>
			<div className='max-w-[180px] xs:max-w-[220px] md:max-w-[320px] mb-4 bg-main-white snap-center'>
				<div className='relative'>
					<img
						src={`http://localhost:1003/${data.imageUrls[0]}`}
						alt={data.imageUrls[0]}
						className='w-full absolute top-0 left-0 float-left my-2 hover:opacity-0 duration-200 z-10'
					/>
					<img
						src={`http://localhost:1003/${data.imageUrls[1]}`}
						alt={data.imageUrls[1]}
						className='w-full float-left my-2 z-0'
					/>
				</div>
				<div className='w-full px-2 pb-2'>
					<h1 className='text-xs xs:text-xl xl:text-2xl text-main-black uppercase'>
						{data.brand_name}
					</h1>
					<h2 className='text-xs xs:text-base text-main-gray h-12 mb-2'>
						{data.short_description}
					</h2>
					<div className='w-full flex justify-end items-center space-x-4'>
						<label className='text-xl'>{data.price + '$'}</label>
					</div>
				</div>
			</div>
		</Link>
	)
}
