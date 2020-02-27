<template>
	<dl class="form-line">
		<dt>
			<label :for=this.id>
				{{ this.label }}:
			</label>
		</dt>
		<dd>
			<textarea
				:id=this.id
				:name=this.name
				class="input input--textarea"
				rows="8"
				v-bind:value="value"
				v-on:input="$emit('input', $event.target.value)"
			></textarea>
			<span
				class="js-validation-errors-list js-validation-error-list-order_personal_info_form_note form-error form-error--line display-none"
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
		name: 'FormTextarea',
		props: {
			label: { type: String },
			name: { type: String },
			id: { type: String },
			value: { type: Object }
		}
	}
</script>