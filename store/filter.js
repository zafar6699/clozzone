export const state = () => ({
    // perPage: null,
    // total: null,
    // currentPage: 1,

    filter: [],
})

export const mutations = {
    // setPerPage(state, perPage) {
    //   state.perPage = perPage
    // },
    // setTotal(state, total) {
    //   state.total = total
    // },
    // setCurrentPage(state, currentPage) {
    //   state.currentPage = currentPage
    // },

    setFilter(state, filter) {
        state.filter = filter
    },

}

export const actions = {
    async fetchFilter({ commit }, { brand = [], category = [], limit = 12, page = 1, price = {
        end: 5000000,
        start: 0,
    } }) {
        return await new Promise((resolve, reject) => {
            this.$axios.post(`product/filter/`, {
                brand,
                category,
                limit,
                page,
                price
            }
            )
                .then(res => {
                    commit('setFilter', res.data.data)

                    // commit('setPerPage', res.data.per_page)
                    // commit('setTotal', res.data.total)
                    // commit('setCurrentPage', res.data.current_page)
                    resolve()
                })
                .catch(error => {
                    // console.log(error)
                    // console.log(error.response)
                    // reject(error)
                })
        })
    },




}
