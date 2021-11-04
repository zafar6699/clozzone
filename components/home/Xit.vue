<template>
    <div>
        <div class="xit">
            <div class="container-zz">
                <h1>{{ $t("famous") }}</h1>

                <div>
                    <VueSlickCarousel v-bind="settings">
                        <div class="item-img" v-for="(item, i) in xit" :key="i">
                            <ProductCard
                                :product="item"
                                :image="item.param[0].image"
                                type="carousel"
                            />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import slick-carousel
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    props: {
        xit: {
            type: Array
        }
    },
    data() {
        return {
            settings: {
                dots: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                draggable: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: false,
                            slidesToScroll: 1,
                            dots: false,
                            draggable: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            infinite: true,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            centerMode: true,
                            dots: false,
                            centerPadding: "92px",

                            slidesToScroll: 1,
                            draggable: true
                        }
                    }
                ]
            }
        };
    },
    components: { VueSlickCarousel },
    mounted() {}
};
</script>

<style lang="scss">
.xit {
    overflow: hidden;
    h1 {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 40px;
    }
    .products {
        .card-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 30px;
            .card {
                border: 0;
                width: calc((100% - 75px) / 4);
                margin-bottom: 25px;
                position: relative;
                border-radius: 3px;
                button {
                    background: transparent;
                    border: 0;
                }
                .heart {
                    position: absolute;
                    top: 13px;
                    right: 12px;
                    span {
                        svg {
                            path.like {
                                stroke: #000000;
                                fill: #000000;
                            }
                        }
                    }
                }
                .card-img {
                    img {
                        border-radius: 3px 3px 0 0;
                        width: 100%;
                    }
                }
                .card-text {
                    padding: 10px;
                    h2 {
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 22px;
                        color: #000000;
                    }

                    p {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 24px;
                        color: #0a0000;
                        margin-bottom: 0;
                    }
                    .down {
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-between;
                        .price {
                            font-weight: 600;
                            font-size: 18px;
                            line-height: 22px;
                        }
                        .color {
                            display: flex;
                            margin-bottom: 10px;
                            div {
                                width: 10px;
                                height: 10px;
                                margin-right: 10px;
                                border-radius: 50%;
                                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                            }
                        }
                        .korzina {
                            background: transparent;
                            width: 40px;
                            height: 40px;
                            border: 1px solid #333333;
                            box-sizing: border-box;
                            border-radius: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
            .card:hover {
                box-shadow: 0px 5px 15px 2px rgba(34, 60, 80, 0.1);
            }
        }
    }
}
@media (max-width: 576px) {
    .xit {
        h1 {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .card-box {
            .card {
                width: calc((100% - 20px) / 2) !important;
            }
        }
    }
}
</style>
