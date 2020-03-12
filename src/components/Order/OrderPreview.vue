<template>
	<div class="box-order__cart">
		<h2>Products in cart overview</h2>
		<table class="table-cart-preview">
			<tbody>
				<tr class="table-cart-preview__row" v-for="product in productsInCart" :key="product.uuid">
					<td class="table-cart-preview__cell">
						<strong>{{ product.quantity }} pcs</strong>
						{{ product.name }}
					</td>
					<td class="table-cart-preview__cell table-cart-preview__cell--price">{{ product.priceTotal | currency }}</td>
				</tr>
				<tr class="table-cart-preview__row" v-if="orderPreview.getTransportMethod()">
					<td class="table-cart-preview__cell">Shipping method: {{ orderPreview.getTransportMethod().name }}</td>
					<td class="table-cart-preview__cell table-cart-preview__cell--price">{{ orderPreview.getTransportMethod().price.priceWithVat | currency }}</td>
				</tr>
				<tr class="table-cart-preview__row" v-if="orderPreview.getPaymentMethod()">
					<td class="table-cart-preview__cell">Payment method: {{ orderPreview.getPaymentMethod().name }}</td>
					<td class="table-cart-preview__cell table-cart-preview__cell--price">{{ orderPreview.getPaymentMethod().price.priceWithVat | currency }}</td>
				</tr>
				<tr
					class="table-cart-preview__row table-cart-preview__row--total table-cart-preview__row--important"
				>
					<td class="table-cart-preview__cell">Total price including VAT:</td>
					<td class="table-cart-preview__cell table-cart-preview__cell--price">{{ totalPrice| currency }}</td>
				</tr>
				<tr class="table-cart-preview__row table-cart-preview__row--total">
					<td class="table-cart-preview__cell">Total price excluding VAT:</td>
					<td class="table-cart-preview__cell table-cart-preview__cell--price">{{ totalPriceExcludingVat| currency }}</td>
				</tr>
				<tr class="table-cart-preview__row table-cart-preview__row--total">
					<td class="table-cart-preview__cell">Total amount of VAT:</td>
					<td class="table-cart-preview__cell table-cart-preview__cell--price">{{ totalVat| currency }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'OrderPreview',
		computed: {
			orderPreview() {
				return this.$store.state.orderPreview;
			},
			productsInCart() {
				return this.$store.state.productsInCart;
			},
			totalPrice() {
				let totalPrice = this.productsInCart.reduce((sum, product) => {
					return sum += product.priceTotal;
				}, 0);

				if (this.$store.state.orderPreview.getTransportMethod()) {
					totalPrice += parseFloat(this.$store.state.orderPreview.getTransportMethod().price.priceWithVat);
				}

				if (this.$store.state.orderPreview.getPaymentMethod()) {
					totalPrice += parseFloat(this.$store.state.orderPreview.getPaymentMethod().price.priceWithVat);
				}

				return totalPrice;
			},
			totalPriceExcludingVat() {
				let totalPriceExcludingVat = this.productsInCart.reduce((sum, product) => {
					const priceExcludingVat = product.priceTotal * (100 / (100 + product.vat))
					return sum += priceExcludingVat;
				}, 0);

				if (this.$store.state.orderPreview.getTransportMethod()) {
					totalPriceExcludingVat += parseFloat(this.$store.state.orderPreview.getTransportMethod().price.priceWithoutVat);
				}

				if (this.$store.state.orderPreview.getPaymentMethod()) {
					totalPriceExcludingVat += parseFloat(this.$store.state.orderPreview.getPaymentMethod().price.priceWithoutVat);
				}

				return Math.ceil(totalPriceExcludingVat);
			},
			totalVat() {
				return this.totalPrice - this.totalPriceExcludingVat;
			}
		}
	}
</script>