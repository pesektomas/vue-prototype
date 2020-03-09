// todo API

export const products = [
	{
		uuid: '1',
		name: '22" Sencor SLE 22F46DM4 HELLO KITTY',
		link: 'http://127.0.0.1:8000/22-sencor-sle-22f46dm4-hello-kitty/',
		image: {
			title: '22" Sencor SLE 22F46DM4 HELLO KITTY',
			alt: '22" Sencor SLE 22F46DM4 HELLO KITTY',
			src: 'http://127.0.0.1:8000/content/images/product/list/1.jpg'
		},
		flags: [
			{
				title: 'TOP',
				color: '#d6fffa'
			},
			{
				title: 'Action',
				color: '#f9ffd6'
			}
		],
		description: 'Television LED, 55 cm diagonal, 1920x1080 Full HD, DVB-T MPEG4 tuner with USB recording and playback',
		price: {
			withVat: 3499.00,
			withoutVat: 2891.74,
			vat: 21
		},
		availability: 'In stock',
	},
	{
		uuid: '2',
		name: 'Genius repro SP-M120 black',
		link: 'http://127.0.0.1:8000/22-sencor-sle-22f46dm4-hello-kitty/',
		image: {
			title: 'Genius repro SP-M120 black',
			alt: 'Genius repro SP-M120 black',
			src: 'http://127.0.0.1:8000/content/images/product/list/17.jpg'
		},
		flags: [
			{
				title: 'TOP',
				color: '#d6fffa'
			}
		],
		description: 'Sleek and compact stereo speakers in combination of black and metallic surface.',
		price: {
			withVat: 199.00,
			withoutVat: 164.46,
			vat: 21
		},
		availability: 'In stock',
	},
	{
		uuid: '3',
		name: 'Canon MG3550',
		link: 'http://127.0.0.1:8000/22-sencor-sle-22f46dm4-hello-kitty/',
		image: {
			title: 'Canon MG3550',
			alt: 'Canon MG3550',
			src: 'http://127.0.0.1:8000/content/images/product/list/9.jpg'
		},
		flags: [
			{
				title: 'Action',
				color: '#f9ffd6'
			}
		],
		description: 'Features of modern and elegantly prepared MFPs with new wireless capabilities. Function automatic two-sided printing',
		price: {
			withVat: 1590.00,
			withoutVat: 1314.05,
			vat: 21
		},
		availability: 'In stock',
	},
];

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