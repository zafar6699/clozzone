<template>
    <div>
        <div class="brand">
            <div class="container-one">
                <h1>{{ $t("brands") }}</h1>
                <!-- <pre> {{ brand }}</pre> -->
                <Carousel v-bind="slickOptions">
                    <div
                        v-for="(item, index) in brand"
                        :key="index"
                        class="item-brand"
                    >
                        <!-- <p>item.name</p> -->
                        <nuxt-link
                            :to="{
                                name: `filter___${$i18n.locale}`,
                                query: { brand: item._id, category: category }
                            }"
                        >
                            <img
                                :src="$store.state.uploads + item.image"
                                alt=""
                            />
                        </nuxt-link>
                        <!-- <img src="@/assets/img/brand/pullbear.png" alt="" /> -->
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        brand: {
            type: Array
        }
    },
    data() {
        return {
            category: "",
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 7,
                // slidesToScroll: 1,
                autoplay: true,
                speed: 200,
                autoplaySpeed: 1000,
                cssEase: "linear",
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            speed: 1500,
                            autoplay: false,
                            autoplaySpeed: 2000,
                            slidesToShow: 4,
                            infinite: true,
                            // slidesToScroll: 1,
                            dots: false,
                            draggable: true,
                            centerMode: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            infinite: true,
                            dots: false,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            // slidesToScroll: 1,
                            rtl: true,
                            draggable: true
                        }
                    }
                ]
            }
        };
    },

    async mounted() {
        this.category = localStorage.getItem("gender");
    },

    methods: {}
};
</script>

<style lang="scss" scoped>
.brand {
    margin-bottom: 40px;
    margin-top: 50px;
    h1 {
        text-align: center;
        margin-bottom: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 180%;
        letter-spacing: 0.5px;
        color: #333333;
    }
    .item-brand {
        // height: 640px;
        padding: 0px 20px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        height: 150px;
        user-select: none;
        img {
            width: 100%;
            height: auto;
            pointer-events: none !important;
        }
    }
}

@media (max-width: 520px) {
    .brand {
        margin-top: 30px;
        .item-brand {
            padding: 0px;
        }
        h1 {
            margin-bottom: 15px;
        }
    }
}
</style>
