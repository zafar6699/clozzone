export const state = () => ({
    products: []
});

export const mutations = {
    ADD_PRODUCT(state, newProduct) {
        if (!state.products.find((item) => item._id === newProduct._id)) {
            state.products.push(newProduct)
            // console.log('state: shopping-cart', state.products)
        }
    },
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { $axios }) {
        const { data: { data: cartProducts } } = await $axios.get('/cart')
        commit('SET_PRODUCTS', cartProducts)
    },
    async ADD_PRODUCT_BACKEND({ commit }, newProductData) {
        const { data: addedProduct } = await this.$axios.post('/cart/add/' + newProductData._id)
        commit('ADD_PRODUCT', addedProduct)
        return { success: true }
    }
}