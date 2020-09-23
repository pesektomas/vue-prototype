<template>
	<div>
		<breadcrumb />
		<div class="web__line">
			<div class="web__container">
				<div itemscope="" itemtype="http://schema.org/Product">
					<div class="box-detail">
						<product-detail-box-image :product=product />
						<product-detail-box-info :product=product />
					</div>
					<product-detail-tab :product=product />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import { GET_PRODUCT_DETAIL } from '../model/Product/getProductDetailQuery';
	import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
	import ProductDetailBoxImage from '../components/Product/ProductDetailBoxImage.vue';
	import ProductDetailBoxInfo from '../components/Product/ProductDetailBoxInfo.vue';
	import ProductDetailTab from '../components/Product/Tab/ProductDetailTab.vue';

	export default {
		data: function () {
			return {
				product: {}
			};
		},
		props: {
			productUuid: {type: String}
		},
		created() {
			if (this.productUuid) {
				this.$store.commit('setCurrentProductUuid', { currentProductUuid: this.productUuid });
			}
		},
		apollo: {
			product: {
				query: GET_PRODUCT_DETAIL,
				variables() {
					return {
						uuid: this.productUuid || this.$store.state.currentProductUuid,
					}
				}
			}
		},
		components: {
			Breadcrumb: Breadcrumb,
			ProductDetailBoxImage: ProductDetailBoxImage,
			ProductDetailBoxInfo: ProductDetailBoxInfo,
			ProductDetailTab: ProductDetailTab
		}
	}
</script>
