<template>
    <div class="index-home" v-if="index != null">
        <Slider :slider="index.slider" />
        <Product :product="index.dailyProducts" />
        <Banner :banner="index.banner" />
        <Xit :xit="index.top" />
        <Brand :brand="index.brand" />

        <Success v-if="payed" />
    </div>
</template>

<script>
import Slider from "../components/home/Slider";
import Product from "../components/home/Product";
import Banner from "../components/home/Banner";
import Xit from "../components/home/Xit";
import Brand from "../components/home/Brand";
export default {
    components: { Slider, Product, Banner, Xit, Brand },
    data() {
        return {
            categoryList: [],
            idList: [],
            index: null,
            payed: false
        };
    },
    head() {
        return {
            title: "Интернет-магазин одежды и обуви в Ташкенте - Clozzone.com",
            meta: [
                {
                    hid:
                        "Интернет-магазин одежды и обуви в Ташкенте - Clozzone.com",
                    name:
                        "Интернет-магазин одежды и обуви в Ташкенте - Clozzone.com",
                    content:
                        "Интернет-магазин одежды и обуви в Ташкенте - Clozzone.com"
                }
            ]
        };
    },
    async mounted() {
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();
        // });

        let catId = localStorage.getItem("gender");
        let category = await this.$store.state.category;
        await this.getChildren(catId, category);

        let index = await this.$axios.$post("/index", {
            category: this.idList
        });
        this.index = index;

        // console.log("index->", index);
        // Loading implemented finish

        // this.$nuxt.$loading.finish();

        if (this.$route.query.payed) {
            this.payed = true;
        }

        setTimeout(() => {
            this.payed = false;
        }, 2000);
    },
    methods: {
        // get find all children

        getChild(category) {
            category.forEach(item => {
                this.idList.push(item._id);

                if (item.children.length > 0) {
                    this.getChild(item.children);
                }
            });
        },

        // find id category
        getChildren(id, category) {
            category.forEach(item => {
                if (item._id == id) {
                    this.idList.push(item._id);
                    if (item.children.length > 0) {
                        this.getChild(item.children);
                    }
                } else if (item.children.length > 0 && item._id != id) {
                    this.getChildren(id, item.children);
                }
            });
        }
    }
};
</script>

<style lang="scss">
.index-home {
    .slick-slide {
        padding: 0px 12px;
    }

    @media (max-width: 575px) {
        .slick-slide {
            padding: 0px 7px;
        }
    }
}
div.similar-products[data-v-86f2de84] {
    .slick-slide {
        padding: 0px 12px;
    }
}
@media (max-width: 575px) {
    .brand {
        h1 {
            margin-bottom: 0 !important;
        }
    }
    .slick-slide {
        padding: 0px 7px;
    }
}
</style>
