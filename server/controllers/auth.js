import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

dotenv.config()

class controller {
	async registration(req, res) {
		try {
			const { email, username, password } = req.body
			const isUsed = await User.findOne({ username })
			if (isUsed) {
				return res.json({
					message: 'This username is already occupied',
				})
			}
			const salt = bcrypt.genSaltSync(10)
			const hash = bcrypt.hashSync(password, salt)
			const newUser = new User({
				email,
				username,
				password: hash,
			})
			const token = jwt.sign(
				{
					id: newUser._id,
				},
				process.env.JWT_SECRET,
				{ expiresIn: '30d' }
			)
			await newUser.save()
			res.json({
				newUser,
				token,
				message: 'Registration is successful',
			})
		} catch (error) {
			res
				.status(400)
				.json({ message: 'Error when creating a user', error: error })
		}
	}
	async login(req, res) {
		try {
			const { username, password } = req.body
			const user = await User.findOne({ username })
			if (!user) {
				return res.json({
					message: 'There is no such user',
				})
			}
			const isPasswordCorrect = await bcrypt.compare(password, user.password)
			if (!isPasswordCorrect) {
				return res.json({
					message: 'The password or login is incorrect',
				})
			}
			const token = jwt.sign(
				{
					id: user._id,
				},
				process.env.JWT_SECRET,
				{ expiresIn: '30d' }
			)
			res.json({
				token,
				user,
				message: 'You are logged in',
			})
		} catch (error) {
			res.json({ message: 'Authorization error' })
		}
	}
	async getMe(req, res) {
		try {
			const user = await User.findById(req.userId)
			if (!user) {
				return res.json({
					message: 'There is no such user',
				})
			}
			const token = jwt.sign(
				{
					id: user._id,
				},
				process.env.JWT_SECRET,
				{ expiresIn: '30d' }
			)
			res.json({
				user,
				token,
			})
		} catch (error) {
			res.json({ message: 'There is no access' })
		}
	}
}

export default new controller()
