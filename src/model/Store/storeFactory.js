import Vuex from "vuex";
import OrderPreview from "@/model/Order/OrderPreview";
import DeliveryData from "@/model/Order/DeliveryData";
import VuexPersist from "vuex-persist";

export function createStore() {

	const vuexPersist = new VuexPersist({
		key: 'vue-prototype',
		storage: window.localStorage
	});

	return new Vuex.Store({
		state: {
			orderPreview: new OrderPreview(),
			productsInCart: [],
			deliveryData: new DeliveryData(),
			currentProductUuid: null,
			currentCategoryUuid: null
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
			},
			clearProductsAndOrderPreview(state) {
				state.productsInCart = [];
				state.orderPreview = new OrderPreview();
			},
			setCurrentProductUuid(state, { currentProductUuid }) {
				state.currentProductUuid = currentProductUuid;
			},
			setCurrentCategoryUuid(state, { currentCategoryUuid }) {
				state.currentCategoryUuid = currentCategoryUuid;
			}
		},
		plugins: [vuexPersist.plugin]
	});
}
