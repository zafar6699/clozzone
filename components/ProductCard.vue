<template>
    <div>
        <div class="product-item">
            <button class="like" @click="clickLike(product)">
                <svg
                    :class="isLike ? 'liked' : ''"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                >
                    <path
                        d="M20.8401 3.60987C20.3294 3.09888 19.7229 2.69352 19.0555 2.41696C18.388 2.14039 17.6726 1.99805 16.9501 1.99805C16.2276 1.99805 15.5122 2.14039 14.8448 2.41696C14.1773 2.69352 13.5709 3.09888 13.0601 3.60987L12.0001 4.66987L10.9401 3.60987C9.90843 2.57818 8.50915 1.99858 7.05012 1.99858C5.59109 1.99858 4.19181 2.57818 3.16012 3.60987C2.12843 4.64156 1.54883 6.04084 1.54883 7.49987C1.54883 8.95891 2.12843 10.3582 3.16012 11.3899L4.22012 12.4499L12.0001 20.2299L19.7801 12.4499L20.8401 11.3899C21.3511 10.8791 21.7565 10.2727 22.033 9.60523C22.3096 8.93777 22.4519 8.22236 22.4519 7.49987C22.4519 6.77738 22.3096 6.06198 22.033 5.39452C21.7565 4.72706 21.3511 4.12063 20.8401 3.60987V3.60987Z"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <nuxt-link
                :to="{
                    name: `busket-id___${$i18n.locale}`,
                    params: { id: product._id }
                }"
            >
                <div class="image" v-if="type == 'filter'">
                    <img :src="$store.state.uploads + image" alt="" />
                </div>
                <div class="image" v-else>
                    <img :src="$store.state.uploads + visibleImage" alt="" />
                </div>
            </nuxt-link>

            <div class="product-info">
                <nuxt-link
                    :to="{
                        name: `busket-id___${$i18n.locale}`,
                        params: { id: product._id }
                    }"
                >
                    <h2>{{ product.brand }}</h2>
                    <h3>{{ product.name[$i18n.locale] }}</h3>
                </nuxt-link>

                <div class="card-bottom">
                    <div>
                        <div class="colors">
                            <button
                                v-for="(item, i) in product.param"
                                :key="i"
                                :class="
                                    item.color == '#FFFFFF'
                                        ? 'white-shadow'
                                        : ''
                                "
                                :style="'background-color:' + item.color"
                                @click="changeColor(i)"
                            ></button>
                        </div>
                        <div class="prices">
                            <div v-if="product.discount == null">
                                <h4 class="price-sale">
                                    {{ regex(product.price) }} сум
                                </h4>
                            </div>

                            <div class="else" v-else>
                                <h4 class="price-sale">
                                    {{ regex(product.discount) }} сум
                                </h4>
                                <h4 class="price-old">
                                    {{ regex(product.price) }} сум
                                </h4>
                            </div>
                        </div>
                    </div>

                    <button
                        @click="clickBasket"
                        class="basket-click"
                        v-if="!isBusket"
                    >
                        <span class="korzina">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="45"
                                height="45"
                                viewBox="0 0 45 45"
                                fill="none"
                            >
                                <path
                                    d="M32.9951 17.4079L32.9951 17.408L32.9998 17.4153C33.1503 17.6466 33.2344 17.9054 33.248 18.1688C33.2616 18.4306 33.2052 18.6931 33.0815 18.9338L29.2738 25.9562C29.2736 25.9564 29.2735 25.9566 29.2734 25.9568C29.2233 26.0483 29.1435 26.1307 29.0382 26.1908L29.2857 26.6252L29.0382 26.1908C28.9325 26.251 28.8076 26.2847 28.6776 26.2852H18.2214H18.2135L18.2056 26.2854C18.046 26.2905 17.8932 26.2452 17.7723 26.1627C17.6519 26.0805 17.5735 25.9692 17.5395 25.8525L17.5395 25.8523L14.3326 14.8598L14.2276 14.4999H13.8526H12.4119C12.2239 14.4999 12.0509 14.4306 11.9293 14.3185C11.809 14.2076 11.75 14.0663 11.75 13.9285C11.75 13.7906 11.809 13.6493 11.9293 13.5385C12.0509 13.4263 12.2239 13.3571 12.4119 13.3571H14.7357H14.7436L14.7515 13.3568C14.911 13.3518 15.0639 13.3971 15.1848 13.4796C15.3043 13.5612 15.3825 13.6715 15.4168 13.7873L16.0898 16.2053L16.1916 16.5713H16.5715H31.4398C31.7611 16.5766 32.0734 16.6584 32.3461 16.8063C32.6197 16.9547 32.842 17.1633 32.9951 17.4079ZM18.8833 30.5351C18.8833 31.1091 18.3658 31.6422 17.6404 31.6422C16.9151 31.6422 16.3976 31.1091 16.3976 30.5351C16.3976 29.961 16.9151 29.428 17.6404 29.428C18.3658 29.428 18.8833 29.961 18.8833 30.5351ZM30.5022 30.5351C30.5022 31.1091 29.9847 31.6422 29.2594 31.6422C28.534 31.6422 28.0165 31.1091 28.0165 30.5351C28.0165 29.961 28.534 29.428 29.2594 29.428C29.9847 29.428 30.5022 29.961 30.5022 30.5351Z"
                                    stroke="#333333"
                                />
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="44"
                                    height="44"
                                    rx="2.5"
                                    stroke="#333333"
                                />
                            </svg>
                        </span>
                    </button>

                    <button v-else @click="clickBasket" class="basket-click">
                        <span class="korzina">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="45"
                                height="45"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="27"
                                    height="27"
                                    rx="2.5"
                                    fill="black"
                                    stroke="#333333"
                                />
                                <path
                                    d="M20.3702 10.9322L20.3701 10.9323L20.3749 10.9396C20.4508 11.0563 20.4923 11.1853 20.499 11.3152C20.5057 11.4436 20.4783 11.5733 20.4169 11.6934L18.049 16.0604C18.0489 16.0605 18.0489 16.0607 18.0488 16.0608C18.0351 16.0856 18.0111 16.112 17.9747 16.1328C17.9379 16.1538 17.8924 16.1666 17.8435 16.1668H11.3377H11.3298L11.322 16.167C11.2615 16.1689 11.206 16.1515 11.1648 16.1234C11.1241 16.0957 11.1031 16.062 11.0948 16.0336L11.0948 16.0334L9.09942 9.19365L8.9944 8.83368H8.61942H7.72296C7.65133 8.83368 7.58998 8.80707 7.5507 8.77085C7.51278 8.73588 7.5 8.69755 7.5 8.66704C7.5 8.63653 7.51278 8.59819 7.5507 8.56323C7.58998 8.527 7.65133 8.50039 7.72296 8.50039H9.16887H9.17677L9.18466 8.50014C9.24511 8.49823 9.30062 8.51565 9.34185 8.54378L9.61926 8.13723L9.34185 8.54378C9.38164 8.57093 9.40264 8.60378 9.41125 8.63178L9.82945 10.1344L9.9313 10.5003H10.3111H19.5609C19.7305 10.5034 19.8944 10.5467 20.0364 10.6237C20.1792 10.7012 20.2929 10.8088 20.3702 10.9322ZM11.5607 19C11.5607 19.2388 11.338 19.5 10.9763 19.5C10.6145 19.5 10.3918 19.2388 10.3918 19C10.3918 18.7613 10.6145 18.5001 10.9763 18.5001C11.338 18.5001 11.5607 18.7613 11.5607 19ZM18.7903 19C18.7903 19.2388 18.5676 19.5 18.2058 19.5C17.8441 19.5 17.6214 19.2388 17.6214 19C17.6214 18.7613 17.8441 18.5001 18.2058 18.5001C18.5676 18.5001 18.7903 18.7613 18.7903 19Z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object
        },
        image: {
            type: String
        },
        type: {
            type: ""
        }
    },

    data() {
        return {
            isLike: false,
            likeId: null,
            isBusket: false,
            visibleImage: ""
        };
    },
    async mounted() {
        let likes = this.$store.state.like;
        let busket = this.$store.state.basket;

        if (this.$auth.loggedIn) {
            likes.forEach(item => {
                if (item.product._id == this.product._id) {
                    this.isLike = true;
                    this.likeId = item._id;
                }
            });

            busket.forEach(item => {
                if (item.product._id == this.product._id) {
                    this.isBusket = true;
                }
            });
        }
        this.visibleImage = this.product.param[0].image;
    },
    methods: {
        regex(Number) {
            if (!isNaN(Number) && isFinite(Number)) {
                let string = Number.toString();
                const arr = string.split(" ");
                let str = "";
                let count = 0;
                let temp = "";
                if (arr[0].length <= 3) return Number;
                for (let j = arr[0].length - 1; j >= 0; j--) {
                    count++;
                    temp = arr[0][j] + temp;
                    if (count === 3) {
                        if (str.length > 0) {
                            str = temp + " " + str;
                        } else {
                            str = temp;
                        }
                        temp = "";
                        count = 0;
                    }
                }
                if (temp.length > 0) str = temp + " " + str;
                if (arr.length > 1) str = str + " " + arr[1].slice(0, 2);
                return str;
            } else {
                return 0;
            }
        },
        changeColor(index) {
            this.image = this.product.param[index].image;
            this.visibleImage = this.product.param[index].image;
        },
        clickLike(product) {
            if (this.$auth.loggedIn) {
                if (this.isLike) {
                    this.$axios.$delete("like/" + this.likeId).then(res => {});

                    this.$store.commit(
                        "COUNT_UP",
                        this.$store.state.likeCount - 1
                    );
                } else {
                    this.$store.commit(
                        "COUNT_UP",
                        this.$store.state.likeCount + 1
                    );
                    this.$axios
                        .$post("like/create", {
                            product: product._id
                        })
                        .then(res => {
                            // console.log(res);
                        });
                }

                this.isLike = !this.isLike;
            } else {
                let a = "";

                if (this.$i18n.locale == "uz") {
                    a = "Ro'yxatdan o'ting yoki tizimga kiring";
                } else {
                    a = "Зарегистрируйтесь или войдите";
                }

                alert(a);
            }
        },
        clickBasket() {
            this.$store.commit("CHANGE_MENU");
        }
    }
};
</script>

