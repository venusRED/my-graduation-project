import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
	{
		brand_name: { type: String, required: true },
		short_description: { type: String, required: true },
		price: { type: String, required: true },
		imageUrls: [{ type: String, required: true }],
		composition: { type: String, required: true },
		sizes: { type: String, required: true },
		long_description: { type: String, required: true },
		article: { type: String, required: true },
		type: { type: String, required: true },
	},
	{ timestamps: true }
)

export default mongoose.model('Products', ProductSchema)
