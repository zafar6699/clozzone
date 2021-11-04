<template>
    <div>
        <div class="order">
            <div class="order-top">
                <p>{{ $t("ofrmitOrder") }}</p>
            </div>

            <div class="container-one" v-if="basket != null">
                <div class="orders">
                    <div class="card-box ">
                        <div
                            class="card-order"
                            v-for="(item, index) in basket"
                            :key="index"
                        >
                            <div class="card-order-img">
                                <img :src="$store.state.uploads + item.image" />
                            </div>
                            <div class="card-order-text">
                                <div class="text">
                                    <div
                                        class="col-md-4 col-8 order-md-1 order-1"
                                    >
                                        <div>
                                            <p>{{ $t("nametovar") }}</p>
                                            <span>{{
                                                item.product.name[$i18n.locale]
                                            }}</span>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-4 col-8 order-md-2 order-3"
                                    >
                                        <div>
                                            <p>{{ $t("brand") }}</p>
                                            <span>{{
                                                item.product.brand.name
                                            }}</span>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-4 col-4 order-md-3 order-2"
                                    >
                                        <div>
                                            <p>{{ $t("color") }}</p>
                                            <span
                                                class="color-order"
                                                :style="
                                                    'background-color:' +
                                                        item.color
                                                "
                                            ></span>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-4 col-6 order-md-4 order-8"
                                    >
                                        <div>
                                            <p>{{ $t("sena") }}</p>
                                            <span
                                                v-if="
                                                    item.product.discount ==
                                                        undefined
                                                "
                                                >{{ regex(item.product.price) }}
                                                {{ $t("sum") }}
                                            </span>
                                            <span v-else
                                                >{{
                                                    regex(item.product.discount)
                                                }}
                                                {{ $t("sum") }}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-4 col-4 order-md-5 order-4"
                                    >
                                        <div>
                                            <p>{{ $t("size") }}</p>
                                            <span>{{
                                                item.param.size.size.size
                                            }}</span>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-4 col-6 order-md-6 order-5"
                                    >
                                        <div>
                                            <p>{{ $t("coltovar") }}</p>
                                            <div class="counter">
                                                <button @click="minus(index)">
                                                    -
                                                </button>
                                                <input
                                                    disabled
                                                    type="number"
                                                    min="1"
                                                    @keyup="changeInput(index)"
                                                    v-model="item.count"
                                                />
                                                <button @click="plus(index)">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-8 col-6  order-md-7 order-7"
                                    >
                                        <div>
                                            <aside class="bir">
                                                <aside class="rem d-flex">
                                                    {{ $t("dostavka") }}
                                                    <aside class="hover-svg">
                                                        <svg
                                                            width="14"
                                                            height="17"
                                                            viewBox="0 0 14 17"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
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
                                                        <aside
                                                            class="dostavka-info"
                                                        >
                                                            <div
                                                                class="burchak"
                                                            ></div>
                                                            <p>
                                                                Цена за карго.
                                                                Доставка по
                                                                Ташкенту
                                                                бесплатная.
                                                            </p>
                                                        </aside>
                                                    </aside>
                                                </aside>
                                            </aside>
                                            <span class="spanthis"
                                                >{{
                                                    regex(
                                                        item.product.category
                                                            .dostavka
                                                    )
                                                }}
                                                {{ $t("sum") }}
                                            </span>
                                        </div>
                                    </div>
                                    <!-- <div
                                        class="col-md-4 col-6 order-md-8 order-6"
                                    >

                                    </div> -->
                                    <div
                                        class="col-md-4 col-12 order-md-9 order-9"
                                    >
                                        <div class="actions">
                                            <nuxt-link
                                                :to="{
                                                    name: `busket-id___${$i18n.locale}`,
                                                    params: {
                                                        id: item.product._id
                                                    }
                                                }"
                                                ><svg
                                                    width="48"
                                                    height="48"
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        width="48"
                                                        height="48"
                                                        rx="3"
                                                        fill="#333333"
                                                    />
                                                    <path
                                                        d="M31.1623 9.56655L30.7748 9.25057L30.7748 9.25057L31.1623 9.56655ZM33.9009 8.09163L33.8503 7.5942L33.9009 8.09163ZM38.3552 11.7237L38.8526 11.6732L38.3552 11.7237ZM37.4616 14.7031L37.8491 15.0191L37.4616 14.7031ZM20.1257 35.9633L20.3054 36.4299C20.3866 36.3987 20.4582 36.3467 20.5132 36.2793L20.1257 35.9633ZM12.4816 38.907L11.9884 38.8249C11.9589 39.0019 12.0265 39.1811 12.1656 39.2945C12.3047 39.4078 12.4938 39.438 12.6613 39.3736L12.4816 38.907ZM13.8264 30.8268L13.4389 30.5108C13.3839 30.5782 13.3475 30.6588 13.3332 30.7447L13.8264 30.8268ZM31.5498 9.88252C31.8456 9.51979 32.2099 9.21887 32.622 8.99694L32.1478 8.11651C31.6201 8.40071 31.1536 8.78606 30.7748 9.25057L31.5498 9.88252ZM32.622 8.99694C33.0341 8.775 33.4858 8.63641 33.9514 8.58907L33.8503 7.5942C33.254 7.65482 32.6755 7.8323 32.1478 8.11651L32.622 8.99694ZM33.9514 8.58907C34.4171 8.54172 34.8875 8.58655 35.3358 8.72101L35.6231 7.76315C35.049 7.59098 34.4466 7.53357 33.8503 7.5942L33.9514 8.58907ZM35.3358 8.72101C35.7841 8.85546 36.2015 9.07689 36.5643 9.37267L37.1962 8.59766C36.7317 8.2189 36.1972 7.93533 35.6231 7.76315L35.3358 8.72101ZM36.5643 9.37267C36.927 9.66845 37.2279 10.0328 37.4499 10.4448L38.3303 9.97067C38.0461 9.44298 37.6607 8.97643 37.1962 8.59766L36.5643 9.37267ZM37.4499 10.4448C37.6718 10.8569 37.8104 11.3087 37.8577 11.7743L38.8526 11.6732C38.792 11.0769 38.6145 10.4984 38.3303 9.97067L37.4499 10.4448ZM37.8577 11.7743C37.9051 12.2399 37.8602 12.7103 37.7258 13.1587L38.6836 13.4459C38.8558 12.8718 38.9132 12.2694 38.8526 11.6732L37.8577 11.7743ZM37.7258 13.1587C37.5913 13.607 37.3699 14.0244 37.0741 14.3871L37.8491 15.0191C38.2279 14.5546 38.5115 14.02 38.6836 13.4459L37.7258 13.1587ZM19.9461 35.4967L12.3019 38.4404L12.6613 39.3736L20.3054 36.4299L19.9461 35.4967ZM12.9748 38.989L14.3196 30.9089L13.3332 30.7447L11.9884 38.8249L12.9748 38.989ZM14.2139 31.1427L29.673 12.1842L28.898 11.5522L13.4389 30.5108L14.2139 31.1427ZM29.673 12.1842L31.5498 9.88252L30.7748 9.25057L28.898 11.5522L29.673 12.1842ZM37.0741 14.3871L34.879 17.0792L35.654 17.7111L37.8491 15.0191L37.0741 14.3871ZM34.879 17.0792L19.7382 35.6474L20.5132 36.2793L35.654 17.7111L34.879 17.0792ZM28.9462 12.2354L34.9272 17.7624L35.6058 17.0279L29.6249 11.501L28.9462 12.2354Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </nuxt-link>
                                            <button
                                                v-if="basket.length > 1"
                                                @click="removeProduct(index)"
                                            >
                                                <svg
                                                    width="48"
                                                    height="48"
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        width="48"
                                                        height="48"
                                                        rx="3"
                                                        fill="#333333"
                                                    />
                                                    <path
                                                        d="M11.5195 14.9756H14.5062M14.5062 14.9756H38.3995M14.5062 14.9756V33.7916C14.5062 34.5045 14.8209 35.1882 15.381 35.6923C15.9411 36.1964 16.7008 36.4796 17.4929 36.4796H32.4262C33.2183 36.4796 33.978 36.1964 34.5381 35.6923C35.0982 35.1882 35.4129 34.5045 35.4129 33.7916V14.9756H14.5062ZM18.9862 14.9756V12.2876C18.9862 11.5747 19.3009 10.891 19.861 10.3869C20.4211 9.88281 21.1808 9.59961 21.9729 9.59961H27.9462C28.7383 9.59961 29.498 9.88281 30.0581 10.3869C30.6182 10.891 30.9329 11.5747 30.9329 12.2876V14.9756M21.9729 21.6956V29.7596M27.9462 21.6956V29.7596"
                                                        stroke="white"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="sum">
                                    <div>
                                        <p>{{ $t("itog") }}</p>
                                    </div>
                                    <div>
                                        <span v-if="item.product.discount">
                                            {{
                                                regex(
                                                    (item.product.discount +
                                                        item.product.category
                                                            .dostavka) *
                                                        item.count
                                                )
                                            }}
                                            {{ $t("sum") }}
                                        </span>
                                        <span v-else>
                                            {{
                                                regex(
                                                    (item.product.price +
                                                        item.product.category
                                                            .dostavka) *
                                                        item.count
                                                )
                                            }}
                                            {{ $t("sum") }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="oplata-top">
                    <div class="line"></div>
                    <div class="oplata">
                        <!-- <button href="#">У меня есть купон</button> -->

                        <b-button v-b-modal.modal-1>
                            {{ $t("estkupon") }}
                        </b-button>

                        <b-modal
                            id="modal-1"
                            :title="
                                $i18n.locale == 'uz'
                                    ? 'Kuponni tekshirish'
                                    : 'Проверить купон'
                            "
                            ok-only
                        >
                            <div class="input-group">
                                <h4>{{ $t("writecode1") }}</h4>
                                <input
                                    type="text"
                                    :placeholder="$t('codecupon')"
                                    v-model="saleKey"
                                />
                                <h6 class="error-text" v-if="saleError">
                                    {{ $t("errorcode") }}
                                </h6>
                            </div>

                            <template #modal-footer="{ ok }">
                                <!-- Emulate built in modal footer ok and cancel button actions -->
                                <b-button
                                    size="sm"
                                    class="btn-gc w-100"
                                    @click="clickSale()"
                                >
                                    {{ $t("tekshir") }}
                                </b-button>
                            </template>
                        </b-modal>

                        <div class="sum">
                            <div>
                                <p>
                                    {{ $t("allsum") }}
                                    <span>( {{ $t("sdostavka") }} )</span>
                                </p>
                            </div>
                            <div>
                                <span
                                    >{{ regex(allSum) }} {{ $t("sum") }}
                                </span>
                            </div>
                        </div>
                        <div class="sumsale" v-if="sale != null">
                            <div>
                                <p>{{ $t("sale") }}</p>
                            </div>
                            <div>
                                <span>
                                    -{{ regex(sale) }}
                                    {{ $t("sum") }}
                                </span>
                            </div>
                        </div>

                        <h2>{{ $t("contactdan") }}</h2>

                        <div class="form">
                            <div>
                                <p>{{ $t("name") }}</p>
                                <input
                                    type="text"
                                    :value="user.name"
                                    disabled
                                />
                            </div>
                            <div>
                                <p>{{ $t("phone") }}</p>
                                <input :value="user.phone" disabled />
                            </div>
                            <div>
                                <p>{{ $t("gorod") }}</p>
                                <input type="text" :value="region" disabled />
                            </div>
                            <div>
                                <p>{{ $t("adress") }}</p>
                                <input type="text" v-model="district" />
                            </div>
                        </div>
                        <div class="plata">
                            <h2>{{ $t("vibplat") }}:</h2>
                            <div class="money">
                                <button
                                    :class="selectIndex == 1 ? 'select' : ''"
                                    @click="selectIndex = 1"
                                >
                                    <span
                                        class="checkmark"
                                        :class="
                                            selectIndex == 1
                                                ? 'select-mark'
                                                : ''
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.75 8.25L9 10.5L16.5 3"
                                                stroke="#FFC600"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M15.75 9V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12"
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
                                    <span
                                        class="checkmark"
                                        :class="
                                            selectIndex == 2
                                                ? 'select-mark'
                                                : ''
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.75 8.25L9 10.5L16.5 3"
                                                stroke="#FFC600"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M15.75 9V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12"
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
                                    <span
                                        class="checkmark"
                                        :class="
                                            selectIndex == 3
                                                ? 'select-mark'
                                                : ''
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.75 8.25L9 10.5L16.5 3"
                                                stroke="#FFC600"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M15.75 9V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12"
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
                                    <span
                                        class="checkmark"
                                        :class="
                                            selectIndex == 4
                                                ? 'select-mark'
                                                : ''
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.75 8.25L9 10.5L16.5 3"
                                                stroke="#FFC600"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M15.75 9V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12"
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

                            <h6 class="error-text" v-if="isRequired">
                                {{ $t("sposob") }}
                            </h6>
                        </div>
                        <div class="button">
                            <button @click="clickOrder">
                                <!-- <img
                                    src="@/assets/img/user-mobile.png"
                                    alt=""
                                /> -->
                                {{ $t("oplatit") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="parent-frame"></div>
    </div>
</template>
<script>
// import { paymo_open_widget } from "../../plugins/uzcard";

import sha256 from "sha256";

export default {
    middleware: "auth",

    data() {
        return {
            modalShow: false,
            success: false,
            basket: null,
            user: null,
            region: "",
            district: "",
            selectIndex: 0,
            isRequired: false,
            saleKey: "",
            sale: null,
            salePrice: null,
            saleKey: "",
            saleError: false,
            href: ""
        };
    },

    async mounted() {
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();
        // });

        if (this.$route.query.product == "one") {
            this.basket = [];
            this.basket.push(this.$store.state.oneProduct);
        } else {
            let basket = await this.$axios.$get("basket/me");
            if (this.$route.query.id != undefined) {
                let one = basket.data.find(
                    item => item._id == this.$route.query.id
                );
                this.basket = [one];
            } else {
                this.basket = basket.data;
            }
        }
        console.log("qani", this.basket);

        this.user = this.$auth.user;
        console.log("bbbb");

        if (this.$i18n.locale == "uz") {
            this.region = "Toshkent";
        } else {
            this.region = "Ташкент";
        }

        // this.$nuxt.$loading.finish();
    },

    head() {
        return {
            title: this.$t("zakaz"),
            meta: [
                {
                    hid: this.$t("zakaz"),
                    name: this.$t("zakaz"),
                    content: this.$t("zakaz")
                }
            ],
            script: [
                {
                    src: "https://cdn.pays.uz/checkout/js/v1.0.1/checkout.js",
                    type: "text/javascript"
                }
            ]
        };
    },
    computed: {
        allSum() {
            let s = 0;

            this.basket.forEach(item => {
                let price = 0;

                if (item.product.discount != undefined) {
                    price = item.product.discount * item.count;
                } else {
                    price = item.product.price * item.count;
                }

                s = s + price + item.product.category.dostavka * item.count;
            });

            if (this.sale != null) {
                if (s >= this.salePrice) {
                    s = s - this.sale;
                }
            }

            return s;
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
        removeProduct(index) {
            this.basket.splice(index, 1);
        },
        minus(index) {
            if (this.basket[index].count > 1) {
                if (this.$route.query.product == "one") {
                    this.$store.commit("downcount");
                    this.basket = [this.$store.state.oneProduct];
                } else {
                    this.basket[index].count = this.basket[index].count - 1;
                }
            }
        },
        changeInput(index) {
            if (
                this.basket[index].count < 0 ||
                this.basket[index].count == ""
            ) {
                this.basket[index].count = 1;
            }

            if (this.basket[index].count > this.basket[index].param.size.num) {
                this.basket[index].count = this.basket[index].param.size.num;
            }
        },
        plus(index) {
            if (this.basket[index].count < this.basket[index].param.size.num) {
                if (this.$route.query.product == "one") {
                    this.$store.commit("upcount");
                    this.basket = [this.$store.state.oneProduct];
                } else {
                    this.basket[index].count = this.basket[index].count + 1;
                }
            }
        },

        clickSale() {
            this.$axios
                .$get("coupon/" + this.saleKey)
                .then(res => {
                    if (res.success) {
                        this.sale = res.data.discount;
                        this.salePrice = res.data.price;
                        this.$bvModal.hide("modal-1");
                    }
                })
                .catch(err => {
                    this.saleError = true;
                });
        },
        async clickOrder() {
            this.success = true;
            if (this.district != "" && this.allSum != 0) {
                if (this.selectIndex != 0) {
                    let products = [];

                    this.basket.forEach(item => {
                        let pr = {
                            product: item.product._id,
                            param: item.param._id,
                            ss: item.param.size.size._id,
                            num: item.count,
                            size: item.param.size.size.size,
                            image: item.image,
                            color: item.color
                        };

                        products.push(pr);
                    });

                    let coupon = this.saleKey;
                    await this.$axios
                        .$get("coupon/" + this.saleKey)
                        .then(res => {
                            if (res.success) {
                            }
                        })
                        .catch(err => {
                            coupon = null;
                        });

                    this.$axios
                        .$post("order/create", {
                            product: products,
                            amount: this.allSum,
                            city: this.region,
                            address: this.district,
                            coupon
                        })
                        .then(res => {
                            console.log("res", res);
                            if (
                                this.selectIndex == 4 ||
                                this.selectIndex == 1 ||
                                this.selectIndex == 3
                            ) {
                                console.log("res", res);

                                if (
                                    this.selectIndex == 4 ||
                                    this.selectIndex == 1
                                ) {
                                    this.href = `https://checkout.paycom.uz/${btoa(
                                        `m=602e011b0ca76b555c870e2d;ac.order=${
                                            res.data.orderId
                                        };a=${res.data.amount * 100}`
                                    )};c=https://clozzone.com?payed=true`;
                                }

                                if (this.selectIndex == 3) {
                                    this.href = `https://my.click.uz/services/pay?service_id= 17603&merchant_id=12746&amount=${res.data.amount}&transaction_param=${res.data.orderId}&return_url=https://clozzone.com?payed=true`;
                                }

                                window.location = this.href;

                                console.log("href", this.href);

                                // let routeData = this.$router.resolve({
                                //     name: this.href
                                // });
                            }

                            if (this.selectIndex == 2) {
                                let a = document.createElement("div");

                                document.body.appendChild(a);

                                a.id = "parent-frame";

                                let amount = res.data.amount * 100;

                                paymo_open_widget({
                                    parent_id: "parent-frame",
                                    store_id: "494",
                                    account: res.data.orderId,
                                    terminal_id: "97008381",
                                    success_redirect:
                                        "https://clozzone.com?payed=true",
                                    fail_redirect: `https://clozzone.com?payed=false`,
                                    version: "1.0.0",
                                    amount: amount,
                                    details: "",
                                    lang: "ru",
                                    key: sha256(
                                        "494" +
                                            amount.toString() +
                                            res.data.orderId +
                                            "NZY3SlPpX7k8YJeCj9yHiceq4MnHDNCs"
                                    ),
                                    theme: "blue"
                                });
                            }
                        });
                } else {
                    this.isRequired = true;
                }
            } else {
                alert("Ma`lumotlarni to'liq to'ldiring");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.top {
    top: -150px !important;
    transition: 0.5s;
}
.success {
    color: #439767;
    position: fixed;
    z-index: 100001;
    top: 130px;
    left: 50%;
    transform: translate(-50%);
    width: 450px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    background: #eafaed;
    padding: 10px 30px;
    border-radius: 3px;
    h3 {
        margin-left: 20px;
        margin-bottom: 0;
    }
    span {
        svg {
            width: 30px;
            height: 30px;
            path {
                stroke: #ffc600;
            }
        }
    }
}
.spanthis {
    padding: 14px !important;
    width: 123px !important;
}
.bir {
    display: flex;
    width: 150px;

    .rem {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        aside.hover-svg {
            margin-left: 5px;
        }
    }
    aside {
        display: flex;
        aside.hover-svg:hover {
            .dostavka-info {
                display: block !important;
                background: #fff;
                .burchak {
                    z-index: -1;
                    position: absolute;
                    margin-bottom: 0 !important;
                    left: -5px;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    border: 0.5px solid #bab3b3;
                    transform: rotate(45deg);
                    top: 5px;
                }
            }
        }
    }
    .dostavka-info {
        position: absolute;
        margin-left: 55px;
        border: 0.5px solid #bab3b3;
        padding: 15px 12px;
        width: 250px;
        display: none;
        p {
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            text-decoration-line: underline;

            color: #333333;
        }
    }
}
.sumsale {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    p {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: red;
        margin-bottom: 0;
    }
    span {
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: red;
    }
}
div.input-group {
    h4 {
        font-size: 16px;
        color: #333;
    }
    input {
        height: 40px;
        width: 100%;
        border-radius: 3px;
        padding-left: 10px;
        border: 1px solid #333;
        &:focus {
            outline: none;
            border: 1px solid #ffc600;
        }
    }
}
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.error-text {
    text-align: center;
    color: red;
    margin-top: 10px;
}
.card-order-img {
    img {
        width: 100%;
        height: 366px;
        object-fit: cover;
    }
}
.color-order {
    border: 1px solid #333;
}
.order {
    .order-top {
        width: 100%;
        height: 50px;
        background: rgba(51, 51, 51, 0.19);
        // opacity: 0.5;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 0;
            color: #333333 !important;
            opacity: 1;
            z-index: 2;
        }
    }
    h1 {
        text-align: center;
        margin-bottom: 40px;
    }
    .orders {
        .card-box {
            .card-order {
                display: flex;
                margin-bottom: 50px;

                .card-order-text {
                    .text {
                        padding-left: 30px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        div.order-col:nth-child(1) {
                            margin-left: 0;
                        }
                        div {
                            .actions {
                                margin-top: 25px;
                                margin-bottom: 0;
                                width: 85%;
                                display: flex;
                                justify-content: flex-end;
                                a,
                                button {
                                    margin-right: 10px;
                                    border: none;
                                    padding: 0 !important;
                                    background: transparent;
                                    svg {
                                        width: 48px;
                                        height: 48px;
                                    }
                                }
                            }
                            // margin-left: 160px;
                            // padding-left: 50px;
                            div {
                                margin-bottom: 50px;
                                span {
                                    padding: 14px 32px;
                                    background: rgba(51, 51, 51, 0.15);
                                    font-weight: normal;
                                    font-size: 16px;
                                    line-height: 20px;
                                    border-radius: 5px;
                                    color: #333333;
                                    display: inline-block;
                                }
                                .counter {
                                    margin-bottom: 0;
                                    background: #ffffff;
                                    display: inline-flex;
                                    border-radius: 5px;
                                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                                    padding: 10px 0px;
                                    input,
                                    input:disabled {
                                        appearance: none !important;
                                        width: 50px;
                                        text-align: center;
                                        border: none;
                                        background-color: #fff;
                                        border-right: 1px solid
                                            rgba(51, 51, 51, 0.3);
                                        border-left: 1px solid
                                            rgba(51, 51, 51, 0.3);
                                        height: 28px;
                                        &:focus {
                                            outline: none;
                                        }
                                    }
                                    input::-webkit-inner-spin-button {
                                        -webkit-appearance: none;
                                    }

                                    button {
                                        border: 0;
                                        background: transparent;
                                        padding: 0px 15px;
                                    }
                                }
                            }
                        }
                    }

                    .sum {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 520px;
                        margin-left: 50px;
                        border-top: 1px solid rgba(51, 51, 51, 0.3);
                        padding-top: 10px;
                        p {
                            font-weight: 600;
                            font-size: 24px;
                            line-height: 29px;
                            color: #333333;
                            margin-bottom: 0;
                        }
                        span {
                            font-weight: normal;
                            font-size: 24px;
                            line-height: 29px;
                            color: #333333;
                        }
                    }
                }
            }
        }
    }
    .line {
        width: 100%;
        height: 1px;
        background: rgba(51, 51, 51, 0.3);
        margin-bottom: 10px;
    }
    .oplata {
        max-width: 714px;
        margin: 0 auto;
        .button {
            width: 100%;
            display: flex;
            button {
                background: #ffc600;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                color: #333333;
                padding: 15px 100px;
                border: 0;
                margin: 45px auto;
            }
        }

        h2 {
            margin-top: 50px;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
            font-feature-settings: "pnum" on, "lnum" on;
            color: #333333;
            text-align: center;
        }
        button {
            font-size: 18px;
            border: none;
            background: transparent;
            line-height: 22px;
            color: #ffc600;
            &:active {
                background: transparent;
                color: #ffc600;
            }
            &:focus {
                box-shadow: none !important;
            }
        }
        .sum {
            width: 520px;
            display: flex;
            justify-content: space-between;
            p {
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                color: #333333;
                span {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    color: #333333;
                }
            }
            span {
                font-size: 24px;
                line-height: 29px;
                color: #333333;
            }
        }
        .plata {
            .money {
                margin: 30px auto;
                margin-bottom: 0;
                display: flex;
                justify-content: center;
                button {
                    border-radius: 3px;
                    width: 100px;
                    margin: 0px 5px;
                    overflow: hidden;
                    background: #fff;
                    position: relative;
                    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.3));
                    img {
                        width: 100%;
                    }

                    span.checkmark {
                        position: absolute;
                        top: -2px;
                        right: 0px;
                        display: none;
                    }
                    span.select-mark {
                        display: block;
                    }
                }

                button.select {
                    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.7));
                }
            }
        }
        .form {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 40px;
            div {
                width: calc((100% - 30px) / 2);
                margin-bottom: 15px;
                p {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 29px;
                    color: #333333;
                    margin-bottom: 5px;
                }
                input {
                    font-size: 16px;
                    line-height: 20px;
                    color: #333;

                    height: 40px;
                    width: 100%;
                    border: 1px solid rgba(51, 51, 51, 0.3);
                    box-sizing: border-box;
                    padding: 10px 15px;
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}

@media (max-width: 950px) {
    .text {
        div {
            div {
                margin-bottom: 20px !important;

                span {
                    padding: 14px 22px !important;
                }
            }
        }
    }
    .sum {
        width: 90% !important;
    }
}
@media (max-width: 576px) {
    .success {
        width: 100% !important;
        top: 39px;
        h3 {
            font-size: 14px;
        }
    }
    .order-top {
        p {
            font-size: 12px !important;
        }
    }
    aside.hover-svg:hover {
        .dostavka-info {
            right: 17px;
            top: 31px;
        }
    }
    .form {
        div {
            width: 100% !important;
            margin-right: 0 !important;
            input {
                width: 100% !important;
            }
        }
    }
    .plata {
        .money {
            justify-content: space-between !important;
        }
    }
    .actions {
        width: 100% !important;
    }
    .card-order-img {
        margin-bottom: 20px;
        width: 100%;
        img {
            width: 100%;
            height: 366px;
            object-fit: cover;
        }
    }
    .card-order {
        margin-bottom: 0 !important;
        flex-direction: column;
        align-items: center;
    }
    .oplata {
        width: auto !important;
        .money {
            img {
                width: 85px;
            }
        }
    }
    .text {
        padding-left: 0px !important;
        div {
            div {
                margin-bottom: 20px !important;
                span {
                    // width: calc(100% - 20px) !important;
                    padding: 14px 13px !important;
                    font-size: 14px !important;
                }
            }
        }
    }
    .order {
        .text {
            div.col-md-4 {
                padding: 0 !important;
            }
        }
    }
    .sum {
        border: 0 !important;
        width: 100% !important;
        margin-left: 0 !important;
        div {
            display: none !important;
        }
    }
}
</style>
