<template>
	<li class="list-products__item">
		<div class="list-products__item__in">
			<router-link :to="{ name: 'ProductDetail', params: { slug: setSlug(product.name), productUuid: product.uuid }}" class="list-products__item__block">
				<h2 class="list-products__item__title">
					{{ product.name }}
				</h2>
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
							<!-- TODO add currency filter -->
							{{ product.price.priceWithVat }}
						</div>
						<div class="list-products__item__info__price__item">
							<!-- TODO add currency filter -->
							{{ product.price.priceWithoutVat }}
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
	</li>
</template>

<script>

	import Flag from './Flag/Flag';
	import ProductQuantityElement from '../Form/ProductQuantityElement';

	export default {
		name: 'ProductItemInList',
		props: {
			product: { type: Object },
		},
		components: {
			Flag,
			ProductQuantityElement
		}

	}
</script>
