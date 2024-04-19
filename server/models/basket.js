import mongoose from 'mongoose'

const BasketSchema = new mongoose.Schema({
	product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
	size: { type: String, required: true },
	quantity: { type: Number, required: true },
})

export default mongoose.model('Basket', BasketSchema)
