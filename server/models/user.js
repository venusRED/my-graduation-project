import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	basket: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Basket' }],
})

export default mongoose.model('User', UserSchema)
