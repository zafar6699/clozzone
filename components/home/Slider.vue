<template>
    <div>
        <div class="slider-my">
            <div class="container-one">
                <Carousel v-bind="slickOptions">
                    <div
                        class="slider"
                        v-for="(item, index) in slider"
                        :key="index"
                    >
                        <a :href="item.url">
                            <img :src="$store.state.uploads + item.image" alt />
                        </a>
                    </div>
                </Carousel>
            </div>
        </div>

        <!-- <pre>
      {{ slider }}
    </pre>-->
    </div>
</template>

<script>
export default {
    props: {
        slider: {
            type: Array
        }
    },
    data() {
        return {
            slickOptions: {
                dots: true,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            dots: true,
                            slidesToScroll: 1,
                            infinite: true,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            dots: true,
                            slidesToScroll: 1,
                            infinite: true,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            arrows: false
                        }
                    }
                ]
            }
        };
    },

    mounted() {},

    methods: {}
};
</script>

<style lang="scss">
.slider-my {
    cursor: pointer;
    position: relative;
    padding: 8px 0px;
    ul.slick-dots {
        position: absolute;
        bottom: 38px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 23;
        li button {
            width: 24px;
            height: 24px;
            border-radius: 100%;
            display: inline-block;
            background-color: #fff;
        }
        li button::before {
            display: none;
        }
        li.slick-active button {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
            background-color: #ffc600;
            // box-shadow: 10px 10px 10px #333;
        }
    }
    img {
        width: 100% !important;
        pointer-events: none;
        height: 600px;
        object-fit: cover;
    }
    .slick-slide {
        padding: 0px !important;
    }
}

@media (max-width: 820px) {
    .slider-my {
        padding: 10px 0px;
        img {
            height: 257px;
            // object-fit: unset;
        }
        ul.slick-dots {
            bottom: 25px;
            li {
                margin: 0px;
            }
            li button {
                width: 14px;
                height: 14px;
            }
        }
    }
}

@media (max-width: 450px) {
    .slider-my {
        img {
            // object-fit: unset;
            height: 170px !important;
        }
    }
}
</style>
