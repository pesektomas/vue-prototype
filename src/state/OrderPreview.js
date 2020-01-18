export default class OrderPreview {
	constructor(shippingMethods, paymentMethods, shippingAndPaymentRelations) {
		this.shippingMethods = shippingMethods;
		this.paymentMethods = paymentMethods;
		this.shippingAndPaymentRelations = shippingAndPaymentRelations;
		this.shippingMethod = null;
		this.paymentMethod = null;
	}

	setShippingMethods(shippingMethods) {
		this.shippingMethods = shippingMethods;
	}

	setPaymentMethods(paymentMethods) {
		this.paymentMethods = paymentMethods;
	}

	setShippingMethod(shippingMethodId) {
		this.shippingMethod = this.shippingMethods.find(item => item.id === shippingMethodId);
	}

	setPaymentMethod(paymentMethodId) {
		this.paymentMethod = this.paymentMethods.find(item => item.id === paymentMethodId);
	}

	getShippingMethod() {
		return this.shippingMethod;
	}

	getPaymentMethod() {
		return this.paymentMethod;
	}
}