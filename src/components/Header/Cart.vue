<template>
	<div class="header__cart dont-print">
		<div>
			<div class="cart">
				<a class="cart__block  empty no-hover">
					<span class="cart__icon">
						<i class="svg svg-cart"></i>
					</span>
					<div class="cart__info js-cart-info">
						<div v-if="cartBox.items > 0">
							<router-link to="/order" class="nav-link" v-if="cartBox.items > 0">
								<strong class="cart__state">{{ cartBox.items }}</strong> 
									item for <strong class="cart__state">{{ cartBox.totalPrice | currency }}
								</strong>
							</router-link>
						</div>
						<div v-else>
							Your cart is empty
						</div>
					</div>
				</a>
			</div>

			<div class="cart-mobile header__mobile-button">
				<a href="http://127.0.0.1:8000/kosik/" class="header__mobile-button__in">
					<i class="svg svg-cart"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			cartBox() {
				const productsInCart = this.$store.state.productsInCart;
				return {
					items: productsInCart.length,
					totalPrice: productsInCart.reduce((sum, cartItem) => {
						return sum += cartItem.priceTotal;
					}, 0)
				}
			}
		}
	}
</script>