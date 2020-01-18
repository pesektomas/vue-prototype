<template>
	<dl class="form-line">
		<dt>
			<label :for=this.id :class="{ 'required': required }">
				{{ this.label }}:
				<span :v-if="required" class="form-input-required">*</span>
			</label>
		</dt>
		<dd>
			<input
				type="text"
				:id=this.id
				:name=this.name
				required="required"
				class="input"
			/>
			<span
				class="js-validation-errors-list js-validation-error-list-order_personal_info_form_firstName form-error form-error--line display-none"
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
		name: 'FormInput',
		props: {
			label: { type: String },
			name: { type: String },
			id: { type: String },
			required: { type: Boolean }
		}
	}
</script>