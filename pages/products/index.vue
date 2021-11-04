<template>
    <div>
        <div class="product" v-if="products != null">
            <div class="pro-top">
                <p>{{ $t("liked") }}</p>
            </div>
            <div class="conatiner-z">
                <div class="row-z" v-if="products.length > 0">
                    <div
                        class="col-30"
                        v-for="(item, index) in products"
                        :key="index"
                    >
                        <ProductCard
                            :product="item.product"
                            :image="item.product.param[0].image"
                        />
                    </div>
                </div>
                <div class="not" v-else>
                    <h2>{{ $t("not") }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: null
        };
    },

    async mounted() {
        this.products = this.$store.state.like;
    },

    methods: {}
};
</script>

<style lang="scss" scoped>
div.product {
    margin-bottom: 50px;
}
.not {
    margin-top: 30px;
    text-align: center;
}
.pro-top {
    width: 100%;
    height: 50px;
    background: rgba(51, 51, 51, 0.19);
    // opacity: 0.5;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 0;
        color: #333333 !important;
        opacity: 1;
        z-index: 2;
    }
}
div.col-30 {
    padding: 0px 12px;
    width: 25%;
    margin-bottom: 25px;
}
@media (max-width: 768px) {
    div.col-30 {
        width: 50% !important;
    }
}
@media (max-width: 576px) {
    .pro-top {
        height: unset !important;
        padding: 5px 0;
    }
}
</style>
