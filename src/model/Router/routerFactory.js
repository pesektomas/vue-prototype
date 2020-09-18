import VueRouter from "vue-router";
import Homepage from "@/components/Homepage/Homepage";
import ProductDetail from "@/components/Product/ProductDetail";
import CategoryList from "@/components/Product/Lists/ProductsByCategory";
import OrderStepCart from "@/components/Order/OrderStepCart";
import OrderStepTransportAndPayment from "@/components/Order/OrderStepTransportAndPayment";
import OrderStepDeliveryData from "@/components/Order/OrderStepDeliveryData";
import OrderSent from "@/components/Order/OrderSent";

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
