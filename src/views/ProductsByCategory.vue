<template>
	<div>
		<breadcrumb />

		<div class="web__line">
			<div class="web__container">
				<h1>{{ category.name }}</h1>

				<list-of-subcategories :subcategories=category.children v-if="category.children.length > 0" />
				<bestsellers-list :categoryUuid=category.uuid />
				<div class="box-list js-product-list-with-filter">
					<product-filter />
					<product-list :categoryUuid=category.uuid />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import { GET_CATEGORY_DETAIL } from '../model/Category/getCategoryDetailQuery';
	import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
	import ListOfSubcategories from '../components/Category/ListOfSubcategories';
	import BestsellersList from '../components/Product/Bestsellers/BestsellersList';
	import ProductFilter from '../components/Product/Filter/ProductFilter';
	import ProductList from '../components/Product/Lists/ProductList';

	export default {
		data: function () {
			return {
				category: {}
			};
		},
		props: {
			categoryUuid: {type: String}
		},
		created() {
			if (this.categoryUuid) {
				this.$store.commit('setCurrentCategoryUuid', { currentCategoryUuid: this.categoryUuid });
			}
		},
		apollo: {
			category: {
				query: GET_CATEGORY_DETAIL,
				variables() {
					return {
						uuid: this.categoryUuid || this.$store.state.currentCategoryUuid,
					}
				}
			}
		},
		components: {
			Breadcrumb,
			ListOfSubcategories,
			BestsellersList,
			ProductFilter,
			ProductList
		}
	}
</script>
