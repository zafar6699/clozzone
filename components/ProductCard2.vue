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
                <div class="image">
                    <img :src="$store.state.uploads + image" alt="" />
                </div>
            </nuxt-link>

            <div class="product-info">
                <nuxt-link
                    :to="{
                        name: `busket-id___${$i18n.locale}`,
                        params: { id: product._id }
                    }"
                >
                    <h2>{{ product.brand.name }}</h2>
                    <h3>{{ product.name[$i18n.locale] }}</h3>
                </nuxt-link>

                <div class="card-bottom">
                    <div>
                        <div class="colors">
                            <button
                                v-for="(item, i) in product.param"
                                :key="i"
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

                            <div v-else>
                                <h4 class="price-sale">
                                    {{ product.discount }} сум
                                </h4>
                                <h4 class="price-old">
                                    {{ product.price }} сум
                                </h4>
                            </div>
                        </div>
                    </div>

                    <span v-if="!isBusket">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                        >
                            <path
                                d="M20.794 10.667C20.6691 10.4674 20.4902 10.3011 20.2748 10.1842C20.0594 10.0674 19.8149 10.004 19.565 10.0003H10.3111L9.89183 8.49371C9.84946 8.34827 9.75494 8.22035 9.62367 8.13077C9.49239 8.04119 9.33209 7.99524 9.16887 8.00039H7.72296C7.53122 8.00039 7.34733 8.07063 7.21175 8.19565C7.07617 8.32067 7 8.49023 7 8.66704C7 8.84384 7.07617 9.0134 7.21175 9.13842C7.34733 9.26345 7.53122 9.33368 7.72296 9.33368H8.61942L10.6148 16.1735C10.6572 16.3189 10.7517 16.4468 10.8829 16.5364C11.0142 16.626 11.1745 16.6719 11.3377 16.6668H17.8444C17.9779 16.6664 18.1087 16.6319 18.2222 16.5672C18.3358 16.5025 18.4277 16.4101 18.4878 16.3001L20.8591 11.9269C20.9619 11.7283 21.0097 11.5093 20.9984 11.2894C20.987 11.0696 20.9168 10.8557 20.794 10.667Z"
                                fill="#333333"
                            />
                            <path
                                d="M10.9763 20C11.5752 20 12.0607 19.5523 12.0607 19C12.0607 18.4478 11.5752 18.0001 10.9763 18.0001C10.3773 18.0001 9.89183 18.4478 9.89183 19C9.89183 19.5523 10.3773 20 10.9763 20Z"
                                fill="#333333"
                            />
                            <path
                                d="M18.2058 20C18.8048 20 19.2903 19.5523 19.2903 19C19.2903 18.4478 18.8048 18.0001 18.2058 18.0001C17.6069 18.0001 17.1214 18.4478 17.1214 19C17.1214 19.5523 17.6069 20 18.2058 20Z"
                                fill="#333333"
                            />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="27"
                                height="27"
                                rx="2.5"
                                stroke="#333333"
                            />
                        </svg>
                    </span>

                    <span v-else>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
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
            type: String,
            default: ""
        }
    },

    data() {
        return {
            isLike: false,
            likeId: null,
            isBusket: false
        };
    },
    async mounted() {
        let likes = this.$store.state.like;
        let busket = this.$store.state.basket;

        console.log("ll", likes);

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
            this.image = this.product.param[index].images[0].image;
        },
        clickLike(product) {
            if (this.isLike) {
                this.$axios.$delete("like/" + this.likeId).then(res => {});
            } else {
                this.$axios
                    .$post("like/create", {
                        product: product._id
                    })
                    .then(res => {
                        console.log(res);
                    });
            }

            this.isLike = !this.isLike;
        }
    }
};
</script>

<style lang="scss" scoped>
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
            margin-bottom: 8px;
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
                font-size: 14px;
                line-height: 15px;
                color: #333333;
                margin-right: 5px;
            }
            h4.price-old {
                font-weight: normal;
                font-size: 12px;
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
                height: 250px;
            }
        }
    }
}
@media (max-width: 576px) {
    .product-item {
        margin-bottom: 20px;
    }
}
</style>
