export default class DeliveryData {

	constructor() {
		
		/**
		 * @Validation(rules: [required, maxLength: 255])
		 */
		this.firstName = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255])
		 */
		this.lastName = ''
		
		/**
		 * @Validation(rules: [required, maxLength: 255])
		 */
		this.email = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255])
		 */
		this.telephone = '';
		
		this.companyCustomer = false
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [companyCustomer: true])
		 */
		this.companyName = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [companyCustomer: true])
		 */
		this.companyNumber = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [companyCustomer: true])
		 */
		this.companyTaxNumber = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255])
		 */
		this.street = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255])
		 */
		this.city = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 10])
		 */
		this.postcode = '';
		
		/**
		 * @Validation(rules: [required])
		 */
		this.country = '1';

		this.deliveryAddressFilled = false;
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryFirstName = ''
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryLastName = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryCompanyName = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryTelephone = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryStreet = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 255], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryCity = '';
		
		/**
		 * @Validation(rules: [required, maxLength: 10], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryPostcode = '';
		
		/**
		 * @Validation(rules: [required], condition: [deliveryAddressFilled: true])
		 */
		this.deliveryCountry = '1';

		this.note = '';
		
		/**
		 * @Validation(rules: [required])
		 */
		this.legalConditionsAgreement = false;
		
		this.newsletterSubscription = false;

		this.errors = [];
	}

	check() {
		this.errors = [];

		if (this.firstName.length === 0 || this.firstName.length > 255) {
			this.errors.push('Field firtName is not valid');
		}
		
		if (this.lastName.length === 0 || this.lastName.length > 255) {
			this.errors.push('Field lastName is not valid');
		}
		
		if (this.email.length === 0 || this.email.length > 255) {
			this.errors.push('Field email is not valid');
		}
		
		if (this.telephone.length === 0 || this.telephone.length > 255) {
			this.errors.push('Field telephone is not valid');
		}

		if (this.street.length === 0 || this.street.length > 255) {
			this.errors.push('Field street is not valid');
		}
		
		if (this.city.length === 0 || this.city.length > 255) {
			this.errors.push('Field city is not valid');
		}
		
		if (this.postcode.length === 0 || this.postcode.length > 10) {
			this.errors.push('Field postcode is not valid');
		}
		
		if (this.country.length === null) {
			this.errors.push('Field country is not valid');
		}

		if (this.companyCustomer === true) {
			if (this.companyName.length === 0 || this.companyName.length > 255) {
				this.errors.push('Field companyName is not valid');
			}
		
			if (this.companyNumber.length === 0 || this.companyNumber.length > 255) {
				this.errors.push('Field companyNumber is not valid');
			}
		
			if (this.companyTaxNumber.length === 0 || this.companyTaxNumber.length > 255) {
				this.errors.push('Field companyTaxNumber is not valid');
			}
		}

		if (this.deliveryAddressFilled === true) {
			if (this.deliveryFirstName.length === 0 || this.deliveryFirstName.length > 255) {
				this.errors.push('Field deliveryFirstName is not valid');
			}
		
			if (this.deliveryLastName.length === 0 || this.deliveryLastName.length > 255) {
				this.errors.push('Field deliveryLastName is not valid');
			}
		
			if (this.deliveryCompanyName.length === 0 || this.deliveryCompanyName.length > 255) {
				this.errors.push('Field deliveryCompanyName is not valid');
			}
		
			if (this.deliveryTelephone.length === 0 || this.deliveryTelephone.length > 255) {
				this.errors.push('Field deliveryTelephone is not valid');
			}
		
			if (this.deliveryStreet.length === 0 || this.deliveryStreet.length > 255) {
				this.errors.push('Field deliveryStreet is not valid');
			}
		
			if (this.deliveryCity.length === 0 || this.deliveryCity.length > 255) {
				this.errors.push('Field deliveryCity is not valid');
			}
		
			if (this.deliveryPostcode.length === 0 || this.deliveryPostcode.length > 10) {
				this.errors.push('Field deliveryPostcode is not valid');
			}
		
			if (this.deliveryCountry === null) {
				this.errors.push('Field deliveryCountry is not valid');
			}
		}

		return this.errors.length === 0;

	}

	getData(orderPreview, products) {
		console.log(products);
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			telephone: this.telephone,
			onCompanyBehalf: this.companyCustomer,
			companyName: this.companyName,
			companyNumber: this.companyNumber,
			companyTaxNumber: this.companyTaxNumber,
			street: this.street,
			city: this.city,
			postcode: this.postcode,
			country: this.country,
			note:this.note,
			differentDeliveryAddress: this.deliveryAddressFilled,
			deliveryFirstName: this.deliveryFirstName,
			deliveryLastName: this.deliveryLastName,
			deliveryStreet: this.deliveryStreet,
			deliveryCity: this.deliveryCity,
			deliveryCountry: this.deliveryCountry,
			deliveryPostcode: this.deliveryPostcode,
			payment: {
				uuid: orderPreview.paymentMethod.uuid,
				price: {
					priceWithVat: orderPreview.paymentMethod.price.priceWithVat,
					priceWithoutVat: orderPreview.paymentMethod.price.priceWithoutVat,
					vatAmount: orderPreview.paymentMethod.price.vatAmount
				}
			},
			transport: {
				uuid: orderPreview.transportMethod.uuid,
				price: {
					priceWithVat: orderPreview.transportMethod.price.priceWithVat,
					priceWithoutVat: orderPreview.transportMethod.price.priceWithoutVat,
					vatAmount: orderPreview.transportMethod.price.vatAmount
				}
			},
			products: products.map(product => {
				return {
					uuid: product.uuid,
					unitPrice: {
						priceWithVat: product.price,
						priceWithoutVat: product.price - product.vat,
						vatAmount: product.vat
					},
					quantity: product.quantity
				}
			})
		};
	}
}