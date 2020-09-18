<template>
	<div>
		<div class="web__line">
			<div class="web__container"></div>
		</div>
		<div class="web__line">
			<div class="web__container">
				<ul class="box-progress">
					<navigation-step stepNum="1" stepName="Cart" stepPath="/order" key="cart" />
					<navigation-step stepNum="2" stepName="Shipping and payment" stepPath="/order/2" key="shippingAndPayment" />
					<navigation-step stepNum="3" stepName="Delivery data" stepPath="/order/3" key="deliveryData" />
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import NavigationStep from './Navigation/NavigationStep';

	export default {
		components: {
			NavigationStep
		}
	}
</script>
