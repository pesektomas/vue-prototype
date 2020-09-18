<template>
	<dl class="form-line">
		<dt>
			<label :for=this.id :class="{ 'required': required }">
				{{ this.label }}:
				<span :v-if="required" class="form-input-required">*</span>
			</label>
		</dt>
		<dd>
			<select
				:id=this.id
				:name=this.name
				class="input"
				v-bind:value="value"
				v-on:input="$emit('input', $event.target.value)"
			>
				<option
					v-for="option in this.options"
					:key=option.id
					:value=option.id
				>
					{{ option.name }}
				</option>
			</select>

			<span
				class="js-validation-errors-list js-validation-error-list-order_personal_info_form_country form-error form-error--line display-none"
			>
				<span class="form-error__icon">
					<i class="svg svg-warning"></i>
				</span>
				<ul class="form-error__list"></ul>
			</span>
		</dd>
	</dl>
</template>

<script>
	export default {
		props: {
			label: { type: String },
			name: { type: String },
			id: { type: String },
			required: { type: Boolean },
			options: { type: Array },
			value: {}
		}
	}
</script>
