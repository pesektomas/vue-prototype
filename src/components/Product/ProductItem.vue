<template>
	<div class="list-products__item__in">
		<router-link :to="{ name: 'ProductDetail', params: { slug: setSlug(product.name), productUuid: product.uuid }}" class="list-products__item__block">
			<h3 class="list-products__item__title js-list-products-item-title">
				{{ product.name }}
			</h3>

			<div class="list-products__item__image dont-print">
				<picture>
					<img v-if="product.images.length > 0" :alt=product.name :title=product.name :src=product.images[0].url class="image-product-list loaded" itemprop="image">
				</picture>
				<Flag v-for="(flag, idx) in product.flags" :key="idx" :flag=flag />
			</div>

			<div class="list-products__item__info dont-print">
				<p class="list-products__item__info__description">
					{{ product.description }}
				</p>
				<div class="list-products__item__info__price">
					<div class="list-products__item__info__price__item list-products__item__info__price__item--main">
						{{ product.price.priceWithVat | currency }}
					</div>
					<div class="list-products__item__info__price__item">
						{{ product.price.priceWithoutVat | currency }}
					</div>
				</div>
				<div class="list-products__item__info__availability">
					{{ product.availability.name }}
				</div>
			</div>
		</router-link>

		<div class="list-products__item__action">
			<ProductQuantityElement :product=product />
		</div>
	</div>
</template>

<script>

	import Flag from './Flag/Flag';
	import ProductQuantityElement from '../Form/ProductQuantityElement';

	export default {
		name: 'ProductItem',
		props: {
			product: { type: Object },
		},
		components: {
			Flag,
			ProductQuantityElement
		}
	}
</script>
