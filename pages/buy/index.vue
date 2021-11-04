<template>
    <div id="product">
        <!-- <div
            :class="succesMenu ? 'succes' : 'succes false'"
            v-if="succesMenu == true"
        >
            Qo'shildi
        </div> -->
        <div class="product-info">
            <div class="product-card">
                <div class="product-row">
                    <div class="product-one">
                        <div class="product-icon">1</div>
                        <div class="product-title">Выберите товар</div>
                        <div class="product-text">
                            Выберите товар на сайте любого мирового бренда
                            представленного в Турции.
                        </div>
                    </div>

                    <div class="product-one">
                        <div class="product-icon">2</div>
                        <div class="product-title">Зарегистрируйтесь</div>
                        <div class="product-text">
                            Зарегистрируйтесь на Clozzone.com и получите личный
                            кабинет.
                        </div>
                    </div>

                    <div class="product-one">
                        <div class="product-icon">3</div>
                        <div class="product-title">Создайте запрос</div>
                        <div class="product-text">
                            Укажите информацию о товаре, который необходимо
                            выкупить.
                        </div>
                    </div>

                    <div class="product-one">
                        <div class="product-icon">4</div>
                        <div class="product-title">Получите подтверждение</div>
                        <div class="product-text">
                            Статус заказа в личном кабинете будет изменён на
                            “Подтверждён”
                        </div>
                    </div>

                    <div class="product-one">
                        <div class="product-icon">5</div>
                        <div class="product-title">Оплатите заказ</div>
                        <div class="product-text">
                            Зарегистрируйтесь на Clozzone.com и получите личный
                            кабинет.
                        </div>
                    </div>

                    <div class="product-one">
                        <div class="product-icon">6</div>
                        <div class="product-title">Получите товар</div>
                        <div class="product-text">
                            После оплаты, товар будет доставлен до Вашего дома
                            за 3-5 рабочих дней.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-register">
            <div class="product-row">
                <div class="product-title">
                    Заполните форму запроса и нажмите “ Создать запрос ”
                </div>
                <div class="product-card">
                    <div class="product-card-box">
                        <div class="card-box-title">Название товара</div>
                        <input type="text" v-model="order.name" />
                    </div>
                    <div class="product-card-box">
                        <div class="card-box-title">Ссылка на товар</div>
                        <input type="text" v-model="order.url" />
                    </div>
                    <div class="product-card-box">
                        <div class="multi-box">
                            <div class="size">
                                <div class="card-box-title">Размер</div>
                                <input type="text" v-model="order.size" />
                            </div>
                            <div class="count">
                                <div class="card-box-title">Количество</div>
                                <input type="number" v-model="order.num" />
                            </div>
                            <div class="color">
                                <div class="card-box-title">Цвет</div>
                                <div
                                    class="current-item"
                                    @click="isActive = !isActive"
                                >
                                    <div class="reverse">
                                        <div
                                            class="current-color"
                                            :style="
                                                'background-color:' +
                                                    select.code +
                                                    ';'
                                            "
                                        ></div>
                                        <div class="current-text">
                                            {{ select.name }}
                                        </div>
                                    </div>
                                    <button>
                                        <div :class="isActive ? 'up' : 'down'">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="12"
                                                    transform="rotate(-180 12 12)"
                                                    fill="#495057"
                                                />
                                                <path
                                                    d="M17.334 14.667L12.0007 9.33366L6.66732 14.667"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div class="select">
                                    <input type="text" disabled />
                                    <div class="drops" v-if="isActive">
                                        <div class="drops-container">
                                            <div
                                                class="drop-container-inner"
                                                v-for="(item, index) in colors"
                                                :key="index"
                                                @click="changeColor(item)"
                                            >
                                                <div
                                                    class="drop-color"
                                                    :style="
                                                        `background-color:${item.code};`
                                                    "
                                                ></div>
                                                <div class="drop-text">
                                                    {{ item.name }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-card-box">
                        <div class="card-box-title">
                            Дополнительные пожелание (необязательно)
                        </div>
                        <input type="text" v-model="order.comment" />
                        <button type="submit" @click="create">
                            Создать запрос
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            selectedItem: null,
            colors: null,
            bgcolor: "#333",
            succesMenu: false,

            select: {
                code: "",
                name: ""
            },
            order: {
                name: "",
                url: "",
                size: "",
                num: "",
                color: "",
                comment: ""
            }
        };
    },
    methods: {
        changeColor(item) {
            this.select.code = item.code;
            this.select.name = item.name;

            this.isActive = false;
        },
        async create() {
            this.order.color = this.select.code;
            await this.$axios
                .$post("buy/create", this.order)
                .then(res => {
                    this.succesMenu = true;
                    console.log("NEWS_SUCCESS_SIZE");

                    this.$router.push({ name: `index___${this.$i18n.locale}` });
                })
                .catch(err => {
                    console.log("error");
                });
        }
    },
    async mounted() {
        let color = await this.$axios.$get("color/all");
        this.colors = color.data;

        this.select.code = this.colors[0].code;
        this.select.name = this.colors[0].name;
        console.log("color", color);
    }
};
</script>

