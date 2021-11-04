<template>
    <div class="buy-item-card">
        <div class="titl">{{ $t("zakaz") }} {{ index + 1 }}</div>
        <div class="name">{{ $t("name_tovar") }}</div>
        <input type="text" disabled :value="item.name" class="call" />
        <div class="lname">{{ $t("silkatovar") }}</div>
        <a target="_blank" :href="item.url">
            <input type="text" class="link" disabled :value="item.url" />
        </a>
        <div class="cols">
            <div class="grup">
                <div class="title">{{ $t("soni") }}</div>
                <input type="text" disabled :value="item.num" class="inp" />
            </div>
            <div class="grup">
                <div class="title">{{ $t("size") }}</div>
                <input type="text" disabled :value="item.size" class="inp" />
            </div>
            <div class="grup">
                <div class="title">{{ $t("color") }}</div>
                <input
                    type="text"
                    disabled
                    :style="'background-color:' + item.color + ';'"
                    class="inp"
                />
            </div>
        </div>
        <div class="tcomment">{{ $t("comment") }}</div>
        <input type="text" disabled :value="item.comment" class="comm" />
        <div class="info">
            <div class="status">
                <div class="zak">{{ $t("statuszak") }}</div>
                <div class="price">{{ $t("sena") }}</div>
            </div>
            <div class="new">
                <div class="zak" v-if="item.status == 0">
                    {{ $t("status_0") }}
                </div>
                <div class="zak" v-if="item.status == 1">
                    {{ $t("status_1") }}
                </div>
                <div class="zak" v-if="item.status == 2">
                    {{ $t("status_2") }}
                </div>
                <div class="zak" v-if="item.status == 3">
                    {{ $t("status_3") }}
                </div>
                <div class="zak" v-if="item.status == 4">
                    {{ $t("status_4") }}
                </div>
                <div class="zak" v-if="item.status == 5">
                    {{ $t("status_5") }}
                </div>
                <div class="zak" v-if="item.status == 6">
                    {{ $t("status_6") }}
                </div>

                <div class="cancel" v-if="item.status == 7">
                    {{ $t("status_7") }}
                </div>
                <div class="task" v-if="item.amount == undefined">
                    {{ $t("nesena") }}
                </div>
                <div class="task" v-else>
                    {{ regex(item.amount) }}
                </div>
            </div>
        </div>
        <!-- <div class="adress">{{ $t("adressdos") }}</div> -->
        <!-- <input type="text" disabled class="deliv" /> -->
        <div class="paymethod">
            <div class="txts" v-if="item.amount != undefined">
                {{ $t("vibplat") }}
            </div>
            <div class="payment-cards" v-if="item.amount != undefined">
                <button
                    :class="selectIndex == 1 ? 'select' : ''"
                    @click="selectIndex = 1"
                >
                    <span :class="selectIndex == 1 ? 'active' : ''">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M5 6.5L6.61538 8L12 3"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.25 7V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <img src="@/assets/img/humo.png" alt="" />
                </button>
                <button
                    :class="selectIndex == 2 ? 'select' : ''"
                    @click="selectIndex = 2"
                >
                    <span :class="selectIndex == 2 ? 'active' : ''">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M5 6.5L6.61538 8L12 3"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.25 7V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <img src="@/assets/img/uzcard.png" alt="" />
                </button>
                <button
                    :class="selectIndex == 3 ? 'select' : ''"
                    @click="selectIndex = 3"
                >
                    <span :class="selectIndex == 3 ? 'active' : ''">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M5 6.5L6.61538 8L12 3"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.25 7V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <img src="@/assets/img/click.png" alt="" />
                </button>
                <button
                    :class="selectIndex == 4 ? 'select' : ''"
                    @click="selectIndex = 4"
                >
                    <span :class="selectIndex == 4 ? 'active' : ''">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M5 6.5L6.61538 8L12 3"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.25 7V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333"
                                stroke="#FFC600"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <img src="@/assets/img/payme.png" alt="" />
                </button>
            </div>
            <h6 class="error-text" v-if="error.isError">
                {{ $t("sposob") }}
            </h6>
        </div>

        <button
            class="changing two-btn"
            v-if="item.amount != undefined"
            @click="clickPay"
        >
            {{ $t("oplatit") }}
        </button>

        <div class="more">
            <div class="add">
                {{ $t("datazakaz") }}
            </div>
            <div class="date">
                {{ item.createdAt.slice(0, 10) }}
            </div>
        </div>
    </div>