<style lang="scss" scoped>
.else {
    .price-sale {
        color: #ff0000 !important;
    }
    display: flex;
    align-items: center;
}
.basket-click {
    background-color: transparent;
    border: none;
}
svg.liked {
    path {
        fill: #333;
    }
}
div.product-item {
    position: relative;
    button.like {
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
    }
    div.image {
        img {
            height: 390px;
            width: 100%;
            object-fit: cover;
        }
    }

    div.product-info {
        padding: 3px 5px;
        span.korzina {
            margin: 5px;
        }
        a {
            text-decoration: none;
        }
        h2 {
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 2px;
            color: #000000;
        }
        h3 {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 3px;
            color: #0a0000;
        }

        div.colors {
            margin-bottom: 4px;
            button {
                width: 12px;
                height: 12px;
                border-radius: 100%;
                display: inline-block;
                margin-right: 10px;
                border: none;
            }
            button.white-shadow {
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
            }
        }
        div.prices {
            display: flex;
            align-items: center;
            h4 {
                margin-bottom: 0px;
            }
            h4.price-sale {
                font-weight: 600;
                font-size: 18px;
                line-height: 15px;
                color: #333333;
                margin-right: 5px;
            }
            h4.price-old {
                font-weight: bold;
                font-size: 14px;
                line-height: 12px;
                text-decoration-line: line-through;
                color: #9098b1;
            }
        }
    }

    &:hover {
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
}
@media (max-width: 850px) {
    div.product-item {
        div.image {
            img {
                height: 234px;
            }
        }
    }
}
@media (max-width: 500px) {
    div.product-item {
        div.image {
            img {
                height: 213px;
            }
        }
    }
}
@media (max-width: 576px) {
    .product-item {
        margin-bottom: 10px;
        box-shadow: 0px 5px 15px 2px rgba(34, 60, 80, 0.1) !important;
        .product-info {
            h2 {
                font-size: 10px !important;
                line-height: 12px !important;
            }
            h3 {
                font-size: 12px !important;
                line-height: 15px !important;
                height: 30px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            div.colors {
                display: flex;
                align-items: center;
                button {
                    width: 10px !important;
                    height: 10px !important;
                }
            }
            h4.price-sale {
                font-size: 10px !important;
                line-height: 12px !important;
                letter-spacing: -0.05em !important;
            }
            h4.price-old {
                font-size: 8px !important;
                line-height: 10px !important;
                letter-spacing: -0.05em !important;
            }
            button.basket-click {
                span.korzina {
                    svg {
                        width: 28px;
                        height: 28px;
                    }
                }
            }
        }
    }
}
</style>
