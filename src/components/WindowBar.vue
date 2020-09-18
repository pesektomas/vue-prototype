<template>
	<div class="window-bar dont-print">
		<div class="window-bar__item" v-if="enabled">
			<strong>Nastavení e-mailů:</strong>
			Je nastaven master e-mail no-reply@shopsys.com.
			Ve whitelistu jsou povoleny následující výrazy: /@shopsys\.com$/.
			Všechny e-maily budou doručeny pouze na uvedené adresy.

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			enabled: { typ: Boolean, default: true },
		}
	}
</script>