</template>

<script>
import sha256 from "sha256";
export default {
    props: {
        item: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    head() {
        return {
            script: [
                {
                    src: "https://cdn.pays.uz/checkout/js/v1.0.1/checkout.js",
                    type: "text/javascript"
                }
            ]
        };
    },
    data() {
        return {
            selectIndex: 0,
            error: {
                isError: false,
                text: {
                    uz: "To'lov turini tanlang",
                    ru: "Выберите способ оплаты "
                }
            }
        };
    },
    methods: {
        clickPay() {
            if (this.selectIndex != 0) {
                if (
                    this.selectIndex == 4 ||
                    this.selectIndex == 1 ||
                    this.selectIndex == 3
                ) {
                    if (this.selectIndex == 4 || this.selectIndex == 1) {
                        this.href = `https://checkout.paycom.uz/${btoa(
                            `m=609e95187852bd0ebce16021;ac.order=${
                                this.item.order
                            };a=${this.item.amount * 100}`
                        )};c=https://clozzone.com`;
                    }

                    if (this.selectIndex == 3) {
                        this.href = `https://my.click.uz/services/pay?service_id= 17603&merchant_id=12746&amount=${this.item.amount}&transaction_param=${this.item.order}&return_url=https://clozzone.com?orderPayed=true`;
                    }

                    let a = document.createElement("a");

                    document.body.appendChild(a);

                    a.style = "display:none";
                    a.href = this.href;
                    a.target = "_blank";

                    a.click();

                    // let routeData = this.$router.resolve({
                    //     name: this.href
                    // });
                }

                if (this.selectIndex == 2) {
                    let a = document.createElement("div");

                    document.body.appendChild(a);

                    a.id = "parent-frame";

                    let amount = this.item.amount * 100;

                    paymo_open_widget({
                        parent_id: "parent-frame",
                        store_id: "494",
                        account: this.item.order,
                        terminal_id: "97008381",
                        success_redirect:
                            "https://clozzone.com?orderPayed=true",
                        fail_redirect: `https://clozzone.com?orderPayed=false`,
                        version: "1.0.0",
                        amount: amount,
                        details: "",
                        lang: "ru",
                        key: sha256(
                            "494" +
                                amount.toString() +
                                this.item.order +
                                "NZY3SlPpX7k8YJeCj9yHiceq4MnHDNCs"
                        ),
                        theme: "blue"
                    });
                }
            } else {
                this.error.isError = true;
            }
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
        }
    }
};
</script>

<style lang="scss" scoped>
.buy-item-card {
    margin-bottom: 25px;
}
.error-text {
    color: red;
    margin-top: 5px;
}
.payment-cards {
    display: flex;
    justify-content: space-between;
    button {
        display: inline-block;
        width: calc((100% - 30px) / 4);
        border: none;
        background-color: #fff;
        border-radius: 3px;
        position: relative;
        filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.3));
        span {
            position: absolute;
            top: -6px;
            display: none;
            right: 1px;
            z-index: 2;
        }
        span.active {
            display: inline-block;
        }
        img {
            width: 100%;
        }
    }
}
input {
    padding: 10px;
}
.changing {
    border-radius: 3px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    width: 100%;
    padding: 12px 20px;
    border: none;
}
.one-btn {
    background: rgba(51, 51, 51, 0.3);
    color: #333333 !important;
}
.two-btn {
    background: #ffc600;
    color: #333333 !important;
}
.three-btn {
    background: #ff0000;
    color: #fff !important;
}
.four-btn {
    background: #03a500;
    color: #fff !important;
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
    text-align: center;
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
    cursor: pointer;
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
        .cancel {
            font-size: 16px;
            color: #ff0000;
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
@media (max-width: 576px) {
    .link {
        height: unset;
    }
    .tcomment {
        text-align: center;
    }

    .new {
        .zak {
            font-weight: 600;
            font-size: 12px !important;
            line-height: 17px;
            text-decoration-line: underline;
        }
    }
    .box {
        .name,
        .lname,
        .title,
        .tcomment,
        .zak {
            font-size: 18px !important;
        }
    }
    .new {
        .zak {
            margin-top: 5px;
            font-size: 14px !important;
        }
    }
}
</style>
