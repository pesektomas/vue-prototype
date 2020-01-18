<template>
	<div>
		<OrderNavigation />
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
						required
					/>

					<FormInput 
						label="Last name"
						id="order_personal_info_form_lastName"
						name="order_personal_info_form[lastName]"
						required
					/>
					
					<FormInput 
						label="Email"
						id="order_personal_info_form_email"
						name="order_personal_info_form[email]"
						required
					/>

					<FormInput 
						label="Telephone"
						id="order_personal_info_form_telephone"
						name="order_personal_info_form[telephone]"
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
					/>
					<div id="js-company-fields" style="display: none;">
						<FormInput 
							label="Company name"
							id="order_personal_info_form_companyName"
							name="order_personal_info_form[companyName]"
							required
						/>

						<FormInput 
							label="Company number"
							id="order_personal_info_form_companyNumber"
							name="order_personal_info_form[companyNumber]"
							required
						/>

						<FormInput 
							label="Tax number"
							id="order_personal_info_form_companyTaxNumber"
							name="order_personal_info_form[companyTaxNumber]"
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
						required
					/>

					<FormInput 
						label="City"
						id="order_personal_info_form_city"
						name="order_personal_info_form[city]"
						required
					/>

					<FormInput 
						label="Postcode"
						id="order_personal_info_form_postcode"
						name="order_personal_info_form[postcode]"
						required
					/>

					<FormSelect
						label="Country"
						id="order_personal_info_form_country"
						name="order_personal_info_form[country]"
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
						label=">I want to deliver products to different address than the billing one"
						name="order_personal_info_form[deliveryAddressFilled]"
						id="order_personal_info_form_deliveryAddressFilled"
					/>
					<div id="js-delivery-address-fields" style="display: none;">
					
						<FormInput 
							label="First name"
							id="order_personal_info_form_deliveryFirstName"
							name="order_personal_info_form[deliveryFirstName]"
							required
						/>

						<FormInput 
							label="Last name"
							id="order_personal_info_form_deliveryLastName"
							name="order_personal_info_form[deliveryLastName]"
							required
						/>

						<FormInput 
							label="Company"
							id="order_personal_info_form_deliveryCompanyName"
							name="order_personal_info_form[deliveryCompanyName]"
							:required="false"
						/>

						<FormInput 
							label="Telephone"
							id="order_personal_info_form_deliveryTelephone"
							name="order_personal_info_form[deliveryTelephone]"
							required
						/>

						<FormInput 
							label="Street"
							id="order_personal_info_form_deliveryStreet"
							name="order_personal_info_form[deliveryStreet]"
							required
						/>

						<FormInput 
							label="City"
							id="order_personal_info_form_deliveryCity"
							name="order_personal_info_form[deliveryCity]"
							required
						/>

						<FormInput 
							label="Postcode"
							id="order_personal_info_form_deliveryPostcode"
							name="order_personal_info_form[deliveryPostcode]"
							required
						/>

						<FormSelect
							label="Country"
							id="order_personal_info_form_deliveryCountry"
							name="order_personal_info_form[deliveryCountry]"
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
				/>

				<FormCheckbox 
					label="I want to subscribe to the newsletter"
					name="order_personal_info_form[newsletterSubscription]"
					id="order_personal_info_form_newsletterSubscription"
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
						class="btn btn--success in-action__btn in-action__btn--big btn"
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