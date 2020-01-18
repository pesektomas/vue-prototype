<template>
	<div>
		<div class="web__line">
			<div class="web__container"></div>
		</div>
		<div class="web__line">
			<div class="web__container">
				<ul class="box-progress">
					<NavigationStep stepNum="1" stepName="Cart" stepPath="/order" key="cart" />
					<NavigationStep stepNum="2" stepName="Shipping and payment" stepPath="/order/2" key="shippingAndPayment" />
					<NavigationStep stepNum="3" stepName="Delivery data" stepPath="/order/3" key="deliveryData" />
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import NavigationStep from './navigation/NavigationStep';

	export default {
		name: 'OrderNavigation',
		components: {
			NavigationStep
		}
	}
</script>
