<template>
	<div class="box-detail__info">
		<h1 itemprop="name">
			{{ product.name }}
		</h1>

		<div class="box-detail__info__availability">
			{{ product.availability.name }}
		</div>

		<div class="box-detail-add">
			<div class="box-detail-add__prices">
				<div class="box-detail-add__prices__item box-detail-add__prices__item--main">
					<!-- TODO add currency filter -->
					{{ product.price.priceWithVat }}
				</div>
				<div class="box-detail-add__prices__item">
					<!-- TODO add currency filter -->
					{{ product.price.priceWithoutVat }} excluding VAT
				</div>
			</div>

			<product-quantity-element :product=product />
		</div>

		<dl class="box-detail__info__params">
			<dt>Brand:</dt><dd><a><span itemprop="brand">Sencor</span></a></dd>
			<dt>Catalog number:</dt><dd>{{ product.catnum }}</dd>
			<dt>Serial number:</dt><dd>{{ product.partno }}</dd>
			<dt>EAN:</dt><dd>{{ product.ean }}</dd>
		</dl>
	</div>
</template>

<script>

	import ProductQuantityElement from '../Form/ProductQuantityElement';

	export default {
		props: {
			product: {
				type: Object,
				default: () => {
					return {
						name: '',
						availability: {
							name: ''
						},
						price: {
							priceWithVat: 0,
							priceWithoutVat: 0
						}
					}
				}
			}
		},
		components: {
			ProductQuantityElement
		}
	}
</script>
