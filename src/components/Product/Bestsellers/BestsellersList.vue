<template>
	<div class="list-products-line">
		<h2>Bestsellers</h2>
		<ul class="list-products-line__list">
			<li
				class="list-products-line__item js-bestselling-product"
				v-for="(bestsellingProduct, idx) in getBestsellingProducts"
				:key="bestsellingProduct.uuid"
			>
				<router-link :to="{ name: 'ProductDetail', params: { slug: setSlug(bestsellingProduct.name), productUuid: bestsellingProduct.uuid }}" class="list-products-line__item__block">
					<div class="list-products-line__item__position">{{idx+1}}.</div>
					<div class="list-products-line__item__image">
						<picture>
							<img
								v-if="bestsellingProduct.images.length > 0"
								:src=bestsellingProduct.images[0].url
								:alt=bestsellingProduct.name :title=bestsellingProduct.name loading="lazy"
								class="image-product-thumbnail" itemprop="image" />
						</picture>
					</div>
					<h3 class="list-products-line__item__title">{{bestsellingProduct.name}}</h3>
					<div class="list-products-line__item__price">
						<div class="list-products-line__item__price__item list-products-line__item__price__item--main">
							<!-- TODO add currency filter -->
							{{ bestsellingProduct.price.priceWithVat }}
						</div>
						<div class="list-products-line__item__price__item">
							<!-- TODO add currency filter -->
							{{ bestsellingProduct.price.priceWithoutVat }} excluding VAT
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="list-products-line__more js-bestselling-products-load-more-container">
			<span class="btn js-bestselling-products-load-more" @click="toggleShowMoreActive">
				{{ moreLessTitle }} bestsellers
			</span>
		</div>
	</div>
</template>

<script>

	import { GET_BESTSELLERS_PRODUCTS } from '../../../model/Product/getBestellersProductsQuery';

	const COUNT_LESS = 3;
	const COUNT_MORE = 7;

	export default {
		props: {
			categoryUuid: {
				type: String
			}
		},
		data: function() {
			return {
				bestsellingProducts: [],
				showMoreActive: false
			}
		},
		methods: {
			toggleShowMoreActive: function () {
				this.showMoreActive = !this.showMoreActive;
			}
		},
		computed: {
			getBestsellingProducts: function () {
				return this.bestsellingProducts
					.slice(0, this.showMoreActive ? COUNT_MORE : COUNT_LESS)
					.map(item => item.node);
			},
			moreLessTitle: function () {
				return this.showMoreActive ? 'Less' : 'More';
			}
		},
		apollo: {
			bestsellingProducts: {
				query: GET_BESTSELLERS_PRODUCTS,
				update: data => data.products.edges
			}
		},
	}
</script>
