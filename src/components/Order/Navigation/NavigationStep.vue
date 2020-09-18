<template>
	<li
		class="box-progress__item"
		:class="{ 'box-progress__item--active': isActive() }"
	>
		<span class="box-progress__item__inner">
			<router-link :to=this.stepPath :class="{'nav-link': true, 'box-progress__item--active': isActive() }">
				<span class="box-progress__item__step">{{ stepNum }}.</span>
				<span class="box-progress__item__title">{{ stepName }}</span>
			</router-link>
		</span>
	</li>
</template>

<script>
	export default {
		props: {
			stepNum: { type: String },
			stepName: { type: String },
			stepPath: { type: String },
		},
		methods: {
			isActive() {
				return this.$router.history.current.path === this.stepPath;
			}
		},
	}
</script>
