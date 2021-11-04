<template>
    <div>
        <!-- <Carousel v-bind="slickOptions"> -->
        <div class="ch">
            <div class="card" v-for="(item, index) in proItem" :key="index">
                <div class="heart">
                    <span
                        ><svg
                            width="24"
                            height="22"
                            viewBox="0 0 24 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.8382 3.60987C20.3274 3.09888 19.721 2.69352 19.0535 2.41696C18.3861 2.14039 17.6707 1.99805 16.9482 1.99805C16.2257 1.99805 15.5103 2.14039 14.8428 2.41696C14.1754 2.69352 13.5689 3.09888 13.0582 3.60987L11.9982 4.66987L10.9382 3.60987C9.90647 2.57818 8.5072 1.99858 7.04817 1.99858C5.58913 1.99858 4.18986 2.57818 3.15817 3.60987C2.12647 4.64156 1.54688 6.04084 1.54688 7.49987C1.54687 8.95891 2.12647 10.3582 3.15817 11.3899L4.21817 12.4499L11.9982 20.2299L19.7782 12.4499L20.8382 11.3899C21.3492 10.8791 21.7545 10.2727 22.0311 9.60523C22.3076 8.93777 22.45 8.22236 22.45 7.49987C22.45 6.77738 22.3076 6.06198 22.0311 5.39452C21.7545 4.72706 21.3492 4.12063 20.8382 3.60987V3.60987Z"
                                stroke="#333333"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </div>
                <div class="card-img">
                    <img :src="item.cardimg" :alt="item.iimgAlt" />
                </div>
                <div class="card-text">
                    <h2>{{ item.cardBrand }}</h2>
                    <p>{{ item.cardText }}</p>
                    <div class="down">
                        <div>
                            <div class="color">
                                <div
                                    :style="'background-color:' + colItem.color"
                                    v-for="(colItem, index) in colItem"
                                    :key="index"
                                ></div>
                            </div>
                            <p>{{ item.price }}</p>
                        </div>

                        <div class="korzina">
                            <span>
                                <svg
                                    width="23"
                                    height="21"
                                    viewBox="0 0 23 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.419 5.14265C22.2182 4.82189 21.9307 4.55459 21.5845 4.36682C21.2384 4.17905 20.8453 4.07722 20.4437 4.07125H5.57148L4.89758 1.64991C4.82949 1.41617 4.67759 1.21057 4.46661 1.06661C4.25563 0.922643 3.998 0.848788 3.73569 0.857074H1.4119C1.10374 0.857074 0.808209 0.969952 0.590311 1.17088C0.372414 1.3718 0.25 1.64432 0.25 1.92847C0.25 2.21262 0.372414 2.48513 0.590311 2.68606C0.808209 2.88698 1.10374 2.99986 1.4119 2.99986H2.85265L6.05948 13.9924C6.12757 14.2261 6.27947 14.4317 6.49045 14.5757C6.70143 14.7196 6.95906 14.7935 7.22137 14.7852H17.6784C17.893 14.7846 18.1032 14.7292 18.2857 14.6252C18.4682 14.5212 18.616 14.3726 18.7125 14.1959L22.5235 7.16758C22.6887 6.84832 22.7656 6.49632 22.7474 6.14299C22.7291 5.78966 22.6163 5.44599 22.419 5.14265Z"
                                        fill="#333333"
                                    />
                                    <path
                                        d="M6.64043 20.1422C7.60297 20.1422 8.38327 19.4226 8.38327 18.5351C8.38327 17.6475 7.60297 16.928 6.64043 16.928C5.67788 16.928 4.89758 17.6475 4.89758 18.5351C4.89758 19.4226 5.67788 20.1422 6.64043 20.1422Z"
                                        fill="#333333"
                                    />
                                    <path
                                        d="M18.2594 20.1422C19.2219 20.1422 20.0022 19.4226 20.0022 18.5351C20.0022 17.6475 19.2219 16.928 18.2594 16.928C17.2968 16.928 16.5165 17.6475 16.5165 18.5351C16.5165 19.4226 17.2968 20.1422 18.2594 20.1422Z"
                                        fill="#333333"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- </Carousel> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // slickOptions: {
            //   dots: false,
            //   slidesToScroll: 1,
            //   infinite: true,
            //   autoplay: true,
            //   slidesToShow: 7,
            //   autoplaySpeed: 2000,
            //   cssEase: "linear",
            //   arrows: false,
            //   rtl: false,
            //   responsive: [
            //     {
            //       breakpoint: 1024,
            //       settings: {
            //         dots: false,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         autoplay: true,
            //         autoplaySpeed: 3000,
            //         arrows: false
            //       }
            //     },
            //     {
            //       breakpoint: 600,
            //       settings: {
            //         dots: false,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         autoplay: true,
            //         autoplaySpeed: 3000,
            //         arrows: false
            //       }
            //     }
            //   ]
            // },
            proItem: [
                {
                    cardimg: require("@/assets/img/product.png"),
                    cardBrand: "Zara",
                    cardText: "Lorem ipsum dolor sit amet, ",
                    to: "",
                    price: 350000,
                    iimgAlt: "zara"
                },
                {
                    cardimg: require("@/assets/img/product.png"),
                    cardBrand: "Zara",
                    cardText: "Lorem ipsum dolor sit amet, ",
                    to: "",
                    price: 350000,
                    iimgAlt: "zara"
                },
                {
                    cardimg: require("@/assets/img/product.png"),
                    cardBrand: "Zara",
                    cardText: "Lorem ipsum dolor sit amet, ",
                    to: "",
                    price: 350000,
                    iimgAlt: "zara"
                },
                {
                    cardimg: require("@/assets/img/product.png"),
                    cardBrand: "Zara",
                    cardText: "Lorem ipsum dolor sit amet, ",
                    to: "",
                    price: 350000,
                    iimgAlt: "zara"
                }
            ]
        };
    },

    mounted() {},

    methods: {}
};
</script>

<style lang="scss" scoped>
.slider {
    img {
        width: 100%;
        pointer-events: none;
    }
}
.ch {
    display: flex;
    justify-content: space-between;
}
.card {
    border: 0;
    width: calc((100% - 75px) / 4);
    margin-bottom: 25px;
    position: relative;
    border-radius: 3px;
    box-shadow: 0px 5px 15px 2px rgba(34, 60, 80, 0.1);
    .heart {
        position: absolute;
        top: 13px;
        right: 12px;
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
@media (min-width: 340px) and (max-width: 575px) {
    .ch {
        width: 1200px;
    }
    .card {
        width: 1603px !important;
    }
}
</style>
