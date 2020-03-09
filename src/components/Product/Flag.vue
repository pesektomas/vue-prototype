<template>
	<span class="in-flag__item" v-bind:style="{ backgroundColor: flag.color }">
		{{ flag.title }}
	</span>
</template>

<script>
	export default {
		name: 'Flag',
		props: {
			flag: { typ: Object },
		}
	}
</script>