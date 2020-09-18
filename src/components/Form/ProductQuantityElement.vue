<template>
	<form name="add_product_form" method="post" class="dont-print" role="form">
		<span class="form-input-spinbox js-spinbox">
			<input type="text" name="add_product_form[quantity]" required="required" class="form-input-spinbox__input input-no-style input" :value="quantity">
			<button type="button" class="btn-no-style form-input-spinbox__btn" v-on:click="plusQuantity">+</button>
			<button type="button" class="btn-no-style form-input-spinbox__btn form-input-spinbox__btn--minus" v-on:click="minusQuantity">-</button>
		</span>
		<button type="button" name="add_product_form[add]" class="btn--success  btn id__add_product_form_add" v-on:click="addToCart">Add to cart</button>
	</form>
</template>

<script>
	export default {
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
					productInCart.quantity += this.quantity;
					productInCart.priceTotal = productInCart.price * productInCart.quantity;
					this.$store.commit('changeProductInCart', { productIdx, productToUpdate: productInCart });

					return;
				}

				this.$store.commit('addProductIntoCart', {
					uuid: this.product.uuid,
					name: this.product.name,
					link: this.product.link,
					image: this.product.images.length > 0 ? this.product.images[0].url : null,
					price: this.product.price.priceWithVat,
					priceTotal: this.product.price.priceWithVat * this.quantity,
					quantity: this.quantity,
					vat: this.product.price.vatAmount
				});
			}
		}
	}
</script>