<style lang="scss" scoped>
#product {
    width: 100%;
    padding: 47px 0 0 0;
    .succes {
        position: fixed;
        top: 200px;
        left: 0;
        font-size: 36px;
    }
    .product-info {
        width: 100%;
        .product-card {
            width: 100%;
            .product-row {
                margin-bottom: 100px;
                display: flex;
                text-align: center;
                justify-content: center;
                flex-wrap: wrap;
                row-gap: 100px;
                column-gap: 30px;
                .product-one {
                    width: 30%;
                    .product-icon {
                        width: 100px;
                        height: 100px;
                        font-weight: 600;
                        font-size: 48px;
                        line-height: 59px;
                        margin: 0 auto;
                        margin-bottom: 30px;
                        color: #333;
                        background: #ffc600;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .product-title {
                        margin-bottom: 15px;
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 29px;
                        color: #333333;
                    }
                    .product-text {
                        font-size: 16px;
                        line-height: 20px;
                        text-align: center;
                    }
                }
            }
        }
    }
    .product-register {
        width: 100%;
        .product-row {
            .product-title {
                text-align: center;
                font-size: 32px;
                line-height: 39px;
            }
            .product-card {
                padding: 50px 0 100px 0;
                .product-card-box {
                    margin: 0 auto;
                    margin-bottom: 20px;
                    width: 600px;
                    .card-box-title {
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 29px;
                        margin-bottom: 10px;
                    }
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                    }
                    input {
                        width: 600px;
                        height: 60px;
                        border: 1px solid #333333;
                        box-sizing: border-box;
                        border-radius: 3px;
                        padding: 0 15px;
                        &:focus {
                            outline-color: #ffc600;
                        }
                    }
                    .multi-box {
                        display: flex;
                        grid-gap: 30px;
                        .color {
                            display: inline-block;
                            position: relative;
                            .current-item {
                                cursor: pointer;
                                padding: 6px 10px;
                                display: flex;
                                align-items: center;
                                position: absolute;
                                z-index: 1;
                            }
                            .current-color {
                                width: 60px !important;
                                height: 30px;
                                margin-right: 10px;
                                // background-color: #ffffff;
                                border: 0.5px solid #000000;
                                box-sizing: border-box;
                                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                                border-radius: 3px;
                            }
                            .current-text {
                                margin-right: 14px;
                                word-wrap: break-word;
                                width: 55px;
                            }
                            button {
                                cursor: pointer;
                                padding: 0;
                                margin: 0;
                                width: 24px;
                                height: 24px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: 0;
                                background: transparent;
                                svg {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .down {
                                svg {
                                    transform: rotate(-180deg);
                                    circle {
                                        fill: #ffc600;
                                    }
                                    path {
                                        stroke: #333;
                                    }
                                }
                            }
                            .select {
                                input {
                                    position: relative;
                                }
                                .drops {
                                    width: 100%;
                                    border: 1px solid #333333;
                                    border-top: 0;
                                    border-radius: 3px;
                                    position: absolute;
                                    background: #fff;
                                    z-index: 1;
                                    .drops-container {
                                        padding: 6px 10px;
                                        overflow: scroll;
                                        height: 200px;
                                        .drop-container-inner {
                                            cursor: pointer;
                                            margin-bottom: 9px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: space-between;

                                            .drop-color {
                                                width: 50px !important;
                                                height: 30px;
                                                margin-right: 10px;
                                                background-color: #ffffff;
                                                border: 0.5px solid #000000;
                                                box-sizing: border-box;
                                                box-shadow: 1px 1px 5px
                                                    rgba(0, 0, 0, 0.3);
                                                border-radius: 3px;
                                                &:nth-child(2) {
                                                    background-color: red;
                                                }
                                            }
                                            .drop-text {
                                                width: calc(
                                                    100% - 50px
                                                ) !important;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        input,
                        select {
                            width: 180px;
                            height: 60px;
                            padding: 0 25px;
                            text-align: center;
                        }
                    }
                }
            }
            button[type="submit"] {
                background: #ffc600;
                border-radius: 3px;
                padding: 11px 167px;
                border: 0;
                font-size: 32px;
                line-height: 39px;
                margin-top: 100px;
            }
        }
    }
}
@media (max-width: 950px) {
    #product {
        padding: 0;
        margin-top: 20px;
        .product-info {
            .product-card {
                .product-row {
                    row-gap: 20px;
                    column-gap: 0;
                    .product-one {
                        width: 691px;
                        .product-icon {
                            width: 64px;
                            height: 64px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                        }
                        .product-title {
                            font-weight: 600;
                            font-size: 32px;
                            line-height: 39px;
                            margin-bottom: 10px;
                        }
                        .product-text {
                            font-size: 24px;
                            line-height: 29px;
                        }
                    }
                }
            }
        }
        .product-register {
            .product-row {
                .product-title {
                    text-align: center;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                }
                .product-card {
                    padding: 0;
                    padding-top: 50px;
                    .product-card-box {
                        .multi-box {
                            .color {
                                .current-item {
                                    transform: translate(0, -10px);
                                    .current-text {
                                        font-size: 14px;
                                        line-height: 17px;
                                        word-wrap: break-word;
                                        width: 55px;
                                    }
                                }
                            }
                            input {
                                width: 180px;
                                height: 50px;
                            }
                        }
                        input {
                            width: 600px;
                            height: 50px;
                        }
                        .card-box-title {
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 22px;
                        }
                    }
                    button {
                        width: 600px;
                        height: 50px;
                        margin: 50px 0;
                        font-size: 24px;
                        line-height: 29px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
@media (max-width: 575px) {
    #product {
        padding: 0;
        .product-info {
            margin-top: 20px;
            .product-card {
                .product-row {
                    row-gap: 20px;
                    column-gap: 0;
                    .product-one {
                        .product-icon {
                            width: 64px;
                            height: 64px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                        }
                        .product-title {
                            padding: 0 10px;
                            font-weight: 500;
                            font-size: 24px;
                            line-height: 29px;
                            margin-bottom: 15px;
                        }
                        .product-text {
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 20px;
                        }
                    }
                }
            }
        }
        .product-register {
            .product-row {
                .product-title {
                    text-align: center;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                }

                .product-card {
                    width: 100% !important;
                    .product-card-box {
                        width: 100% !important;
                        padding: 0 18px;
                        .multi-box {
                            width: 100%;
                            grid-gap: 15px;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            div.size,
                            div.count {
                                width: calc((100% - 20px) / 2);
                                input {
                                    width: 100%;
                                }
                            }
                            .color {
                                width: 100% !important;
                                .current-item {
                                    width: 100%;
                                    transform: translate(0, 3px);
                                }
                                .reverse {
                                    width: 100% !important;
                                    display: flex !important;
                                    align-items: center;
                                    .current-text {
                                        width: unset;
                                    }
                                }
                                .select {
                                    input {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                        input {
                            width: 100%;
                            height: 40px;
                        }
                        .card-box-title {
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 22px;
                        }
                    }
                    button {
                        width: 100%;
                        height: 50px;
                        margin: 30px 0 50px 0;
                        font-weight: 600;
                        font-size: 24px;
                        line-height: 29px;
                        padding: 10px 0;
                    }
                }
            }
        }
    }
}
</style>
