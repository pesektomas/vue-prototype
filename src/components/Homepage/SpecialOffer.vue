<template>
	<div class="web__line">
		<div class="web__container">
			<div id="top-products">
				<h2>Special offers</h2>

				<ul class="list-products">
					<li class="list-products__item" v-for="product in products" :key="product.node.uuid">
						<product-item :product=product.node />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import { GET_SPECIAL_OFFER_PRODUCTS } from '../../model/Product/getSpecialOfferProductsQuery';
	import ProductItem from '../Product/ProductItem';

	export default {
		data: function() {
			return {
				products: [],
			}
		},
		apollo: {
			products: {
				query: GET_SPECIAL_OFFER_PRODUCTS,
				update: data => data.products.edges
			}
		},
		components: {
			ProductItem
		}
	}
</script>
