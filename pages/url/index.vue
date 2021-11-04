<template>
    <div>
        <div class="zakaz" v-if="order != null">
            <div class="head">
                {{ $t("moyzak") }}
            </div>
            <div class="container-one">
                <div class="order" v-if="order.length > 0">
                    <div
                        class="box"
                        v-for="(item, index) in order"
                        :key="index"
                    >
                        <BuyCard :item="item" :index="index" />
                    </div>
                </div>
                <div class="jdem" v-if="order.length == 0">
                    <h1>{{ $t("jdem2") }}</h1>
                    <img src="@/assets/img/jdem.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            order: null,
            all: null,
            open: true,
            selectIndex: 0,
            color: "rgba(51, 51, 51, 0.3)"
        };
    },
    async mounted() {
        let order = await this.$axios.$get("buy/me");
        this.order = order.data;
    },
    methods: {
        doIt() {
            this.open = !this.open;
            this.title = "Оплатить";
            this.color = "#FFC600";
        }
    }
};
</script>

<style lang="scss" scoped>
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
input {
    padding: 10px;
}
button {
    cursor: pointer;
}
input:focus {
    outline: 0;
}

.zakaz {
    input {
        border-radius: 3px;
    }

    .head {
        padding: 14px;
        background: rgba(51, 51, 51, 0.19);
        color: #333333;
        font-size: 22px;
    }

    .order {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 50px;
        // margin: 0px -40px;
        .box {
            margin-bottom: 50px;
            width: calc(100% / 3);
            // padding: 0px 40px;
            input {
                padding: 10px;
            }
            .paymethod {
                margin-top: 20px;

                .txts {
                    font-size: 24px;
                    font-weight: 600;
                    color: #333333;
                    margin-bottom: 15px;
                    margin-top: 15px;
                }
                input {
                    width: 100%;
                    height: 44px;
                    border: 1px solid rgba(51, 51, 51, 0.3);
                }
                .cont {
                    margin-top: 15px;
                    text-align: left;
                    font-size: 22px;
                    font-weight: 500;
                    margin-left: 5px;
                    margin-bottom: 10px;
                }
                .cards {
                    display: flex;
                }
            }
            .titl {
                width: 100%;
                background-color: #333333;
                color: #fff;
                font-size: 24px;
                font-weight: 500;
                padding: 8px 0px;
                margin-bottom: 15px;
            }

            .name {
                color: #333333;
                font-size: 24px;
                margin-bottom: 10px;
            }

            .call {
                width: 100%;
                height: 44px;
                border: 1px solid rgba(51, 51, 51, 0.3);
                margin-bottom: 8px;
            }

            .lname {
                color: #333333;
                font-size: 24px;
            }

            .link {
                width: 100%;
                height: 26px;
                border: 1px solid rgba(51, 51, 51, 0.3);
                color: #333;
                font-size: 16px;
                padding-left: 20px;
            }

            .cols {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;

                .grup {
                    .title {
                        font-size: 24px;
                        color: #333333;
                        margin-bottom: 10px;
                    }

                    input {
                        width: 97px;
                        height: 44px;
                        border: 1px solid rgba(51, 51, 51, 0.3);
                    }
                }
            }

            .tcomment {
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 24px;
                color: #333;
            }

            .comm {
                width: 100%;
                height: 44px;
                border: 1px solid rgba(51, 51, 51, 0.3);
            }

            .info {
                display: flex;
                justify-content: space-between;
                margin: 15px 0px;

                .status {
                    .zak {
                        font-size: 20px;
                        color: #333;
                        font-weight: 600;
                    }

                    .price {
                        font-size: 24px;
                        color: #333;
                        text-align: left;
                        font-weight: 500;
                    }
                }

                .new {
                    .zak {
                        font-size: 16px;
                        color: #ffc600;
                        text-align: right;
                    }

                    .task {
                        font-size: 18px;
                        color: #333333;
                        text-align: right;
                        margin-top: 13px;
                    }
                }
            }

            .adress {
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 24px;
                color: #333;
            }

            .deliv {
                width: 100%;
                height: 44px;
                border: 1px solid rgba(51, 51, 51, 0.3);
            }

            .changing {
                cursor: pointer;
                width: 100%;
                color: #333;
                font-size: 24px;
                font-weight: 500;
                padding: 8px 0px;
                margin-bottom: 15px;
                margin-top: 30px;
            }

            .more {
                display: flex;
                justify-content: space-between;

                .add {
                    font-size: 16px;
                    color: #333333;
                    text-align: left;
                }

                .date {
                    color: #333333;
                    font-size: 16px;
                }
            }
        }
    }
}

