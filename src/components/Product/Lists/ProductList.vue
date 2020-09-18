<template>
	<div class="box-list__content">
		<div class="js-product-list-ajax-filter-products-with-controls">
			<div>
				<div class="box-order-type">
					<a href="#" class="box-order-type__item js-product-list-ordering-mode active" data-cookie-name="productListOrderingMode" data-ordering-mode="priority">
						TOP
					</a>
					<a href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="name_asc">
						alphabetically A -&gt; Z
					</a>
					<a href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="name_desc">
						alphabetically Z -&gt; A
					</a>
					<a href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="price_asc">
						from the cheapest
					</a>
					<a href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="price_desc">
						from most expensive
					</a>
				</div>
			</div>

			<div class="js-product-list-with-paginator">
				<div class="in-paging">
					<strong class="in-paging__info">
						Displaying products
						1 - <span class="js-pagination-to-item">4</span>
						from
						<span class="js-paging-total-count">4</span>
					</strong>
					<div class="in-paging__control">
						<span class="in-paging__control__item in-paging__control__item--arrow in-paging__control__item--arrow--inactive">&lt;</span>
						<span class="in-paging__control__item in-paging__control__item--num in-paging__control__item in-paging__control__item--num--active">1</span>
						<a class="in-paging__control__item in-paging__control__item--num" href="/tv-audio/?page=2" rel="next">2</a>
						<a class="in-paging__control__item in-paging__control__item--num" href="/tv-audio/?page=3">3</a>
						<a class="in-paging__control__item in-paging__control__item--arrow in-paging__control__item in-paging__control__item--arrow" href="/tv-audio/?page=2" rel="next">&gt;</a>
					</div>
				</div>

				<ul class="list-products js-list js-product-list ">
					<li
						class="list-products__item js-list-products-item"
						v-for="product in category.products.edges"
						:key=product.node.uuid
					>
						<product-item :product=product.node />
					</li>
				</ul>

				<div class="text-center margin-bottom-20" v-if="category.products.pageInfo.hasNextPage">
					<input
						type="button"
						class="js-load-more-button btn"
						value="Load next 12 products"
						@click="showMore">
				</div>

				<div class="in-paging">
					<strong class="in-paging__info">
						Displaying products
						1 - <span class="js-pagination-to-item">4</span>
						from
						<span class="js-paging-total-count">4</span>
					</strong>
					<div class="in-paging__control">
						<span class="in-paging__control__item in-paging__control__item--arrow in-paging__control__item--arrow--inactive">&lt;</span>
						<span class="in-paging__control__item in-paging__control__item--num in-paging__control__item in-paging__control__item--num--active">1</span>
						<a class="in-paging__control__item in-paging__control__item--num" href="/tv-audio/?page=2" rel="next">2</a>
						<a class="in-paging__control__item in-paging__control__item--num" href="/tv-audio/?page=3">3</a>
						<a class="in-paging__control__item in-paging__control__item--arrow in-paging__control__item in-paging__control__item--arrow" href="/tv-audio/?page=2" rel="next">&gt;</a>
					</div>
				</div>
			</div>
		</div>

		<div class="box-list__description">
			<div class="box-list__description__text in-user-text js-category-description box-list__description__text--small">
				Our electronics include devices used for entertainment (flat screen TVs, DVD players, DVD movies, iPods, video games, remote control cars, etc.), communications (telephones, cell phones, email-capable laptops, etc.) and home office activities (e.g., desktop computers, printers, paper shredders, etc.).
			</div>
			<div class="box-list__description__more">
				<span class="link-style box-list__description__more__btn js-category-description-load-more" style="display: block;">
					View more
				</span>
			</div>
		</div>
	</div>
</template>

<script>

	import { GET_PRODUCTS_BY_CATEGORY } from '../../../model/Product/getProductsByCategoryQuery';
	import ProductItem from '../../Product/ProductItem';

	export default {
		data: function () {
			return {
				category: {
					products: {
						pageInfo: {
							hasNextPage: false
						}
					}
				},
				cursor: null
			};
		},
		props: {
			categoryUuid: { type: String }
		},
		methods: {
			showMore () {
				this.cursor = this.category.products.pageInfo.endCursor;
				this.$apollo.queries.category.fetchMore({
					variables: {
						after: this.cursor,
						uuid: this.categoryUuid
					},
					updateQuery: (previousResult, { fetchMoreResult }) => {
						console.log(previousResult);
						console.log(fetchMoreResult);
						return {
							category: {
								__typename: previousResult.category.__typename,
								products: {
									__typename: previousResult.category.products.__typename,
									edges: [...previousResult.category.products.edges, ...fetchMoreResult.category.products.edges],
									pageInfo: fetchMoreResult.category.products.pageInfo
								}
							}
						};
					}
				});
			}
		},
		apollo: {
			category: {
				query: GET_PRODUCTS_BY_CATEGORY,
				variables() {
					return {
						uuid: this.categoryUuid,
						after: ''
					}
				}
			}
		},
		components: {
			ProductItem
		}
	}
</script>
