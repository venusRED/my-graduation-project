import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'

import authRoute from './routes/auth.js'
import basketRoute from './routes/basket.js'
import productsRoute from './routes/products.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

app.use('/api/auth', authRoute)
app.use('/api/products', productsRoute)
app.use('/api/basket', basketRoute)

async function start() {
	try {
		if (
			await mongoose.connect(
				`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.eg9tqqp.mongodb.net/`
			)
		)
			console.log('Database connection established')
		else console.error('Database connection failed')
		app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
	} catch (error) {
		console.error(error)
	}
}
start()
