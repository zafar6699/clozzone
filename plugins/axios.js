export default function({ $axios, store, redirect }) {
    $axios.onRequest(config => {
        store.commit("TRUE_LOADING");
    });
    $axios.onResponse(res => {
        store.commit("FALSE_LOADING");
    });
}
