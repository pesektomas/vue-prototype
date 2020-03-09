<template>
	<div>
		<h1>Homepage</h1>
		<ul>
			<li class="nav-item"><router-link to="/order" class="nav-link">Order</router-link></li>
			<li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
		</ul>

		Cart items: {{ cartBox.items }}
		Cart totalPrice: {{ cartBox.totalPrice }}

		<h3>Special offers</h3>
		<div class="list-products">
			<ProductItem v-for="product in products" :key="product.uuid" :product=product />
		</div>
	</div>
</template>

<script>

	import ProductItem from '../Product/ProductItem';
	import { products } from '../../api';
	

	export default {
		name: 'Homepage',
		data: function() {
			return {
				products
			}
		},
		computed: {
			cartBox() {
				const productsInCart = this.$store.state.productsInCart;
				return {
					items: productsInCart.length,
					totalPrice: productsInCart.reduce((sum, cartItem) => {
						return sum + cartItem.priceTotal;
					}, 0)
				}
			}
		},
		components: {
			ProductItem
		}
	}
</script>