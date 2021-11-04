<template>
    <div class="order-page" v-if="order != null">
        <div class="title-top">
            <h1>{{ $t("myzakaz") }}</h1>
        </div>

        <div class="container-one">
            <div class="order-body" v-if="order.length > 0">
                <div
                    class="order-item"
                    v-for="(item, index) in order"
                    :key="index"
                >
                    <div class="title-media">
                        <h1>{{ $t("zakaz") }} {{ index + 1 }}</h1>
                    </div>
                    <div class="order-body-title">
                        <div class="title-left">
                            <h2>{{ $t("zakaz") }} {{ index + 1 }}</h2>
                            <div class="status-box">
                                <h3>{{ $t("statuszak") }}:</h3>
                                <span class="send" v-if="item.status == 0">
                                    {{ $t("status_0") }}
                                </span>
                                <span class="send" v-if="item.status == 1">
                                    {{ $t("status_1") }}
                                </span>
                                <span class="send" v-if="item.status == 2">
                                    {{ $t("status_2") }}
                                </span>
                                <span class="send" v-if="item.status == 3">
                                    {{ $t("status_3") }}
                                </span>
                                <span class="send" v-if="item.status == 4">
                                    {{ $t("status_4") }}
                                </span>
                                <span class="send" v-if="item.status == 5">
                                    {{ $t("status_5") }}
                                </span>
                                <span class="send" v-if="item.status == 6">
                                    {{ $t("status_6") }}
                                </span>

                                <span class="cancel" v-if="item.status == 7">
                                    {{ $t("status_7") }}
                                </span>
                            </div>
                        </div>

                        <div class="title-right">
                            <h4>{{ $t("datazakaz") }}</h4>
                            <h6>{{ dateFormat(item.createdAt) }}</h6>
                        </div>
                    </div>

                    <div class="products-box">
                        <div
                            class="products-box__item"
                            v-for="(product, i) in item.product"
                            :key="i"
                        >
                            <div class="item__inner">
                                <div class="product-img">
                                    <img
                                        :src="
                                            $store.state.uploads + product.image
                                        "
                                        alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <h1>{{ product.name[$i18n.locale] }}</h1>
                                    <div class="info-center">
                                        <div class="info-center__item">
                                            <h2>{{ $t("brand") }}</h2>
                                            <h3>{{ product.brand.name }}</h3>
                                        </div>
                                        <div class="info-center__item">
                                            <h2>{{ $t("color") }}</h2>
                                            <div
                                                class="select-color"
                                                :style="
                                                    'background-color:' +
                                                        product.color
                                                "
                                            ></div>
                                        </div>
                                        <div class="info-center__item">
                                            <h2>{{ $t("size") }}</h2>
                                            <h3>{{ product.size }}</h3>
                                        </div>
                                        <div class="info-center__item">
                                            <h2>{{ $t("coltov") }}</h2>
                                            <h3>{{ product.num }}</h3>
                                        </div>
                                    </div>

                                    <div class="info-bottom">
                                        <div class="info-bottom__item">
                                            <h2>{{ $t("sena") }}</h2>
                                            <h3>
                                                {{ regex(product.price) }}
                                                {{ $t("sum") }}
                                            </h3>
                                        </div>
                                        <div class="info-bottom__item">
                                            <h2>{{ $t("dostavka2") }}</h2>
                                            <h3>
                                                {{ regex(product.dostavka) }}
                                                {{ $t("sum") }}
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="price-media">
                                        <h3>{{ $t("allsum") }}</h3>
                                        <h4>
                                            {{
                                                regex(
                                                    product.price +
                                                        product.dostavka
                                                )
                                            }}
                                            {{ $t("sum") }}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="prices">
                        <div class="deliver-box">
                            <div class="deliver-item">
                                <h3>
                                    {{ $t("dostavka") }}
                                    <button
                                        class="question"
                                        @click="isDeliver = true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="17"
                                            viewBox="0 0 14 17"
                                            fill="none"
                                        >
                                            <circle
                                                cx="7"
                                                cy="9"
                                                r="7"
                                                fill="#333333"
                                            />
                                            <path
                                                d="M6.192 10.906C6.192 10.5327 6.25267 10.206 6.374 9.926C6.50467 9.63667 6.65867 9.394 6.836 9.198C7.02267 9.002 7.26533 8.76867 7.564 8.498C7.93733 8.17133 8.21267 7.89133 8.39 7.658C8.56733 7.41533 8.656 7.126 8.656 6.79C8.656 6.33267 8.47867 5.96867 8.124 5.698C7.76933 5.418 7.27933 5.278 6.654 5.278C5.562 5.278 4.72667 5.64667 4.148 6.384L3.126 5.656C3.518 5.152 4.01733 4.76467 4.624 4.494C5.24 4.22333 5.94933 4.088 6.752 4.088C7.76933 4.088 8.57667 4.312 9.174 4.76C9.77133 5.19867 10.07 5.80533 10.07 6.58C10.07 6.96267 10.0047 7.30333 9.874 7.602C9.75267 7.89133 9.60333 8.134 9.426 8.33C9.24867 8.526 9.01067 8.75933 8.712 9.03C8.32933 9.37533 8.04467 9.67867 7.858 9.94C7.68067 10.2013 7.592 10.5233 7.592 10.906H6.192ZM6.906 14.084C6.64467 14.084 6.42533 14 6.248 13.832C6.08 13.6547 5.996 13.44 5.996 13.188C5.996 12.936 6.08 12.726 6.248 12.558C6.42533 12.3807 6.64467 12.292 6.906 12.292C7.16733 12.292 7.382 12.3807 7.55 12.558C7.718 12.726 7.802 12.936 7.802 13.188C7.802 13.44 7.71333 13.6547 7.536 13.832C7.368 14 7.158 14.084 6.906 14.084Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>

                                    <div class="deliver-info" v-if="isDeliver">
                                        <div class="toop">
                                            <button @click="isDeliver = false">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="12"
                                                    viewBox="0 0 14 12"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M8.8 4.38449L5.2 7.6655M5.2 4.38449L8.8 7.6655M13 6.02499C13 9.04508 10.3137 11.4933 7 11.4933C3.68629 11.4933 1 9.04508 1 6.02499C1 3.00491 3.68629 0.556641 7 0.556641C10.3137 0.556641 13 3.00491 13 6.02499Z"
                                                        stroke="#333333"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <p>
                                            {{ $t("infodel") }}
                                        </p>
                                    </div>
                                </h3>
                                <h3>
                                    {{ regex(allSum(index)) }} {{ $t("sum") }}
                                </h3>
                            </div>
                            <div class="deliver-item">
                                <h3>{{ $t("dostavka") }}</h3>
                                <h3>
                                    {{ regex(allDeliver(index)) }}
                                    {{ $t("sum") }}
                                </h3>
                            </div>
                        </div>

                        <div class="price-all">
                            <h2>{{ $t("all") }}</h2>
                            <h3>
                                {{ regex(allDeliver(index) + allSum(index)) }}
                                {{ $t("sum") }}
                            </h3>
                        </div>
                    </div>

                    <div class="prices-media">
                        <h3>
                            {{ $t("all") }}
                            <span>( {{ $t("sdostavka") }} )</span>
                        </h3>
                        <h4>
                            {{ regex(allDeliver(index) + allSum(index)) }}
                            {{ $t("sum") }}
                        </h4>
                    </div>
                </div>
            </div>
            <div class="jdem" v-if="order.length == 0">
                <h1>{{ $t("jdem") }}</h1>
                <img src="@/assets/img/jdem.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            temp: true,
            order: null,
            isDeliver: false
        };
    },
    computed: {},
    async mounted() {
        let order = await this.$axios.$get("/order/me");
        this.order = order.data;
        console.log("order", order);
    },

    methods: {
        dateFormat(date) {
            let d = new Date(date);
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let dt = d.getDate();

            if (dt < 10) {
                dt = "0" + dt;
            }
            if (month < 10) {
                month = "0" + month;
            }

            return dt + "." + month + "." + year;
        },
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
        allDeliver(index) {
            let s = 0;
            this.order[index].product.forEach(item => {
                s = s + item.dostavka;
            });
            return s;
        },
        allSum(index) {
            let s = 0;
            this.order[index].product.forEach(item => {
                s = s + item.price;
            });
            return s;
        }
    }
};
</script>

