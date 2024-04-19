import Basket from '../models/basket.js'
import User from '../models/user.js'

class controller {
	async addToBasket(userId, productId, size, quantity) {
		try {
			const user = await User.findById(userId)
			if (!user) {
				return { success: false, message: 'Пользователь не найден' }
			}
			const basketItem = await Basket.create({
				product: productId,
				size,
				quantity,
			})
			user.basket.push(basketItem)
			await user.save()
			return { success: true, message: 'Товар успешно добавлен в корзину' }
		} catch (error) {
			return { success: false, message: error.message }
		}
	}
	async removeFromBasket(userId, basketItemId) {
		try {
			const user = await User.findById(userId)
			if (!user) {
				return { success: false, message: 'Пользователь не найден' }
			}
			await Basket.findByIdAndRemove(basketItemId)
			user.basket = user.basket.filter(item => item.toString() !== basketItemId)
			await user.save()
			return { success: true, message: 'Товар успешно удален из корзины' }
		} catch (error) {
			return { success: false, message: error.message }
		}
	}
	async getUserBasket(userId) {
		try {
			const user = await User.findById(userId).populate('basket')
			if (!user) {
				return { success: false, message: 'Пользователь не найден' }
			}
			return { success: true, basket: user.basket }
		} catch (error) {
			return { success: false, message: error.message }
		}
	}
	async increaseQuantity(basketItemId) {
		try {
			const basketItem = await Basket.findByIdAndUpdate(
				basketItemId,
				{ $inc: { quantity: 1 } },
				{ new: true }
			)
			if (!basketItem) {
				return { success: false, message: 'Товар в корзине не найден' }
			}
			return { success: true, message: 'Количество товара увеличено' }
		} catch (error) {
			return { success: false, message: error.message }
		}
	}
	async decreaseQuantity(basketItemId) {
		try {
			const basketItem = await Basket.findById(basketItemId)
			if (!basketItem) {
				return { success: false, message: 'Товар в корзине не найден' }
			}
			if (basketItem.quantity <= 1) {
				return {
					success: false,
					message: 'Количество товара в корзине не может быть меньше 1',
				}
			}
			basketItem.quantity -= 1
			await basketItem.save()
			return { success: true, message: 'Количество товара уменьшено' }
		} catch (error) {
			return { success: false, message: error.message }
		}
	}
}

export default new controller()
