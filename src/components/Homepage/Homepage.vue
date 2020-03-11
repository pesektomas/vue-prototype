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
			<ProductItem v-for="product in products" :key="product.node.uuid" :product=product.node />
		</div>

		<ul>
			<li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
		</ul>
	</div>
</template>

<script>

	import ProductItem from '../Product/ProductItem';
	import axios from 'axios';

	export default {
		name: 'Homepage',
		data: function() {
			return {
				products: []
			}
		},
		created () {
			this.getTopProducts();
		},
		methods: {
			async getTopProducts () {
				try {
					const res = await axios.post(
						'https://private-e7f631-fwfeapi.apiary-mock.com/graphql?products', {
							query: `
								products (first: 3) {
									edges {
										node {
											uuid,
											name,
											shortDescription,
											stockQuantity,
											price {
												priceWithVat,
												priceWithoutVat,
												vatAmount
											},
											images {
												type,
												position,
												size,
												url,
												width,
												height
											},
											flags {
												name,
												rgbColor
											},
											link
										}
									}
								}
							`
						}
					);

					this.products = res.data.data.products.edges
				} catch (e) {
					console.log('err', e)
				}
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