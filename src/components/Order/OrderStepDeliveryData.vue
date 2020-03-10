<template>
	<div>
		<OrderNavigation />
		<div class="web__line" v-if="deliveryData.errors.length > 0">
			{{ deliveryData.errors }}
		</div>

		<div class="web__line">
			<div class="web__container">
			<div class="box-order">
				<div class="box-order__info">
				<h2>Personal data</h2>
				<fieldset>
					<FormInput 
						label="First name"
						id="order_personal_info_form_firstName"
						name="order_personal_info_form[firstName]"
						v-bind:value="deliveryData.firstName"
						v-on:input="setDeliveryData('firstName', $event)"
						required
					/>

					<FormInput 
						label="Last name"
						id="order_personal_info_form_lastName"
						name="order_personal_info_form[lastName]"
						v-bind:value="deliveryData.lastName"
						v-on:input="setDeliveryData('lastName', $event)"
						required
					/>
					
					<FormInput 
						label="Email"
						id="order_personal_info_form_email"
						name="order_personal_info_form[email]"
						v-bind:value="deliveryData.email"
						v-on:input="setDeliveryData('email', $event)"
						required
					/>

					<FormInput 
						label="Telephone"
						id="order_personal_info_form_telephone"
						name="order_personal_info_form[telephone]"
						v-bind:value="deliveryData.telephone"
						v-on:input="setDeliveryData('telephone', $event)"
						required
					/>
				</fieldset>
				<h2>
					Company data
					<span class="heading-addition">(If I buy on the company behalf)</span>
				</h2>
				<fieldset>
					<FormCheckbox 
						label="I buy on company behalf"
						name="order_personal_info_form[companyCustomer]"
						id="order_personal_info_form_companyCustomer"
						v-bind:value="deliveryData.companyCustomer"
						v-on:input="setDeliveryData('companyCustomer', $event)"
					/>
					<div id="js-company-fields" v-if="deliveryData.companyCustomer">
						<FormInput 
							label="Company name"
							id="order_personal_info_form_companyName"
							name="order_personal_info_form[companyName]"
							v-bind:value="deliveryData.companyName"
							v-on:input="setDeliveryData('companyName', $event)"
							required
						/>

						<FormInput 
							label="Company number"
							id="order_personal_info_form_companyNumber"
							name="order_personal_info_form[companyNumber]"
							v-bind:value="deliveryData.companyNumber"
							v-on:input="setDeliveryData('companyNumber', $event)"
							required
						/>

						<FormInput 
							label="Tax number"
							id="order_personal_info_form_companyTaxNumber"
							name="order_personal_info_form[companyTaxNumber]"
							v-bind:value="deliveryData.companyTaxNumber"
							v-on:input="setDeliveryData('companyTaxNumber', $event)"
							:required="false"
						/>
					</div>
				</fieldset>
				<h2>
					Billing data
					<span class="heading-addition">(This address will be on the tax invoice)</span>
				</h2>
				<fieldset>
					<FormInput 
						label="Street"
						id="order_personal_info_form_street"
						name="order_personal_info_form[street]"
						v-bind:value="deliveryData.street"
						v-on:input="setDeliveryData('street', $event)"
						required
					/>

					<FormInput 
						label="City"
						id="order_personal_info_form_city"
						name="order_personal_info_form[city]"
						v-bind:value="deliveryData.city"
						v-on:input="setDeliveryData('city', $event)"
						required
					/>

					<FormInput 
						label="Postcode"
						id="order_personal_info_form_postcode"
						name="order_personal_info_form[postcode]"
						v-bind:value="deliveryData.postcode"
						v-on:input="setDeliveryData('postcode', $event)"
						required
					/>

					<FormSelect
						label="Country"
						id="order_personal_info_form_country"
						name="order_personal_info_form[country]"
						v-bind:value="deliveryData.country"
						v-on:input="setDeliveryData('country', $event)"
						required
						:options='[{ "id": 1, "name": "Czechia" }, { "id": 2, "name": "Slovakia" }]'
					/>
				</fieldset>
				<h2>
					Shipping address
					<span class="heading-addition">(Products will be delivered to this address)</span>
				</h2>
				<fieldset>
					<FormCheckbox 
						label="I want to deliver products to different address than the billing one"
						name="order_personal_info_form[deliveryAddressFilled]"
						id="order_personal_info_form_deliveryAddressFilled"
						v-bind:value="deliveryData.deliveryAddressFilled"
						v-on:input="setDeliveryData('deliveryAddressFilled', $event)"
					/>
					<div id="js-delivery-address-fields" v-if="deliveryData.deliveryAddressFilled">
					
						<FormInput 
							label="First name"
							id="order_personal_info_form_deliveryFirstName"
							name="order_personal_info_form[deliveryFirstName]"
							v-bind:value="deliveryData.deliveryFirstName"
							v-on:input="setDeliveryData('deliveryFirstName', $event)"
							required
						/>

						<FormInput 
							label="Last name"
							id="order_personal_info_form_deliveryLastName"
							name="order_personal_info_form[deliveryLastName]"
							v-bind:value="deliveryData.deliveryLastName"
							v-on:input="setDeliveryData('deliveryLastName', $event)"
							required
						/>

						<FormInput 
							label="Company"
							id="order_personal_info_form_deliveryCompanyName"
							name="order_personal_info_form[deliveryCompanyName]"
							v-bind:value="deliveryData.deliveryCompanyName"
							v-on:input="setDeliveryData('deliveryCompanyName', $event)"
							:required="false"
						/>

						<FormInput 
							label="Telephone"
							id="order_personal_info_form_deliveryTelephone"
							name="order_personal_info_form[deliveryTelephone]"
							v-bind:value="deliveryData.deliveryTelephone"
							v-on:input="setDeliveryData('deliveryTelephone', $event)"
							required
						/>

						<FormInput 
							label="Street"
							id="order_personal_info_form_deliveryStreet"
							name="order_personal_info_form[deliveryStreet]"
							v-bind:value="deliveryData.deliveryStreet"
							v-on:input="setDeliveryData('deliveryStreet', $event)"
							required
						/>

						<FormInput 
							label="City"
							id="order_personal_info_form_deliveryCity"
							name="order_personal_info_form[deliveryCity]"
							v-bind:value="deliveryData.deliveryCity"
							v-on:input="setDeliveryData('deliveryCity', $event)"
							required
						/>

						<FormInput 
							label="Postcode"
							id="order_personal_info_form_deliveryPostcode"
							name="order_personal_info_form[deliveryPostcode]"
							v-bind:value="deliveryData.deliveryPostcode"
							v-on:input="setDeliveryData('deliveryPostcode', $event)"
							required
						/>

						<FormSelect
							label="Country"
							id="order_personal_info_form_deliveryCountry"
							name="order_personal_info_form[deliveryCountry]"
							v-bind:value="deliveryData.deliveryCountry"
							v-on:input="setDeliveryData('deliveryCountry', $event)"
							required
							:options='[{ "id": 1, "name": "Czechia" }, { "id": 2, "name": "Slovakia" }]'
						/>
					</div>
				</fieldset>
				<h2>Note</h2>
				<fieldset>
					<FormTextarea
						label="Contact us"
						id="order_personal_info_form_note"
						name="order_personal_info_form[note]"
						v-bind:value="deliveryData.note"
						v-on:input="setDeliveryData('note', $event)"
					/>
				</fieldset>
				<h2>Terms and conditions</h2>
				<div class="box-condition">
					<div class="box-condition__in">
						<iframe
							name="js-terms-and-conditions-frame"
							src="http://127.0.0.1:8000/order/terms-and-conditions/"
							width="100%"
						></iframe>
					</div>
					<div class="box-condition__control">
						<button id="js-terms-and-conditions-print" class="btn btn--small" type="button">Print</button>
						<a
							href="http://127.0.0.1:8000/order/terms-and-conditions-download/"
							class="btn btn--small"
						>
							Download
						</a>
					</div>
				</div>

				<FormCheckbox 
					label="I agree with terms and conditions and privacy policy"
					name="order_personal_info_form[legalConditionsAgreement]"
					id="order_personal_info_form_legalConditionsAgreement"
					v-bind:value="deliveryData.legalConditionsAgreement"
					v-on:input="setDeliveryData('legalConditionsAgreement', $event)"
				/>

				<FormCheckbox 
					label="I want to subscribe to the newsletter"
					name="order_personal_info_form[newsletterSubscription]"
					id="order_personal_info_form_newsletterSubscription"
					v-bind:value="deliveryData.newsletterSubscription"
					v-on:input="setDeliveryData('newsletterSubscription', $event)"
				/>

				</div>
				<OrderPreview :orderPreview=orderPreview />
			</div>
			<div class="in-action">
				<div class="in-action__right">
					<button
						type="submit"
						id="order_personal_info_form_save"
						name="order_personal_info_form[save]"
						:class="{ 'btn btn--success': true, 'in-action__btn': true, 'in-action__btn--big': true, 'btn--disabled': isBtnDisabled() }"
						v-on:click="sendOrder"
					>
						Finish the order
					</button>
				</div>
				<div class="in-action__left">
					<router-link to="/order/2" class="btn in-action__btn">Back to shipping and payment selection</router-link>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OrderPreview from './OrderPreview';
	import OrderNavigation from './OrderNavigation';
	import FormInput from '../Form/FormInput';
	import FormSelect from '../Form/FormSelect';
	import FormCheckbox from '../Form/FormCheckbox';
	import FormTextarea from '../Form/FormTextarea';
	
	export default {
		name: "OrderStepDeliveryData",
		data: function () {
			return {
				deliveryData: this.$store.state.deliveryData
			}
		},
		methods: {
			sendOrder: function() {
				if (this.$store.state.deliveryData.check() === true) {
					alert(JSON.stringify(this.$store.state.deliveryData));
				}
			},
			setDeliveryData: function(property, value) {
				this.$store.commit('changeDeliveryData', { property, value });
				this.$store.state.deliveryData.check();
			},
			isBtnDisabled() {
				return this.$store.state.deliveryData.errors.length > 0;
			}
		},
		props: {
			orderPreview: { type: Object }
		},
		components: {
			OrderPreview,
			OrderNavigation,
			FormInput,
			FormSelect,
			FormCheckbox,
			FormTextarea
		}
	};
</script>