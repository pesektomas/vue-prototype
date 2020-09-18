<template>
	<div>
		<slider />
		<popular-categories />
		<special-offer />
	</div>
</template>

<script>

	import PopularCategories from './PopularCategories';
	import Slider from './Slider';
	import SpecialOffer from './SpecialOffer';

	export default {
		data: function() {
			return {
			}
		},

		components: {
			Slider,
			SpecialOffer,
			PopularCategories
		}
	}
</script>
