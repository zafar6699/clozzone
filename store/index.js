export const state = () => ({
    uploads: "https://uzecom.com",
    category: null,
    basket: [],
    like: null,
    isLoading: false,
    brand: null,
    likeCount: 0,
    isMobile: false,
    isMenu: false,
    likeCount: 0,
    basketCount: 0,
    oneProduct: null,
    local: [],
    localBasket: []
});
export const mutations = {
    delete_basket(state, index) {
        state.basket.splice(index, 1);
    },
    upcount(state) {
        state.oneProduct.count = state.oneProduct.count + 1;
    },
    local_basket(state, data) {
        state.basket = data;
    },
    remove_local(state) {
        state.localBasket = [];
    },
    change_local(state, data) {
        state.localBasket.push(data);
    },
    downcount(state) {
        state.oneProduct.count = state.oneProduct.count - 1;
    },
    one_product(state, data) {
        state.oneProduct = data;
    },
    CATEGORY_SUCCESS(state, data) {
        state.category = data;
    },
    COUNT_UP(state, data) {
        state.likeCount = data;
    },
    COUNT_BASKET(state, data) {
        state.basketCount = data;
    },

    TRUE_LOADING(state, data) {
        state.isLoading = true;
    },
    FALSE_LOADING(state, data) {
        state.isLoading = false;
    },

    CHANGE_MENU(state) {
        state.isMenu = !state.isMenu;
    },
    changeMobile(state) {
        state.isMobile = !state.isMobile;
    },
    falseMobile(state) {
        state.isMobile = false;
    },
    changeMobileFalse(state) {
        state.isMobile = false;
    },
    GET_BASKET(state, data) {
        state.basket = data;
    },
    GET_LIKE(state, data) {
        state.like = data;
    }
};

export const actions = {
    async getCategory({ commit }) {
        let cat = await this.$axios.$get("category/all");

        commit("CATEGORY_SUCCESS", cat.categoryList);
    },
    async getBasket({ commit }) {
        if (this.$auth.loggedIn) {
            let basket = await this.$axios.$get("basket/me");
            console.log("bassss", basket);
            commit("GET_BASKET", basket.data);
        }
    },
    async getLike({ commit }) {
        if (this.$auth.loggedIn) {
            let like = await this.$axios.$get("like/all");

            commit("GET_LIKE", like.data);
        } else {
            commit("GET_LIKE", []);
        }
    }
};