@media (max-width: 1250px) {
    .zakaz {
        input {
            border-radius: 3px;
        }

        .head {
            padding: 14px;
            background: rgba(51, 51, 51, 0.19);
            color: #333333;
            font-size: 22px;
        }

        .order {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-top: 50px;

            .box {
                margin-bottom: 70px;

                width: 33%;
                .titl {
                    width: 100%;
                    font-size: 20px;
                }

                .name {
                    font-size: 20px;
                    margin-bottom: 7px;
                }

                .call {
                    width: 100%;
                    height: 37px;
                }

                .lname {
                    color: #333333;
                    font-size: 20px;
                }

                .link {
                    width: 100%;
                    height: 26px;
                    color: #333;
                    font-size: 14px;
                }

                .cols {
                    width: 100%;
                    .grup {
                        .title {
                            font-size: 20px;
                        }

                        input {
                            width: 80px;
                            height: 35px;
                        }
                    }
                }

                .tcomment {
                    font-size: 20px;
                }

                .comm {
                    width: 100%;
                    height: 37px;
                }

                .info {
                    .status {
                        .zak {
                            font-size: 20px;
                        }

                        .price {
                            font-size: 20px;
                        }
                    }

                    .new {
                        .zak {
                            font-size: 14px;
                        }
                        .task {
                            font-size: 16px;
                        }
                    }
                }

                .adress {
                    font-size: 20px;
                }

                .deliv {
                    width: 100%;
                    height: 37px;
                }

                .changing {
                    width: 100%;
                    font-size: 20px;
                }
                .more {
                    .add {
                        font-size: 14px;
                    }

                    .date {
                        color: #333333;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
@media (max-width: 990px) {
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
        padding: 15px 20px !important;
        h1 {
            font-size: 24px !important;
        }
        img {
            width: 100%;
        }
    }

    .zakaz {
        input {
            border-radius: 3px;
        }

        .head {
            margin: auto;
            padding: 5px;
            background: rgba(51, 51, 51, 0.19);
            color: #333333;
            font-size: 12px;
            text-align: center;
        }

        .order {
            width: 100% !important;
            margin: 0 !important;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-top: 20px;

            .box {
                padding: 0 10px !important;
                margin-bottom: 70px;

                width: 100%;
                margin: auto;
                .buy-item-card {
                    .name {
                        font-size: 18px !important;
                        margin-bottom: 7px;
                    }
                }
                .titl {
                    width: 100%;
                    font-size: 20px !important;
                }

                .call {
                    width: 100%;
                    height: 37px;
                }

                .lname {
                    color: #333333;
                    font-size: 20px;
                }

                .link {
                    width: 100%;
                    height: 26px;
                    color: #333;
                    font-size: 14px;
                }

                .cols {
                    .grup {
                        .title {
                            font-size: 20px;
                        }

                        input {
                            width: 80px;
                            height: 35px;
                        }
                    }
                }

                .tcomment {
                    font-size: 20px;
                }

                .comm {
                    width: 100%;
                    height: 37px;
                }

                .info {
                    .status {
                        .zak {
                            font-size: 20px;
                        }

                        .price {
                            font-size: 20px;
                        }
                    }

                    .new {
                        .zak {
                            font-size: 14px;
                        }
                        .task {
                            font-size: 16px;
                        }
                    }
                }

                .adress {
                    font-size: 20px;
                }

                .deliv {
                    width: 100%;
                    height: 37px;
                }

                .changing {
                    width: 100%;
                    font-size: 20px;
                    margin: auto;
                    margin-top: 20px;
                    margin-bottom: 10px;
                }
                .more {
                    .add {
                        font-size: 14px;
                    }

                    .date {
                        color: #333333;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
