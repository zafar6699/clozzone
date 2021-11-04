<template>
    <div class="modal-card" :class="some">
        <div class="pict">
            <div class="head">
                <div class="join">
                    <img src="~/assets/img/corr.png" alt />
                    Добавлено
                </div>
                <div class="rej" @click="rem">
                    <img src="~/assets/img/reject.png" alt />
                </div>
            </div>
            <div class="cent">
                <div class="big-img">
                    <img :src="$store.state.uploads + bigImg" alt />
                </div>
                <div class="malumot">
                    <div class="narx">{{ product.price }} сум</div>
                    <div class="firma">{{ product.name[$i18n.locale] }}</div>
                    <div class="divide">
                        <div class="left">
                            <div class="bre">Бренд</div>
                            <div class="bre">Размер</div>
                            <div class="bre">Цвет</div>
                        </div>
                        <div class="right">
                            <div class="bre">{{ product.brand.name }}</div>
                            <div class="size">{{ busket.size.text }}</div>
                            <div class="color"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btns">
            <button class="kors" @click="rem">Вернуться назад</button>
            <button class="buy" @click="addToCart">В корзину</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: {
        product: Object,
        some: String,
        bigImg: String,
        busket: Object,
        rem: Function
    },
    methods: {
        ...mapMutations("shopping-cart", ["ADD_PRODUCT"]),
        addToCart() {
            this.ADD_PRODUCT(this.product);
        }
    }
};
</script>
<style lang="scss" scoped>
.modal-card {
    top: 82px;
    z-index: 40;
    right: -490px;
    position: fixed;
    width: 452px;
    background: rgba(51, 51, 51, 0.7);
    padding: 30px;

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 12px;
        border-bottom: 1px solid #fff;
        margin-bottom: 20px;

        .join {
            color: #fff;
            font-size: 20px;
            font-weight: 500;

            img {
                margin-right: 16px;
            }
        }
    }
    .big-img img {
        height: 162px;
        width: 135px;
        object-fit: cover;
        margin-right: 16px;
    }
    .cent {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;

        .img {
            margin-right: 30px;
        }

        .malumot {
            .narx {
                font-size: 22px;
                font-weight: bold;
                color: #fff;
            }

            .firma {
                font-size: 20px;
                font-weight: 500;
                color: #fff;
                margin-bottom: 7px;
            }

            .divide {
                display: flex;

                .bre {
                    font-size: 18px;
                    color: #fff;
                    font-weight: normal;
                    margin-bottom: 7px;
                }

                .left {
                    margin-right: 40px;
                }

                .right {
                    .size {
                        font-size: 16px;
                        height: 22px;
                        width: 40px;
                        background-color: #fff;
                        text-align: center;
                        border-radius: 4px;
                        margin-bottom: 12px;
                    }

                    .color {
                        width: 40px;
                        height: 22px;
                        background-color: #ff0000;
                        border-radius: 4px;
                    }
                }
            }
        }
    }

    .btns {
        margin-top: 30px;

        a.buy {
            padding: 11px 55px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
            background: #ffc600;
            margin-left: 10px;
        }

        button {
            font-size: 16px;
            font-weight: 600;
            border: 0;
            border-radius: 4px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        }
    }
}

.top {
    padding: 14px;
    text-align: center;
    background: rgba(51, 51, 51, 0.19);

    a {
        color: #333333;
        font-size: 22px;
    }
}

.middle {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 68px;

    .rakurs {
        width: 40%;
        text-align: center;

        .fImg {
            width: 305px;
            height: 366px;
            margin: auto;
        }

        .others {
            margin-top: 10px;
            display: flex;

            img {
                margin-right: 10px;
                height: 120px;
                width: 100px;
            }

            .alter {
                border: 2px solid #ffc600;
            }
        }
    }

    .tContent {
        border-right: 1px solid silver;
        padding-right: 15px;

        .brand {
            width: 343px;
            color: #333333;
            font-size: 24px;
            font-weight: 600;
            padding-bottom: 8px;
            border-bottom: 1px solid silver;
            margin-bottom: 8px;
        }

        .text {
            font-size: 16px;
            color: #333333;
            margin-bottom: 10px;
        }

        .price {
            margin-left: -15px;
            text-align: left;
            display: flex;

            p {
                margin-left: 15px;
                color: #9098b1;
                font-size: 18px;
            }

            .red {
                font-weight: bold;
                color: #ff0000;
            }

            .yell {
                font-weight: bold;
                color: #ffd600;
            }
        }

        .more {
            display: flex;

            .part1 {
                margin-right: 20px;

                .art {
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
            }

            .part2 {
                .art {
                    display: flex;
                    font-size: 16px;
                    font-weight: normal;
                    margin-bottom: 8px;

                    select {
                        width: 120px;
                        height: 38px;
                        border: 2px solid #f1f3f4;
                    }

                    .mer {
                        height: 22px;
                        width: 40px;
                        border-radius: 3px;
                        margin-right: 7px;
                    }
                }
            }
        }

        .page {
            display: flex;
            width: 128px;
            height: 48px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
            border-radius: 7px;
            padding: 14px 20px;
            margin-bottom: 10px;

            p {
                padding-left: 10px;
                padding-right: 10px;
                font-size: 19px;
                font-weight: 500;
            }
        }

        .btns {
            padding-top: 30px;

            button {
                background-color: #fff;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: #333333;
                padding: 11px 37px;
                border: 0;
            }

            .buy {
                padding: 11px 55px;
                background: #ffc600;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: #333333;
                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

    .info {
        padding-left: 50px;

        .table {
            font-size: 17px;
            font-weight: 500;
            display: flex;
            align-items: center;
            padding-bottom: 12px;
            width: 337px;
            border-bottom: 1px solid #000;

            .size {
                margin-right: 85px;

                img {
                    margin-right: 30px;
                }
            }

            .arrow {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: #ffc600;

                img {
                    transform: translate(6px, -4px);
                }
            }
        }

        .deliver {
            font-size: 17px;
            font-weight: 500;
            padding-bottom: 10px;
            border-bottom: 1px solid #000;
            width: 337px;

            img {
                margin-right: 30px;
            }
        }

        .text {
            font-size: 16px;
            color: #333333;
            margin-top: 10px;
            margin-bottom: 80px;
        }

        .pay {
            padding-bottom: 10px;
            border-bottom: 1px solid #000;
            width: 337px;
            display: flex;
            align-items: center;
            font-size: 17px;
            font-weight: 500;

            img {
                margin-right: 30px;
            }
        }

        .txt {
            font-size: 16px;
            color: #333333;
            margin-top: 10px;
            width: 337px;
        }
    }
}
</style>
