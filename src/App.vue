<template>
	<div id="app">
		<WindowBar />
		<div class="web__in">

			<Header />
			<Menu />

			<div class="web__main">
				<div class="web__main__content">
					<router-view class="view"></router-view>
				</div>
			</div>

			<Footer />
		</div>
	</div>
</template>

<script>

import WindowBar from './components/WindowBar.vue';
import Header from './components/Header/Header.vue';
import Menu from './components/Category/Menu.vue';
import Footer from './components/Footer/Footer.vue';

export default {
	components: {
		WindowBar,
		Header,
		Menu,
		Footer
	}
}
</script>
