<template>
	<div>
		<slider />
		<popular-categories />
		<special-offer />
	</div>
</template>

<script>

	import PopularCategories from '../components/Homepage/PopularCategories';
	import Slider from '../components/Homepage/Slider';
	import SpecialOffer from '../components/Homepage/SpecialOffer';

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
