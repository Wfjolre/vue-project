import shop from "../../../views/shopping-cart/api/shop";

const state = {
    all:[]
};

const getters ={};

const mutations={
    setProducts(state, products){
        state.all = products;
    },
    decrementProductInventory(state,{id}){
        const product = state.all.find(product=>product.id===id)
        product.inventory--
    }
}

const actions= {
    getAllProducts({ commit }){
        shop.getProducts(products=>{
            commit('setProducts',products)
        })
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}