export const state = () => ({
    products: [],
    status: "",
    error: ""
});

export const mutations = {
    BASCET_REQUEST(state) {
        state.status = "loading...";
        state.error = "";
    },
    BASCET_SUCCESS(state, products) {
        state.products = products;
        state.status = ""
    },
    PUSH_ONE_PRODUCT_TO_PRODUCTS(state, oneProduct) {
        state.products = [...state.products, oneProduct];
        state.status = "";
    },
    BASCET_FAILURE(state, error) {
        state.error = error;
        state.status = "";
    }

};

export const actions = {
    GET_TO_BASCET({ commit, dispatch }) {
        commit('BASCET_REQUEST');
        this.$axios.$get('/like/me')
            .then(res => {
                // console.log(res.data);
                commit('BASCET_SUCCESS', res.data)
            }).catch(err => {
                commit('BASCET_FAILURE', err);
            })
    },
    ADD_TO_BASCET({ commit, dispatch }, data) {
        commit('BASCET_REQUEST');
        this.$axios.$post('/like/create', data)
            .then(res => {
                dispatch('GET_TO_BASCET');
                commit('PUSH_ONE_PRODUCT_TO_PRODUCTS', res.data);

            }).catch(err => {
                commit('BASCET_FAILURE', err);
            });
    },
    EDIT_ONE_PRODUCT({ commit, dispatch }, data) {
        commit('BASCET_REQUEST');
        this.$axios.$put(`/like/update/${data._id}`, data)
            .then(res => {
                dispatch("GET_TO_BASCET");
            })
            .catch(err => {
                commit('BASCET_FAILURE', err);
            })
    },
    DELETE_ONE_PRODUCT_FROM_BASCET({ commit, dispatch }, id) {
        commit('BASCET_REQUEST');
        this.$axios.$delete(`/like/rm/${id}`)
            .then(res => {
                dispatch('GET_TO_BASCET');

            }).catch(err => {
                commit('BASCET_FAILURE', err);
            });
    }
}

