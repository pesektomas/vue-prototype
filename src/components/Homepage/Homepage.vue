<template>
	<div>
		<h1>Homepage</h1>
		
		<router-link to="/order" class="nav-link" v-if="cartBox.items > 0">
			Cart items: {{ cartBox.items }}
			Cart totalPrice: {{ cartBox.totalPrice }}
		</router-link>
		<div v-else>
			Cart is empty
		</div>

		<h3>Special offers</h3>
		<div class="list-products">
			<ProductItem v-for="product in products" :key="product.uuid" :product=product />
		</div>

		<ul>
			<li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
		</ul>
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