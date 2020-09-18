<template>
	<div class="in-tab">
		<div class="in-tab__head dont-print">
			<a v-on:click="setActive('description')" class="in-tab__head__item" :class="isActive('description')"  data-tab-id="description">
				Product information
			</a>
			<a v-on:click="setActive('accessories')" class="in-tab__head__item" :class="isActive('accessories')" data-tab-id="accessories">
				Accessories
			</a>
		</div>
		<div class="in-tab__content">
			<a class="in-tab__content__title" data-tab-id="description">
				Product information<i class="svg svg-arrow"></i>
			</a>
			<div class="in-tab__content__item" :class="isActive('description')" data-tab-id="description">
				<div class="in-user-text" itemprop="description">
					<p>
						{{ product.description }}
					</p>
					<div class="h3">Technical parameters</div>
					<table class="table-params margin-top-20">
						<tbody>
							<tr v-for="(parameter, idx) in product.parameters" :key="idx">
								<th>{{ parameter.parameterName }}</th>
								<td>{{ parameter.parameterValue }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<a class="in-tab__content__title" data-tab-id="accessories">
				Accessories<i class="svg svg-arrow"></i>
			</a>
			<div class="in-tab__content__item" :class="isActive('accessories')" data-tab-id="accessories">
				<ul class="list-products ">
					<product-item-in-list
						v-for="product in accessories" :key="product.node.uuid"
						:product=product.node
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import { GET_ACCESSORIES_PRODUCTS } from '../../../model/Product/getAccessoriesProductsQuery';
	import ProductItemInList from '../ProductItemInList';

	export default {
		data: function() {
			return {
				activeTab: 'description',
				accessories: []
			};
		},
		props: {
			product: {
				type: Object,
				default: function () {
					return {
						images: []
					}
				}
			}
		},
		methods: {
			setActive (activeTab) {
				this.activeTab = activeTab;
			},
			isActive (tab) {
				if (this.activeTab === tab) {
					return 'active';
				}

				return '';
			}
		},
		apollo: {
			accessories: {
				query: GET_ACCESSORIES_PRODUCTS,
				update: data => data.products.edges
			}
		},
		components: {
			ProductItemInList
		}
	}
</script>
