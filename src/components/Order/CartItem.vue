<template>
	<tr class="table-cart__row">
		<td class="table-cart__cell table-cart__cell--image">
			<a :href="product.link" :title="product.name" class="table-cart__cell__image">
				<picture>
					<img alt="" title="" :src="product.image" class="image-product-thumbnail error loaded" itemprop="image">
				</picture>
			</a>
		</td>
		<td class="table-cart__cell table-cart__cell--name">
			<a :href="product.link">
				{{product.name}}
			</a>
			<div class="table-cart__cell__price-mobile">
				{{product.price | currency}}
			</div>
		</td>
		<td class="table-cart__cell table-cart__cell--price">
			{{product.price | currency}}
		</td>
		<td class="table-cart__cell table-cart__cell--price">
			{{product.vat}}%
		</td>
		<td class="table-cart__cell table-cart__cell--amount">
			<span class="form-input-spinbox">
				<input type="text" name="cart_form[quantities][4]" required="required" class="form-input-spinbox__input input-no-style input" :value="product.quantity">
				<button type="button" class="btn-no-style form-input-spinbox__btn" v-on:click="plusQuantity(product.uuid)">+</button>
				<button type="button" class="btn-no-style form-input-spinbox__btn form-input-spinbox__btn--minus" v-on:click="minusQuantity(product.uuid)">-</button>
			</span>
		</td>
		<td class="table-cart__cell table-cart__cell--price">
			{{product.priceTotal| currency}}
		</td>
		<td class="table-cart__cell table-cart__cell--action">
			<a v-on:click="removeItem(product.uuid)">
				<i class="svg svg-remove"></i>
			</a>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'CartItem',
		props: {
			product: { type: Object },
			plusQuantity: { type: Function },
			minusQuantity: { type: Function },
			removeItem:  { type: Function }
		}
	}
</script>