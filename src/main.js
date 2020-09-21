import App from "./App.vue";
import Vue from 'vue';
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import getSlug from 'speakingurl';

import { createApolloClient } from './model/Apollo/apolloClientFactory';
import { createRouter } from './model/Router/routerFactory';
import { createStore } from "./model/Store/storeFactory";

Vue.use(VueApollo)
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.mixin({
	methods: {
		setSlug: function (value) {
			return getSlug(value, {});
		},
	},
})

const store = createStore();

const apolloProvider = new VueApollo({
	defaultClient: createApolloClient(),
})

const router = createRouter();

Vue.config.productionTip = false

new Vue({
	apolloProvider,
	store,
	router,
	render: h => h(App)
}).$mount('#app')