<style lang="scss">
div.similar-products .slick-slide {
    padding: 0px 12px !important;
}
.order-page {
    .jdem {
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        h1 {
            font-weight: 600;
            font-size: 56px;
            line-height: 68px;

            color: #333333;
        }
    }
    div.title-top {
        background-color: #e0e0e0;
        padding: 4px;
        margin-bottom: 35px;
        h1 {
            font-weight: 500;
            font-size: 24px;
            line-height: 180%;
            margin-bottom: 0px;
            letter-spacing: 0.5px;
            text-align: center;
            color: #333333;
        }
    }

    div.order-body {
        margin-bottom: 100px;
        div.order-item {
            margin-bottom: 50px;
            div.order-body-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                div.title-left {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h2 {
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 29px;
                        color: #333333;
                        margin-bottom: 0px;
                        margin-right: 25px;
                    }
                    div.status-box {
                        display: flex;
                        align-items: center;

                        h3 {
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 22px;
                            color: #333333;
                            margin-right: 5px;
                            margin-bottom: 0px;
                        }
                        span {
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 20px;
                            padding: 4px 7px;
                            text-decoration-line: underline;
                            display: inline-block;
                            border-radius: 3px;
                            background: #f3f4f5;
                        }
                        span.send {
                            color: #ffc600;
                        }
                        span.cancel {
                            color: #ff0000;
                        }
                    }
                }
                div.title-right {
                    display: flex;
                    align-items: center;
                    h4 {
                        margin-bottom: 0px;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 20px;
                        /* identical to box height */

                        color: #333333;
                    }
                    h6 {
                        margin-bottom: 0px;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 20px;
                        margin-left: 20px;
                        text-decoration-line: underline;

                        color: #333333;
                    }
                }
            }

            div.title-media {
                background: #f3f4f5;
                border-radius: 3px;
                padding: 4px 10px;
                display: none;
                h1 {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 0px;
                    color: #333333;
                    text-align: center;
                }
            }
        }
    }
    div.products-box {
        display: flex;
        flex-wrap: wrap;
        margin: 0px -25px;
        div.products-box__item {
            width: 25%;
            padding: 0px 25px;
            margin-bottom: 50px;
        }
    }
    div.item__inner {
        div.product-img {
            margin-bottom: 30px;
            border-radius: 3px;
            overflow: hidden;
            img {
                height: 330px;
                object-fit: cover;
                width: 100%;
            }
        }

        div.product-info {
            h1 {
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                padding-bottom: 10px;
                color: #333333;
                border-bottom: 1px solid rgba(51, 51, 51, 0.3);
                margin-bottom: 10px;
            }
            h2 {
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 0px;
                color: #333333;
            }
            h3 {
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 0px;
                color: #333333;
            }
        }

        div.info-center {
            border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            margin-bottom: 10px;
        }

        div.info-center__item {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            div.select-color {
                border-radius: 3px;
                width: 40px;
                height: 20px;
            }
            h2 {
                width: 100px;
                margin-right: 20px;
            }
        }

        div.info-bottom {
            border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            div.info-bottom__item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
        }

        div.price-media {
            border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            display: none;
            h3 {
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                margin-bottom: 5px;
                text-align: center;
                color: #333333;
            }
            h4 {
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                margin-bottom: 5px;
                text-align: center;
                color: #333333;
            }
        }
    }

    div.prices {
        h3 {
            font-weight: 500;
            font-size: 32px;
            line-height: 39px;
            margin-bottom: 0px;
            color: #333333;
        }
        div.deliver-box {
            padding: 15px 0px;
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            margin-bottom: 20px;
            div.deliver-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h3 {
                    position: relative;
                    button {
                        display: inline !important;
                        background: transparent;
                        border: none;
                        // height: 14px;
                    }
                    button.question {
                        position: absolute;
                        z-index: 2;
                        top: -10px;
                        right: -16px;
                    }

                    div.deliver-info {
                        position: absolute;
                        // right: 0;
                        width: 208px;
                        top: 0;
                        transform: translateX(90%);
                        border: 0.5px solid #333333;
                        border-radius: 2px;
                        padding: 0px 8px;
                        background: #fff;
                        z-index: 4;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        text-decoration-line: underline;
                        margin-bottom: 10px;
                        color: #333333;

                        div.toop {
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            button {
                            }
                        }
                    }
                }
            }

            div.deliver-item:first-child {
                margin-bottom: 15px;
            }
        }

        div.price-all {
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2 {
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
                margin-bottom: 0px;
                color: #333333;
            }
        }
    }

    div.prices-media {
        display: none;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid rgba(51, 51, 51, 0.3);
        padding-top: 10px;
        h3 {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 0px;
            color: #333333;

            display: flex;
            align-items: center;
            span {
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                /* identical to box height */
                margin-left: 5px;
                color: #333333;
            }
        }
        h4 {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 0px;
            color: #333333;
        }
    }
    @media (max-width: 1025px) {
        .jdem {
            width: 100%;
            h1 {
                font-size: 32px !important;
            }
            img {
                width: 50%;
            }
        }
    }

    @media (max-width: 576px) {
        .jdem {
            flex-direction: column;
            h1 {
                font-size: 24px !important;
            }
            img {
                width: 100%;
            }
        }
        div.title-top {
            background-color: #e0e0e0;
            padding: 4px;
            margin-bottom: 15px;
            h1 {
                font-size: 12px;
                line-height: 15px;

                color: #333333;
            }
        }

        div.order-body {
            margin-bottom: 54px;
            div.order-item {
                margin-bottom: 34px;
                div.order-body-title {
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                    div.title-left {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        h2 {
                            display: none;
                        }
                        div.status-box {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 100%;
                            margin-bottom: 10px;
                            h3 {
                                font-size: 16px;
                            }
                            span {
                                font-size: 14px;
                                line-height: 20px;
                            }
                            span.send {
                                color: #ffc600;
                            }
                            span.cancel {
                                color: #ff0000;
                            }
                        }
                    }
                    div.title-right {
                        justify-content: space-between;
                        width: 100%;
                        h4 {
                            width: 50%;
                        }
                        h6 {
                            margin-bottom: 0px;
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 20px;
                            margin-left: 20px;
                            text-decoration-line: underline;

                            color: #333333;
                        }
                    }
                }

                div.title-media {
                    display: block;
                    margin-bottom: 10px;
                }
            }
        }
        div.products-box {
            margin: 0px -5px;
            div.products-box__item {
                width: 50%;
                padding: 0px 5px;
                margin-bottom: 30px;
            }
        }
        div.item__inner {
            div.product-img {
                margin-bottom: 10px;

                img {
                    height: 200px;
                }
            }

            div.product-info {
                h1 {
                    font-size: 14px !important;
                    line-height: 17px;
                    padding-bottom: 5px;
                    margin-bottom: 5px;
                }
                h2 {
                    font-size: 12px;
                    line-height: 15px;
                }
                h3 {
                    font-size: 12px;
                    line-height: 15px;
                }
            }

            div.info-center {
                margin-bottom: 5px;
            }

            div.info-center__item {
                margin-bottom: 5px;
                div.select-color {
                    border-radius: 3px;
                    width: 27px;
                    height: 15px;
                }
                h2 {
                    width: 80px;
                    margin-right: 20px;
                }
            }

            div.info-bottom {
                border-bottom: 1px solid rgba(51, 51, 51, 0.3);
                margin-bottom: 5px;

                div.info-bottom__item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 5px;
                }
            }

            div.price-media {
                display: block;
            }
        }

        .deliver-box {
            display: none !important;
        }
        .price-all {
            display: none !important;
        }
        .prices-media {
            display: flex !important;
        }
    }
}
</style>
