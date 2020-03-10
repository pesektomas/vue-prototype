<template>
	<div class="form-line">
		<div class="form-choice">
			<input
				type="checkbox"
				:id=this.id
				:name=this.name
				class="css-checkbox"
				v-bind:value="value"
				:checked="value"
				v-on:input="$emit('input', !value)"
			/>
			<label
				class="css-checkbox__image"
				:for=this.id
			>
				{{ this.label }}
			</label>
			<span
				class="js-validation-errors-list js-validation-error-list-order_personal_info_form_companyCustomer form-error form-error--choice display-none"
			>
				<span class="form-error__icon">
					<i class="svg svg-warning"></i>
				</span>
				<ul class="form-error__list"></ul>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FormCheckbox',
		props: {
			label: { type: String },
			name: { type: String },
			id: { type: String },
			value: {}
		}
	}
</script>