import Vue from 'vue';
import VueCurrencyFilter from 'vue-currency-filter'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import About from './components/About.vue';
import Homepage from './components/Homepage/Homepage.vue';
import OrderStepCart from './components/Order/OrderStepCart.vue';
import OrderStepTransportAndPayment from './components/Order/OrderStepTransportAndPayment.vue';
import OrderStepDeliveryData from './components/Order/OrderStepDeliveryData.vue';

import OrderPreview from './state/OrderPreview';
import DeliveryData from './state/DeliveryData';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCurrencyFilter, {
	symbol : '€',
	thousandsSeparator: ' ',
	fractionCount: 2,
	fractionSeparator: ',',
	symbolPosition: 'back',
	symbolSpacing: true
});

const vuexPersist = new VuexPersist({
	key: 'vue-prototype',
	storage: window.localStorage
});

const store = new Vuex.Store({
	state: {
		orderPreview: new OrderPreview(),
		productsInCart: [],
		deliveryData: new DeliveryData()
	},
	mutations: {
		setTransportMethod (state, transportMethod) {
			state.orderPreview.setTransportMethod(transportMethod);
		},
		setPaymentMethod(state, paymentMethod) {
			state.orderPreview.setPaymentMethod(paymentMethod);
		},
		addProductIntoCart(state, productToCart) {
			state.productsInCart.push(productToCart);
		},
		removeProductFromCart(state, productUuidToRemove) {
			state.productsInCart = state.productsInCart.filter(item => item.uuid !== productUuidToRemove);
		},
		changeProductInCart(state, { productIdx, productToUpdate }) {
			state.productsInCart.splice(productIdx, 1, productToUpdate);
		},
		changeDeliveryData(state, { property, value }) {
			if (property in state.deliveryData) {
				state.deliveryData[property] = value;
			}
		}
	},
	plugins: [vuexPersist.plugin]
});

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Homepage },
		{ path: '/about', component: About },
		{ path: '/order', component: OrderStepCart },
		{ path: '/order/2', component: OrderStepTransportAndPayment },
		{ path: '/order/3', component: OrderStepDeliveryData }
	]
});

Vue.config.productionTip = false

new Vue({
	store,
	router,
	template: `
	<div id="app">
		<div class="web__in">
			<div class="web__main">
				<div class="web__main__content">
					<router-view class="view"></router-view>
				</div>
			</div>
		</div>
	</div>`
}).$mount('#app')
