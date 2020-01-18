export const productsInCart = [
	{
		uuid: '123-456',
		name: '22" Sencor SLE 22F46DM4 HELLO KITTY',
		link: 'http://127.0.0.1:8000/22-sencor-sle-22f46dm4-hello-kitty/',
		image: 'http://127.0.0.1:8080/files/1.jpg',
		price: 3499.00,
		priceTotal:3499.00,
		quantity: 1,
		vat: 21
	}
];

// todo API
export const shippingMethods = [
	{
		id: 1,
		image: 'http://127.0.0.1:8000/content/images/transport/default/56.jpg',
		name: 'Czech post',
		price: 121,
		vat: 21,
		disabled: false
	},
	{
		id: 2,
		image: 'http://127.0.0.1:8000/content/images/transport/default/57.jpg',
		name: 'PPL',
		price: 242,
		vat: 21,
		disabled: false
	},
	{
		id: 3,
		image: 'http://127.0.0.1:8000/content/images/transport/default/58.jpg',
		name: 'Personl collection',
		description: 'You will be welcomed by friendly staff!',
		price: 0,
		vat: 21,
		disabled: false
	}
];

// todo API
export const paymentMethods = [
	{
		id: 1,
		image: 'http://127.0.0.1:8000/content/images/payment/default/53.jpg',
		name: 'Credit cart',
		description: 'Quick, cheap and reliable!',
		price: 100,
		vat: 21,
		disabled: false
	},
	{
		id: 2,
		image: 'http://127.0.0.1:8000/content/images/payment/default/55.jpg',
		name: 'Cache on delivery',
		price: 60,
		vat: 21,
		disabled: false
	},
	{
		id: 3,
		image: 'http://127.0.0.1:8000/content/images/payment/default/54.jpg',
		name: 'Cache',
		price: 0,
		vat: 21,
		disabled: false
	}
];

// todo API, key = shipping, value list of payment in relation
export const shippingAndPaymentRelations = [
	{ paymentId: 1, shippingId: 2 },
	{ paymentId: 1, shippingId: 3 },
	{ paymentId: 2, shippingId: 1 },
	{ paymentId: 3, shippingId: 3 }
];