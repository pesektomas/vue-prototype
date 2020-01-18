<template>
	<div>
		<OrderNavigation />
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
							<CartItem 
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
										{{totalPrice}}
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
								<router-link to="/order/2" class="btn btn--success in-action__btn">Order</router-link>
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
	import CartItem from './CartItem';
	import OrderNavigation from './OrderNavigation';
	
	export default {
		name: 'OrderStepCart',
		components: {
			CartItem,
			OrderNavigation
		},
		methods: {
			removeItem(productUuid) {
				this.productsInCart = this.productsInCart.filter(item => item.uuid  !== productUuid);				
			}, 
			plusQuantity(productUuid) {
				const product = this.productsInCart.find(item => item.uuid  !== productUuid);
				const itemIdx = this.productsInCart.indexOf(product);
				product.quantity ++;
				product.priceTotal = product.price * product.quantity;

				this.productsInCart.splice(itemIdx, 1, product);
			},
			minusQuantity(productUuid) {
				const product = this.productsInCart.find(item => item.uuid  !== productUuid);
				const itemIdx = this.productsInCart.indexOf(product);
				if (product.quantity > 1) {
					product.quantity --;
					product.priceTotal = product.price * product.quantity;
				}

				this.productsInCart.splice(itemIdx, 1, product);
			},
			isBtnDisabled() {
				return this.productsInCart.length === 0;
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