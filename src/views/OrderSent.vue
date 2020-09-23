<template>
	<div class="web__line">
		<div class="web__container">
			<h1>Order sent</h1>

			<div class="in-user-text">
				<p> Order number {{ orderNumber }} has been sent, thank you for your purchase. We will contact you about next order status. <br><br> <a href="http://master.heimdall.netdevelo:7980/order-detail/WTv1GNfk8TGsYMXatBo98rjTuSGWhB8VXjwdMfkjkygIwFqvSX">Track</a> the status of your order. <br> We are looking forward to your visit. <br> <b>You have chosen payment by credit card. Please finish it in two business days.</b> <br> </p>
			</div>

			<div class="in-action">
				<div class="in-action__left">
					<router-link to="/" class="btn in-action__btn">
						Back to store
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				orderNumber: this.$route.params.orderNumber
			}
		}
	}
</script>
