<template>
	<label class="box-chooser__item box-chooser__item--active" for="transport_and_payment_form_transport_0">
		<span class="box-chooser__item__check">
			<input 
				type="radio"
				class="css-radio"
				:name="name"
				:value="id"
				:data-id="id" 
				:checked="id == value"
				@change="changeValue(parseInt(event.target.value, 10))"
				:disabled="disabled"
			>
			<span class="css-radio__image" @click="changeValue(id)"></span>
		</span>

		<span class="box-chooser__item__image">
			<picture>
				<img alt="" title="" :src="image" class="image-transport error loaded" itemprop="image">
			</picture>
		</span>
		<span class="box-chooser__item__title">
			<strong class="box-chooser__item__title__name">
				{{ name }}
			</strong>
			<span class="box-chooser__item__title__description" n-if="description !== null">
				- {{ description }}
			</span>
		</span>
		<span class="box-chooser__item__price">
			{{ price | currency }}
		</span>
	</label>
</template>

<script>
	export default {
		name: 'OrderStepTransportAndPaymentItem',
		props: {
			id: { type: Number },
			image: { type: String },
			name: { type: String },
			description: { type: String },
			price: { type: Number },
			value: { type: Number },
			changeValue: { type: Function},
			disabled: { type: Boolean }
		},
		computed: {
			shouldBeChecked() {
				console.log(this.id); // eslint-disable-line no-console
				console.log(this.value); // eslint-disable-line no-console

				return true;
			}
		}
	}
</script>