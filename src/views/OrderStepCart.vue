<template>
	<div>
		<order-navigation />
		<div class="web__line">
			<div class="web__container">
				<h1>Your cart</h1>
				<form name="cart_form" method="post" action="" novalidate="novalidate" role="form">
					<table class="table-cart">
						<thead>
							<tr class="table-cart__row">
								<th class="table-cart__cell table-cart__cell--image">Image</th>
								<th class="table-cart__cell table-cart__cell--name">Name</th>
								<th class="table-cart__cell table-cart__cell--price">Unit price including VAT</th>
								<th class="table-cart__cell table-cart__cell--price">VAT rate</th>
								<th class="table-cart__cell table-cart__cell--amount">Amount</th>
								<th class="table-cart__cell table-cart__cell--price">Price including VAT</th>
								<th class="table-cart__cell table-cart__cell--action">&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							<cart-item
								v-for="product in productsInCart"
								:key="product.uuid"
								:product="product"
								:plusQuantity="plusQuantity"
								:minusQuantity="minusQuantity"
								:removeItem="removeItem"
							/>
						</tbody>
						<tfoot>
							<tr class="table-cart__row">
								<td class="table-cart__cell table-cart__cell--image">&nbsp;</td>
								<td class="table-cart__cell table-cart__cell--name">&nbsp;</td>
								<td class="table-cart__cell  table-cart__cell--price">&nbsp;</td>
								<td class="table-cart__cell table-cart__cell--total-price" colspan="3">
									Total price including VAT:
									<span>
										{{totalPrice| currency}}
									</span>
								</td>
								<td class="table-cart__cell">&nbsp;</td>
							</tr>
						</tfoot>
					</table>
					<div class="box-cart-bottom">
						<div class="box-cart-bottom__info"></div>
						<div class="box-cart-bottom__promo">
							<div class="box-promo-code">
								<label class="box-promo-code__input">
									Promo code:
									<input type="text" class="input" data-apply-code-url="http://127.0.0.1:8000/promo-code/apply/">
								</label>
								<button type="button" class="btn box-promo-code__btn">Apply</button>
							</div>
						</div>
					</div>

					<div class="in-action">
						<div class="in-action__right">
							<div>
								<router-link to="/order/2" :class="{ 'btn btn--success': true, 'in-action__btn': true, 'btn--disabled': isBtnDisabled() }">Order</router-link>
							</div>
						</div>
						<div class="in-action__left">
							<router-link to="/" class="btn in-action__btn">Back to buying</router-link>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import CartItem from '../components/Order/CartItem';
	import OrderNavigation from '../components/Order/OrderNavigation';

	export default {
		components: {
			CartItem,
			OrderNavigation
		},
		methods: {
			removeItem(productUuid) {
				this.$store.commit('removeProductFromCart', productUuid);
			},
			plusQuantity(productUuid) {
				const productToUpdate = this.$store.state.productsInCart.find(item => item.uuid  === productUuid);
				const productIdx = this.$store.state.productsInCart.indexOf(productToUpdate);
				productToUpdate.quantity ++;
				productToUpdate.priceTotal = productToUpdate.price * productToUpdate.quantity;

				this.$store.commit('changeProductInCart', { productIdx, productToUpdate });
			},
			minusQuantity(productUuid) {
				const productToUpdate = this.productsInCart.find(item => item.uuid  === productUuid);
				const productIdx = this.productsInCart.indexOf(productToUpdate);
				if (productToUpdate.quantity > 1) {
					productToUpdate.quantity --;
					productToUpdate.priceTotal = productToUpdate.price * productToUpdate.quantity;

					this.$store.commit('changeProductInCart', { productIdx, productToUpdate });
				}
			},
			isBtnDisabled() {
				return this.$store.state.productsInCart.length === 0;
			}
		},
		computed: {
			totalPrice() {
				return this.productsInCart.reduce((totalPrice, product) => totalPrice + product.priceTotal, 0);
			},
			productsInCart() {
				return this.$store.state.productsInCart;
			}
		}
	}
</script>
