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
}