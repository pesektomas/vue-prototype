export default class OrderPreview {
	constructor() {
		this.transportMethod = null;
		this.paymentMethod = null;
	}

	setTransportMethod(transportMethod) {
		this.transportMethod = transportMethod;
	}

	setPaymentMethod(paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	getTransportMethod() {
		return this.transportMethod;
	}

	getPaymentMethod() {
		return this.paymentMethod;
	}
}