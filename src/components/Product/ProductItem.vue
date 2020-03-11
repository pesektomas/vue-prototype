<template>
	<div class="list-products__item__in">
		<a :href=product.link class="list-products__item__block">
			<h3 class="list-products__item__title js-list-products-item-title">
				{{ product.name }}
			</h3>

			<div class="list-products__item__image dont-print">
				<picture>
					<img :alt=product.name :title=product.name :src=product.images[0].url class="image-product-list loaded" itemprop="image">
				</picture>
				<Flag v-for="flag in product.flags" :key="flag.uuid" :flag=flag />
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
					{{ product.availability }}
				</div>
			</div>
		</a>

		<div class="list-products__item__action">
			<form name="add_product_form" method="post" class="dont-print" role="form">
				<span class="form-input-spinbox js-spinbox">
					<input type="text" name="add_product_form[quantity]" required="required" class="form-input-spinbox__input input-no-style input" :value="quantity">
					<button type="button" class="btn-no-style form-input-spinbox__btn" v-on:click="plusQuantity">+</button>
					<button type="button" class="btn-no-style form-input-spinbox__btn form-input-spinbox__btn--minus" v-on:click="minusQuantity">-</button>
				</span>
				<button type="button" name="add_product_form[add]" class="btn--success  btn id__add_product_form_add" v-on:click="addToCart">Add to cart</button>
			</form>
		</div>
	</div>
</template>

<script>

	import Flag from './Flag';

	export default {
		name: 'ProductItem',
		data: function() {
			return {
				quantity: 1
			}
		},
		props: {
			product: { type: Object },
		},
		methods: {
			plusQuantity () {
				this.quantity ++;
			},
			minusQuantity () {
				if (this.quantity > 1) {
					this.quantity --;
				}
			},
			addToCart () {
				const productInCart = this.$store.state.productsInCart.find(item => item.uuid  === this.product.uuid);
				if (productInCart) {
					const productIdx = this.$store.state.productsInCart.indexOf(productInCart);
					productInCart.quantity ++;
					this.$store.commit('changeProductInCart', { productIdx, productToUpdate: productInCart });

					return;
				}

				this.$store.commit('addProductIntoCart', {
					uuid: this.product.uuid,
					name: this.product.name,
					link: this.product.link,
					image: this.product.images[0].url,
					price: this.product.price.priceWithVat,
					priceTotal: this.product.price.priceWithVat * this.quantity,
					quantity: this.quantity,
					vat: this.product.price.vatAmount
				});
			}
		},
		components: {
			Flag: Flag
		}
	}
</script>