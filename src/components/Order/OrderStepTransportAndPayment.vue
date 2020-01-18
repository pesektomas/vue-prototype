<template>
	<div>
		<OrderNavigation />
		<div class="web__line">
			<div class="web__container">
				<div class="box-order">
					<div id="transport_and_payment_form" class="box-order__info">
						<div class="box-order__info__item">
							<h2 id="js-label-transport_and_payment_form_transport">Shipping selection</h2>
							<div class="box-chooser">
								<div id="transport_and_payment_form_transport">
									<OrderStepTransportAndPaymentItem 
										v-for="shippingMethod in shippingMethodsReal"
										:key="shippingMethod.id"
										:id="shippingMethod.id"
										:image="shippingMethod.image"
										:name="shippingMethod.name"
										:price="shippingMethod.price"
										:value="shipping"
										:changeValue="setShipping"
										:disabled="shippingMethod.disabled"
									/>
								</div>
							</div>
						</div>
						<div class="box-order__info__item">
							<h2 id="js-label-transport_and_payment_form_payment">Payment selection</h2>
							<div class="box-chooser box-chooser--smaller js-form-group">
								<span class="js-validation-errors-list js-validation-error-list-transport_and_payment_form_payment form-error form-error--inline display-none">
									<span class="form-error__icon"><i class="svg svg-warning"></i></span>
									<ul class="form-error__list"></ul>
								</span>
								<div id="transport_and_payment_form_payment">
									<OrderStepTransportAndPaymentItem 
										v-for="paymentMethod in paymentMethodsReal"
										:key="paymentMethod.id"
										:id="paymentMethod.id"
										:image="paymentMethod.image"
										:name="paymentMethod.name"
										:price="paymentMethod.price"
										:value="payment"
										:changeValue="setPayment"
										:disabled="paymentMethod.disabled"
									/>
								</div>
							</div>
						</div>
					</div>
					<OrderPreview />
				</div>
				<div class="in-action">
					<div class="in-action__right">
						<router-link to="/order/3" class="btn btn--success in-action__btn">Continue in orde</router-link>
					</div>
					<div class="in-action__left">
						<router-link to="/order" class="btn in-action__btn">Back to cart</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OrderPreview from './OrderPreview';
	import OrderStepTransportAndPaymentItem from './OrderStepTransportAndPaymentItem';
	import OrderNavigation from './OrderNavigation';

	const isPaymentDisabled = (shippingAndPaymentRelations, shippingMethodId, paymentMethodId) => {
		if (shippingMethodId === 0) {
			return false;
		}

		const available = [];
		shippingAndPaymentRelations.forEach(shippingAndPaymentRelation => {
			if (shippingAndPaymentRelation.shippingId === shippingMethodId) {
				available.push(shippingAndPaymentRelation.paymentId);
			}
		});

		return !available.includes(paymentMethodId);
	};

	const isShippingDisabled = (shippingAndPaymentRelations, paymentMethodId, shippingMethodId) => {
		if (paymentMethodId === 0) {
			return false;
		}

		const available = [];
		shippingAndPaymentRelations.forEach(shippingAndPaymentRelation => {
			if (shippingAndPaymentRelation.paymentId === paymentMethodId) {
				available.push(shippingAndPaymentRelation.shippingId);
			}
		});

		return !available.includes(shippingMethodId);
	};

	export default {
		name: 'OrderStepTransportAndPayment',
		data: function() {
			return {
				shipping: 0,
				payment: 0
			}
		},
		computed: {
			shippingMethodsReal() {
				return this.$store.state.orderPreview.shippingMethods.map(shippingMethod => {
					return {
						...shippingMethod,
						disabled: isShippingDisabled(this.$store.state.orderPreview.shippingAndPaymentRelations, this.payment, shippingMethod.id)
					};
				});
			},
			paymentMethodsReal() {
				return this.$store.state.orderPreview.paymentMethods.map(paymentMethod => {
					return {
						...paymentMethod,
						disabled: isPaymentDisabled(this.$store.state.orderPreview.shippingAndPaymentRelations, this.shipping, paymentMethod.id)
					};
				});
			}
		},
		components: {
			OrderPreview,
			OrderStepTransportAndPaymentItem,
			OrderNavigation
		},
		methods: {
			setShipping(shipping) {
				if (shipping === this.shipping) {
					this.shipping = 0;
				} else {
					this.shipping = shipping;
				}

				this.$store.commit('setShippingMethod', this.shipping);
			},
			setPayment(payment) {
				if (payment === this.payment) {
					this.payment = 0;
				} else {
					this.payment = payment;
				}

				this.$store.commit('setPaymentMethod', this.payment);
			}
		}
	}
</script>