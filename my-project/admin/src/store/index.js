import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./modules/user";
import cart from './modules/shopping-cart/cart'
import products from './modules/shopping-cart/products'
import todos from "./modules/todo-list/index";

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
    modules:{
        user,
        cart,
        products,
        todos
    },
    getters,
    strict: debug
})

export default store