import path, { dirname } from 'path'
import uniqid from 'uniqid'
import { fileURLToPath } from 'url'

import Product from '../models/products.js'

class controller {
	async createItem(req, res) {
		try {
			const {
				brand_name,
				short_description,
				price,
				composition,
				sizes,
				long_description,
				type,
			} = req.body
			if (req.files && req.files.images) {
				let images = req.files.images
				let imageUrls = []
				const __dirname = dirname(fileURLToPath(import.meta.url))
				for (let i = 0; i < images.length; i++) {
					let file = images[i]
					let fileName = Date.now() + file.name
					await file.mv(path.join(__dirname, '..', 'uploads', fileName))
					imageUrls.push(fileName)
				}
				const newProduct = new Product({
					brand_name,
					short_description,
					price,
					imageUrls,
					composition,
					sizes,
					long_description,
					article: uniqid(),
					type,
				})
				await newProduct.save()
				return res.status(200).json(newProduct)
			} else {
				res.status(400).json({ message: 'no files found' })
			}
		} catch (error) {
			console.error('Error saving:', error)
			return res
				.status(500)
				.json({ message: 'Error saving', error: error.message })
		}
	}

	async getAllItems(req, res) {
		try {
			const products = await Product.find().sort('-createdAt')
			return res.status(200).json({ products })
		} catch (error) {
			return res.status(500).json({ message: 'Error getting items' })
		}
	}
	async getItemId(req, res) {
		try {
			const product = await Product.findById(req.params.id)
			return res.status(200).json(product)
		} catch (error) {
			return res.status(500).json({ message: 'Error getting item' })
		}
	}
}

export default new controller()
