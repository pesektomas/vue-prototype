import VueRouter from "vue-router";
import Homepage from "@/views/Homepage";
import ProductDetail from "@/views/ProductDetail";
import CategoryList from "@/views/ProductsByCategory";
import OrderStepCart from "@/views/OrderStepCart";
import OrderStepTransportAndPayment from "@/views/OrderStepTransportAndPayment";
import OrderStepDeliveryData from "@/views/OrderStepDeliveryData";
import OrderSent from "@/views/OrderSent";

export function createRouter() {
	return new VueRouter({
		mode: 'history',
		base: __dirname,
		routes: [
			{ path: '/', component: Homepage },
			{ path: '/product/:slug', name: 'ProductDetail', component: ProductDetail, props: true },
			{ path: '/category/:slug', name: 'CategoryList', component: CategoryList, props: true },
			{ path: '/Order', component: OrderStepCart },
			{ path: '/Order/2', component: OrderStepTransportAndPayment },
			{ path: '/Order/3', component: OrderStepDeliveryData },
			{ path: '/Order/4/:orderNumber', component: OrderSent }
		]
	});
}
