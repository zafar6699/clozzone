<template>
    <div>
        <div class="container-one" v-if="brand != null">
            <div class="image" v-if="brand.size != undefined">
                <img :src="$store.state + brand.size" alt="" />
            </div>

            <div v-else style="padding: 50px 0px;">
                <h3>{{ $t("esize") }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            brand: null
        };
    },

    async mounted() {
        let brands = await this.$axios.$get("brands/test/ui");

        this.brand = brands.data.find(
            item => item._id == this.$route.query.brand
        );

        console.log(this.brand);
    },

    methods: {}
};
</script>

<style lang="scss" scoped></style>
