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
										v-for="transportMethod in transportMethods"
										:key="transportMethod.uuid"
										:id="transportMethod.uuid"
										:image="transportMethod.images[0].url"
										:name="transportMethod.name"
										:price="transportMethod.price.priceWithVat"
										:value="transport"
										:changeValue="setTransport"
										:disabled="isTransportDisabled(transportMethod.uuid)"
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
										v-for="paymentMethod in paymentMethods"
										:key="paymentMethod.uuid"
										:id="paymentMethod.uuid"
										:image="paymentMethod.images[0].url"
										:name="paymentMethod.name"
										:price="paymentMethod.price.priceWithVat"
										:value="payment"
										:changeValue="setPayment"
										:disabled="isPaymentDisabled(paymentMethod.uuid)"
									/>
								</div>
							</div>
						</div>
					</div>
					<OrderPreview />
				</div>
				<div class="in-action">
					<div class="in-action__right">
						<router-link to="/order/3" :class="{ 'btn btn--success': true, 'in-action__btn': true, 'btn--disabled': isBtnDisabled() }">Continue in orde</router-link>
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
	import getPayments from '../../api/getPayments';
	import getTransports from '../../api/getTransports';

	export default {
		name: 'OrderStepTransportAndPayment',
		data: function() {
			return {
				transport: this.$store.state.orderPreview.transportMethod ? this.$store.state.orderPreview.transportMethod.uuid : '',
				payment: this.$store.state.orderPreview.paymentMethod ? this.$store.state.orderPreview.paymentMethod.uuid : '',
				transportMethods: [],
				paymentMethods: []
			}
		},
		async created () {
			this.transportMethods = await getTransports();
			this.paymentMethods = await getPayments();
		},
		components: {
			OrderPreview,
			OrderStepTransportAndPaymentItem,
			OrderNavigation
		},
		methods: {
			setTransport(transport) {
				if (transport === this.transport) {
					this.transport = '';
				} else {
					this.transport = transport;
				}

				this.$store.commit('setTransportMethod', this.transportMethods.find(item => item.uuid === transport));
			},
			setPayment(payment) {
				if (payment === this.payment) {
					this.payment = '';
				} else {
					this.payment = payment;
				}

				this.$store.commit('setPaymentMethod', this.paymentMethods.find(item => item.uuid === payment));
			},
			isBtnDisabled() {
				return this.$store.state.orderPreview.getPaymentMethod() === null || this.$store.state.orderPreview.getTransportMethod() === null;
			},
			isPaymentDisabled (paymentUuid) {
				if (this.transport === '') {
					return false;
				}

				const transportObject = this.transportMethods.find(item => item.uuid === this.transport);
				if (!transportObject) {
					return false;
				}

				const validPaymentUuids = transportObject.payments.map(payment => payment.uuid);
				return !validPaymentUuids.includes(paymentUuid);
			},
			isTransportDisabled (transportUuid) {
				if (this.payment === '') {
					return false;
				}

				const paymentObject = this.paymentMethods.find(item => item.uuid === this.payment);
				if (!paymentObject) {
					return false;
				}

				const validTransportUuids = paymentObject.transports.map(transport => transport.uuid);
				return !validTransportUuids.includes(transportUuid);
			}
		}
	}
</script>