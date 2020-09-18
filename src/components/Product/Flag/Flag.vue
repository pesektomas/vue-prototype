<template>
	<span class="in-flag__item" v-bind:style="{ backgroundColor: flag.rgbColor }">
		{{ flag.name }}
	</span>
</template>

<script>
	export default {
		props: {
			flag: { typ: Object },
		}
	}
</script>
