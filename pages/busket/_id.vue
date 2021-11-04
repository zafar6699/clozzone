<template>
    <div class="busket-id">
        <div :class="isAddModal ? 'modal-media-add' : 'none'">
            <div>
                <img :src="$store.state.uploads + basketView.image" alt="" />
                <p>Добавлено !</p>
            </div>
            <div>
                <button>Прейти в корзину</button>
            </div>
        </div>
        <div :class="isCor ? 'modal-card show' : 'modal-card'">
            <div class="modal-window">
                <div class="head-modal">
                    <div class="mycor">
                        <span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 13.1003 0.988061 15.07 1.86572M21 3.00572L11 13.0157L8.00001 10.0157"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <p>{{ $t("add") }}</p>
                    </div>
                    <button @click="isCor = !isCor">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.8 12.2L12.2 21.8M12.2 12.2L21.8 21.8M33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div class="pro-modal">
                    <div class="line-modal"></div>
                    <div class="content-modal">
                        <div class="left">
                            <img
                                :src="$store.state.uploads + basketView.image"
                                alt=""
                            />
                        </div>
                        <div class="right">
                            <p class="summa">
                                {{ regex(basketView.price) }} {{ $t("sum") }}
                            </p>
                            <p class="name">{{ basketView.name }}</p>
                            <div class="aside">
                                <div class="box-items">
                                    <div class="item">
                                        <h3 class="key">
                                            {{ basketView.brand }}
                                        </h3>
                                        <h3 class="value"></h3>
                                    </div>
                                    <div class="item">
                                        <h3 class="key">{{ $t("size") }}</h3>
                                        <h3 class="value">
                                            <p class="size">
                                                {{ basketView.size }}
                                            </p>
                                        </h3>
                                    </div>
                                    <div class="item">
                                        <h3 class="key">{{ $t("color") }}</h3>
                                        <h3 class="value">
                                            <div
                                                class="color"
                                                :style="
                                                    'background-color:' +
                                                        basketView.color
                                                "
                                            ></div>
                                        </h3>
                                    </div>
                                </div>
                                <!-- <div>
                                    <p>brand</p>
                                    <p>razmer</p>
                                    <p>svet</p>
                                </div>
                                <div>
                                    <p>ajshvjas wdasdasf asd</p>
                                    <p class="size">s</p>
                                    <div class="color"></div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="line-modal"></div>
                    <div class="buttons">
                        <div>
                            <button @click="closeBus" class="naz">
                                {{ $t("back") }}
                            </button>
                            <button @click="busket" class="cor">
                                {{ $t("cor") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="category-top" v-if="resultCategory != null">
            <ul>
                <li v-for="(item, index) in resultCategory" :key="index">
                    <nuxt-link
                        :to="{
                            name: 'filter___' + $i18n.locale,
                            query: {
                                category: item._id
                            }
                        }"
                        >{{ item.name[$i18n.locale] }} /</nuxt-link
                    >
                </li>
            </ul>
        </div>

        <div class="productby-id carousel-product" v-if="product != null">
            <div class="container-z">
                <div class="row">
                    <div class="col-md-6 col-lg-4 ">
                        <div class="image-view">
                            <img :src="$store.state.uploads + bigImg" alt="" />
                        </div>

                        <div class="carousel-img">
                            <VueSlickCarousel v-bind="settings">
                                <div
                                    class="item-img "
                                    v-for="(item, i) in images"
                                    :key="i"
                                    @click="clickImg2(item, i)"
                                >
                                    <div
                                        :class="
                                            imgIndex == i ? 'select-img' : ''
                                        "
                                    >
                                        <img
                                            :src="
                                                $store.state.uploads +
                                                    item.image
                                            "
                                        />
                                    </div>
                                </div>
                            </VueSlickCarousel>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 product-center">
                        <div class="product-name">
                            <h1>{{ product.name[$i18n.locale] }}</h1>
                        </div>
                        <p class="desc">
                            {{ product.description[$i18n.locale] }}
                        </p>
                        <div class="prices">
                            <div v-if="product.discount == null">
                                <h2 class="price-sale">
                                    {{ regex(product.price) }} {{ $t("sum") }}
                                </h2>
                            </div>

                            <div v-else>
                                <h2 class="price-sale">
                                    {{ product.discount }} {{ $t("sum") }}
                                </h2>
                                <h2 class="price-old">
                                    {{ product.price }} {{ $t("sum") }}
                                </h2>
                            </div>
                        </div>

                        <div class="box-items">
                            <div class="item">
                                <h3 class="key">{{ $t("brand") }}</h3>
                                <h3 class="value">{{ product.brand.name }}</h3>
                            </div>
                            <div class="item">
                                <h3 class="key">{{ $t("article") }}</h3>
                                <h3 class="value">{{ product.code }}</h3>
                            </div>
                            <div class="item">
                                <h3 class="key">{{ $t("sostav") }}</h3>
                                <h3 class="value">
                                    {{ product.composition[$i18n.locale] }}
                                </h3>
                            </div>
                            <div class="item">
                                <h3 class="key">{{ $t("color") }}</h3>
                                <div class="color-box">
                                    <button
                                        v-for="(item, index) in product.param"
                                        :key="index"
                                        :style="
                                            'background-color:' +
                                                item.color.code
                                        "
                                        :class="
                                            colorIndex == index
                                                ? 'item-color select-color'
                                                : 'item-color'
                                        "
                                        @click="clickColor(item, index)"
                                    ></button>
                                </div>
                            </div>
                            <!-- <pre>  {{ selectSize }} </pre> -->
                            <div class="item align-items-center">
                                <h3 class="key">{{ $t("size") }}</h3>
                                <select
                                    v-model="selectSize"
                                    @change="changeSize"
                                >
                                    <option
                                        v-for="(item, index) in sizes"
                                        :key="index"
                                        return-object
                                        :value="item"
                                    >
                                        {{ item.size.size }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="count">
                            <div class="count-box">
                                <button class="first" @click="clickMinus">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="2"
                                        viewBox="0 0 8 2"
                                        fill="none"
                                    >
                                        <path
                                            d="M8 0H0V2H8V0Z"
                                            fill="#333333"
                                        />
                                    </svg>
                                </button>

                                <b> {{ basket.count }} </b>

                                <button class="last" @click="clickPlus">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M8 3H0V4.99999H8V3Z"
                                            fill="#333333"
                                        />
                                        <path
                                            d="M5 8L5 0L2.99999 0L2.99999 8H5Z"
                                            fill="#333333"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="action-buttons">
                            <button class="media-btn-show" @click="clickBasket">
                                <span>
                                    <svg
                                        width="46"
                                        height="46"
                                        viewBox="0 0 46 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M34.6616 17.6672C34.4564 17.3179 34.1625 17.0269 33.8086 16.8224C33.4548 16.6179 33.053 16.5071 32.6425 16.5006H17.4397L16.7509 13.864C16.6813 13.6095 16.526 13.3856 16.3103 13.2288C16.0946 13.0721 15.8313 12.9917 15.5631 13.0007H13.1877C12.8727 13.0007 12.5706 13.1236 12.3479 13.3424C12.1251 13.5612 12 13.8579 12 14.1673C12 14.4767 12.1251 14.7735 12.3479 14.9922C12.5706 15.211 12.8727 15.3339 13.1877 15.3339H14.6605L17.9386 27.3035C18.0082 27.5581 18.1635 27.7819 18.3791 27.9387C18.5948 28.0955 18.8582 28.1759 19.1263 28.1669H29.8157C30.0351 28.1662 30.2499 28.1059 30.4365 27.9927C30.6231 27.8794 30.7741 27.7176 30.8728 27.5252L34.7685 19.8721C34.9374 19.5245 35.016 19.1412 34.9973 18.7565C34.9787 18.3717 34.8633 17.9975 34.6616 17.6672Z"
                                            fill="#333333"
                                        />
                                        <path
                                            d="M18.5324 34C19.5164 34 20.314 33.2165 20.314 32.2501C20.314 31.2836 19.5164 30.5001 18.5324 30.5001C17.5485 30.5001 16.7509 31.2836 16.7509 32.2501C16.7509 33.2165 17.5485 34 18.5324 34Z"
                                            fill="#333333"
                                        />
                                        <path
                                            d="M30.4096 34C31.3935 34 32.1912 33.2165 32.1912 32.2501C32.1912 31.2836 31.3935 30.5001 30.4096 30.5001C29.4257 30.5001 28.628 31.2836 28.628 32.2501C28.628 33.2165 29.4257 34 30.4096 34Z"
                                            fill="#333333"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="45"
                                            height="45"
                                            rx="2.5"
                                            stroke="#333333"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <button @click="clickBasket" class="media-btn-hide">
                                {{ $t("cor") }}
                            </button>
                            <button class="buy" @click="orderOne">
                                {{ $t("buy") }}
                            </button>
                        </div>

                        <transition name="slide-fade">
                            <div class="add-mobile" v-if="addMobile">
                                <div class="mobile-left">
                                    <div class="img">
                                        <img
                                            src="@/assets/img/humo.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4>{{ $t("add") }}!</h4>
                                </div>

                                <div class="mobile-right">
                                    <button>{{ $t("prey") }}</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="col-md-4">
                        <div class="product-right">
                            <div class="right-item">
                                <div class="item-top">
                                    <nuxt-link
                                        :to="{
                                            name: `brandsize___${$i18n.locale}`,
                                            query: { brand: product.brand._id }
                                        }"
                                    >
                                        <div>
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0)">
                                                        <path
                                                            d="M19.9906 2.95635V8.71678C19.9906 8.93216 19.816 9.10677 19.6006 9.10677C19.3852 9.10677 19.2106 9.28138 19.2106 9.49676V20.3575C19.2106 20.5745 19.0347 20.7504 18.8177 20.7504H4.75845C4.54145 20.7504 4.36551 20.5745 4.36551 20.3575V9.49676C4.36551 9.28138 4.1909 9.10677 3.97552 9.10677H0.392935C0.175937 9.10677 0 8.93083 0 8.71383V2.35024C0 2.14837 0.152754 1.97941 0.353642 1.95927L7.75311 1.21957C7.98435 1.19605 8.18533 1.37773 8.18533 1.61054C8.18533 3.59683 9.80128 5.21327 11.7881 5.21327C13.7748 5.21327 15.3908 3.59683 15.3908 1.61054C15.3908 1.37729 15.5924 1.196 15.823 1.21957L19.0972 1.54679C19.2108 1.55814 19.3017 1.65131 19.3031 1.76541C19.3081 2.17652 19.5285 2.55472 19.8767 2.76219C19.9459 2.80345 19.9906 2.8758 19.9906 2.95635ZM22.9774 2.1163C22.8857 2.39804 22.6929 2.62663 22.4551 2.76597C22.3881 2.80526 22.3482 2.8782 22.3482 2.95586V8.71678C22.3482 8.93216 22.5228 9.10677 22.7381 9.10677H23.1831C23.4001 9.10677 23.5761 8.93083 23.5761 8.71383V2.35024C23.5761 1.97337 23.0753 1.81546 22.9774 2.1163ZM2.2918 21.9538C2.13806 21.8005 1.88953 21.8005 1.73579 21.9538L1.04816 22.6414C0.89491 22.7952 0.89491 23.0437 1.04816 23.1974L1.73579 23.8851C1.81291 23.9617 1.9131 24 2.01379 24C2.36213 24 2.539 23.5771 2.2918 23.3291L1.88167 22.9194L2.2918 22.5098C2.44504 22.3561 2.44504 22.1075 2.2918 21.9538ZM20.7765 2.01134V17.8604C20.7765 18.0775 20.9523 18.2533 21.1694 18.2533C21.3865 18.2533 21.5623 18.0775 21.5623 17.8604V2.01134C21.7479 2.19685 21.9909 2.17126 22.135 2.02804C22.2883 1.8743 22.2883 1.62577 22.135 1.47203C21.3811 0.718138 21.401 0.7286 21.3059 0.694022C21.2263 0.661212 21.1107 0.661949 21.0328 0.694022C20.9292 0.731744 20.9389 0.736901 20.2038 1.47203C20.0505 1.62577 20.0505 1.8743 20.2038 2.02804C20.3458 2.16964 20.5894 2.19828 20.7765 2.01134ZM20.8914 20.5942C21.0456 20.7475 21.2931 20.7475 21.4474 20.5942L22.135 19.9066C22.2883 19.7529 22.2883 19.5043 22.135 19.3506C21.9813 19.1973 21.7328 19.1973 21.579 19.3506L21.1694 19.7607L20.7598 19.3506C20.606 19.1973 20.3575 19.1973 20.2038 19.3506C20.0505 19.5043 20.0505 19.7529 20.2038 19.9066L20.8914 20.5942ZM23.1321 22.8816C23.1179 22.7035 23.0546 22.6768 22.3315 21.9538C22.1778 21.8005 21.9292 21.8005 21.7755 21.9538C21.6311 22.0987 21.6081 22.3423 21.7922 22.5265H3.782C3.56491 22.5265 3.38907 22.7023 3.38907 22.9194C3.38907 23.1365 3.56491 23.3124 3.782 23.3124H21.7922C21.6037 23.5008 21.6352 23.7443 21.7755 23.8851C21.9297 24.0383 22.1772 24.0384 22.3315 23.8851C23.0626 23.154 23.0609 23.1612 23.0864 23.1066C23.126 23.0353 23.1401 22.951 23.1321 22.8816Z"
                                                            fill="#333333"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect
                                                                width="24"
                                                                height="24"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <b class="line">
                                                {{ $t("tablesize") }}
                                            </b>
                                        </div>

                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="10"
                                                    cy="10"
                                                    r="10"
                                                    transform="rotate(-90 10 10)"
                                                    fill="#FFC600"
                                                />
                                                <path
                                                    d="M8 15L13 10L8 5"
                                                    stroke="#495057"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </nuxt-link>
                                </div>
                            </div>

                            <div class="right-item">
                                <div class="item-top">
                                    <div>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M16 3H1V16H16V3Z"
                                                    stroke="#333333"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M16 8H20L23 11V16H16V8Z"
                                                    stroke="#333333"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                                                    stroke="#333333"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                                                    stroke="#333333"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <b class="line">
                                            {{ $t("time") }}
                                        </b>
                                    </div>
                                </div>

                                <p>
                                    {{ $t("den") }}
                                </p>
                            </div>

                            <div class="right-item">
                                <div class="item-top">
                                    <div>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="32"
                                                viewBox="0 0 24 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12.7039 18.5681C12.5636 18.5663 12.4237 18.579 12.2873 18.6054V15.0406C13.0411 15.2789 13.8292 15.3996 14.6392 15.3996C18.669 15.3996 21.9476 12.3588 21.9476 8.62113C21.9476 4.88344 18.6691 1.84269 14.6392 1.84269C10.6094 1.84269 7.33082 4.8835 7.33082 8.62119C7.33082 9.90712 7.72024 11.1528 8.45644 12.2342V16.1436C8.16162 15.9968 7.8288 15.9241 7.48365 15.9359C6.57157 15.966 5.81193 16.6198 5.66375 17.4479C5.36253 17.2922 5.02048 17.2154 4.66481 17.2269C3.92633 17.2512 3.28771 17.6844 2.99276 18.2882C2.65819 18.076 2.26094 17.9682 1.84598 17.9823C0.82811 18.0159 0 18.8264 0 19.789L0.000134698 23.7862C0.000134698 24.0455 0.193853 23.5 0.473304 23.5C1.07818 23.5 1.01214 26.5 1.01201 21.5693V19.789C1.01201 19.3259 1.40231 18.9362 1.88196 18.9203C2.39504 18.9037 2.81877 19.2824 2.81877 19.7576C2.81877 20.0169 3.04532 20.2269 3.32477 20.2269C3.60422 20.2269 3.83077 20.0168 3.83077 19.7576V19.0336C3.83077 18.5704 4.22101 18.1807 4.70073 18.1649C4.94898 18.1562 5.18349 18.2399 5.36138 18.3993C5.53949 18.5587 5.63753 18.7728 5.63753 19.0023C5.63753 19.2615 5.86409 19.4716 6.14354 19.4716C6.42299 19.4716 6.64954 19.2614 6.64954 19.0023V17.7426C6.64954 17.2794 7.03977 16.8897 7.5195 16.8739C8.03507 16.8579 8.4563 17.2377 8.4563 17.7112C8.4563 17.9704 8.68285 18.1805 8.96231 18.1805C9.24176 18.1805 9.46831 17.9704 9.46831 17.7112C9.46831 16.9722 9.46831 13.1261 9.46831 11.3772C9.46831 10.9042 9.88893 10.5237 10.4051 10.5399C10.8848 10.5557 11.2751 10.9454 11.2751 11.4086V18.7784C11.2751 19.3293 11.8521 19.7061 12.4102 19.5445C12.5004 19.5183 12.5952 19.5063 12.691 19.5067C13.1743 19.5123 13.5827 19.9105 13.5827 20.3762V24.1902C13.5827 25.215 13.2177 26.231 12.5551 27.0511C12.054 27.6909 11.7603 27.9764 11.4205 28.5693H2.64255C2.6381 28.5593 2.63379 28.5491 2.62928 28.5392L1.42852 25.9067C0.938893 24.8479 1.02124 23.8853 1.01214 23.7862C1.01214 23.527 0.785589 23.3169 0.506138 23.3169C0.226687 23.3169 0.000134698 23.5271 0.000134698 23.7862C0.0144206 23.9374 -0.0968341 24.9893 0.497513 26.2746L1.62691 28.7507C1.22016 28.9753 0.94617 29.3861 0.94617 29.8561V30.7131C0.94617 31.4227 1.56862 32 2.33372 32H11.5359C12.301 32 12.9235 31.4227 12.9235 30.7131V29.8561C12.9235 29.4526 12.7219 29.0923 12.4075 28.8561C12.6573 28.4566 12.8172 28.3053 13.3653 27.614C14.1583 26.6326 14.5951 25.4166 14.5951 24.1901V20.3762C14.595 19.408 13.729 18.58 12.7039 18.5681ZM10.4413 9.60181C9.67781 9.57694 9.01985 9.96344 8.68744 10.5294C8.46041 9.92025 8.34289 9.27681 8.34289 8.62119C8.34289 5.40106 11.1674 2.78137 14.6392 2.78137C18.111 2.78137 20.9355 5.40106 20.9355 8.62119C20.9355 11.8412 18.111 14.4609 14.6392 14.4609C13.8234 14.4609 13.0338 14.3191 12.2873 14.0394V11.6409C12.3237 11.6903 12.3707 11.7341 12.428 11.7688C13.0746 12.161 13.5124 12.2723 14.0878 12.2987V12.7822C14.0878 13.0414 14.3143 13.2515 14.5938 13.2515C14.8732 13.2515 15.0998 13.0414 15.0998 12.7822V12.2499C16.1813 12.0299 16.8137 11.1927 16.9556 10.4096C17.1412 9.38556 16.5637 8.49519 15.4845 8.14137C15.358 8.09994 15.2289 8.05675 15.0998 8.01188V5.86088C15.429 5.946 15.6242 6.09931 15.6426 6.11419C15.8482 6.28681 16.1658 6.27381 16.3542 6.08444C16.5437 5.89387 16.5307 5.59694 16.3253 5.42125C16.2977 5.39769 15.8443 5.01925 15.0998 4.90069V4.46019C15.0998 4.20094 14.8733 3.99088 14.5938 3.99088C14.3144 3.99088 14.0878 4.201 14.0878 4.46019V4.92006C14.0031 4.93638 13.9165 4.95644 13.8281 4.98112C13.1168 5.17987 12.5854 5.74431 12.4411 6.45425C12.2034 7.62406 12.9264 8.17069 14.0879 8.64444V11.3593C13.6723 11.3354 13.4213 11.2497 12.9821 10.9832C12.7481 10.8414 12.4347 10.9021 12.2816 11.1191C12.276 11.1271 12.2713 11.1353 12.2663 11.1434C12.1311 10.3013 11.3642 9.63225 10.4413 9.60181ZM15.0998 9.01062C15.7865 9.23769 16.0586 9.69694 15.9576 10.254C15.885 10.6545 15.5937 11.0793 15.0998 11.2674V9.01062ZM14.0878 7.60288C13.6154 7.36894 13.3238 7.17812 13.4355 6.628C13.492 6.35012 13.6933 6.01513 14.0878 5.89025V7.60288ZM11.9114 30.7131C11.9114 30.9051 11.7429 31.0613 11.5359 31.0613H2.33372C2.12664 31.0613 1.95824 30.9051 1.95824 30.7131V29.8561C1.95824 29.6634 2.12738 29.5079 2.33372 29.5079H11.5359C11.7399 29.5079 11.9114 29.662 11.9114 29.8561V30.7131Z"
                                                    fill="#333333"
                                                />
                                                <path
                                                    d="M14.7048 0C9.57941 0 5.40968 3.86744 5.40968 8.62119C5.40968 10.2577 5.90652 11.8504 6.84642 13.2269C6.99588 13.4458 7.30849 13.5111 7.54461 13.3722C7.78073 13.2336 7.85088 12.9436 7.70135 12.7247C6.86421 11.4986 6.42169 10.0797 6.42169 8.62125C6.42169 4.38506 10.1375 0.938688 14.7048 0.938688C19.2722 0.938688 22.988 4.38506 22.988 8.62125C22.988 12.8574 19.2722 16.3038 14.7048 16.3038C14.5271 16.3038 14.3471 16.2985 14.1697 16.288C13.8892 16.2706 13.6503 16.4678 13.6324 16.7264C13.6146 16.9851 13.8262 17.2082 14.1051 17.2247C14.3039 17.2365 14.5056 17.2425 14.7048 17.2425C19.8302 17.2425 24 13.3751 24 8.62131C24 3.86756 19.8302 0 14.7048 0Z"
                                                    fill="#333333"
                                                />
                                            </svg>
                                        </span>
                                        <b class="line">
                                            {{ $t("oplata") }}
                                        </b>
                                    </div>
                                </div>

                                <p>
                                    {{ $t("long") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="similar-products" v-if="similar != null">
            <div class="container-zz">
                <div class="title-z">
                    <h1>{{ $t("tovari") }}</h1>
                </div>
                <div class="rwo">
                    <VueSlickCarousel v-bind="settings2">
                        <div v-for="(item, index) in similar" :key="index">
                            <ProductCard
                                :product="item"
                                :image="item.param[0].image"
                                type="carousel"
                            />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import slick-carousel
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    data() {
        return {
            tag: "",
            isAddModal: false,
            addMobile: false,
            settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            initialSlide: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            },
            settings2: {
                dots: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                draggable: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: false,
                            slidesToScroll: 1,
                            dots: false,
                            draggable: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            infinite: true,
                            centerMode: true,
                            centerPadding: "92px",
                            dots: false,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            slidesToScroll: 1,
                            rtl: true,
                            draggable: true
                        }
                    },
                    {
                        breakpoint: 340,
                        settings: {
                            slidesToShow: 1,
                            infinite: true,
                            centerMode: true,
                            centerPadding: "92px",
                            dots: false,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            slidesToScroll: 1,
                            rtl: true,
                            draggable: true
                        }
                    }
                ]
            },

            imgIndex: 0,
            colorIndex: 0,

            bigImg: null,
            isCor: false,

            basket: {
                product: "",
                color: "",
                count: 1,
                image: "",
                param: "",
                size: ""
            },

            oneProduct: {
                color: "",
                count: "",
                image: "",
                ss: "",
                param: {
                    _id: "",
                    size: {
                        num: "",
                        size: {
                            size: "",
                            _id: ""
                        }
                    }
                },
                product: {
                    name: {},
                    price: "",
                    discount: "",
                    _id: "",
                    brand: {},
                    category: {}
                }
            },

            basketView: {
                color: "",
                image: "",
                brand: "",
                size: "",
                name: "",
                price: ""
            },

            //product
            product: null,

            //images
            images: null,

            //sizes
            sizes: null,
            selectSize: null,

            //similar
            similar: null,

            catId: "",
            catList: [],
            resultCategory: null,
            category: null
        };
    },
    head() {
        return {
            title: this.tag,
            meta: [
                {
                    hid: this.tag,
                    name: this.tag,
                    content: this.tag
                }
            ]
        };
    },
    components: { VueSlickCarousel },

    async mounted() {
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();
        // });
        //get product
        let product = await this.$axios.$get(
            "/product/" + this.$route.params.id
        );
        this.product = product.data[0];
        this.images = this.product.param[0].images;
        this.bigImg = this.images[0].image;
        this.sizes = this.product.param[0].sizes;

        this.selectSize = this.product.param[0].sizes[0];

        this.basket.color = this.product.param[0].color.code;
        this.basket.product = this.$route.params.id;
        this.basket.image = this.images[0].image;
        this.basket.param = this.product.param[0]._id;
        this.basket.size = this.selectSize.size._id;

        this.basketView.size = this.selectSize.size.size;

        this.oneProduct.param.size.num = this.product.param[0].sizes[0].num;

        this.tag = this.product.name[this.$i18n.locale];
        //get similar
        let similar = await this.$axios.$post("/product/filter", {
            page: 1,
            limit: 4,
            category: [this.product.category._id],
            product: this.product._id
        });

        this.similar = similar.data;

        //get all category
        let category = await this.$store.state.category;

        this.category = category;

        // get parent category
        this.catId = this.product.category._id;
        this.getCat(this.category, this.catId);

        //get basket
        // let basket = await this.$axios.$get("/like/me");

        console.log("rt", this.product);

        // this.$nuxt.$loading.finish();
    },
    computed: {
        local() {
            return this.$store.state.local;
        },
        sbasket() {
            return this.$store.state.basket;
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
        closeBus() {
            this.isCor = false;
        },
        busket() {
            this.isCor = false;
            this.$store.commit("CHANGE_MENU");
        },
        clickImg2(item, index) {
            this.imgIndex = index;
            this.bigImg = item.image;
        },
        getCat(categories, id) {
            for (let cat of categories) {
                if (cat._id == id) {
                    this.catList.push(cat);

                    if (cat.parentId != undefined) {
                        this.catId = cat.parentId;
                        this.getCat(this.category, this.catId);
                    } else {
                        this.resultCategory = this.catList.slice().reverse();
                    }
                }

                if (cat.children.length > 0 && stop) {
                    this.getCat(cat.children, this.catId);
                }
            }
        },

        clickColor(item, index) {
            this.colorIndex = index;

            //change images
            this.images = item.images;
            this.imgIndex = 0;
            this.bigImg = item.images[0].image;

            //change sizes

            let sizeValue = this.selectSize.size.size;

            this.sizes = item.sizes;

            let find = this.sizes.find(item => item.size.size == sizeValue);

            if (find) {
                this.selectSize = find;
            } else {
                this.selectSize = item.sizes[0];
            }

            // change basket
            this.basket.color = item.color.code;
            this.basket.image = item.images[0].image;
            this.basket.param = item._id;
            this.basket.size = this.selectSize.size._id;
        },
        clickPlus() {
            if (parseInt(this.selectSize.num) > this.basket.count) {
                this.basket.count = this.basket.count + 1;
            }
        },
        clickMinus() {
            if (this.basket.count > 1) {
                this.basket.count = this.basket.count - 1;
            }
        },

        changeSize() {
            this.basket.size = this.selectSize.size._id;
            this.basketView.size = this.selectSize.size.size;
            this.oneProduct.param.size.num = this.selectSize.num;
        },

        async clickBasket() {
            let isBasket = true;
            this.isAddModal = false;

            let basket = this.$store.state.basket;
            console.log("2222");
            if (this.$auth.loggedIn) {
                console.log(basket);
                console.log(this.basket);

                basket.forEach(item => {
                    let color = item.color;
                    let size = item.size;

                    if (
                        this.basket.color == color &&
                        this.basket.size == size
                    ) {
                        isBasket = false;
                    }
                });
                if (isBasket) {
                    this.basketView.image = this.basket.image;
                    this.basketView.price = this.product.price;
                    this.basketView.name = this.product.name[this.$i18n.locale];
                    this.basketView.brand = this.product.brand.name;
                    this.basketView.color = this.basket.color;
                    this.isCor = !this.isCor;
                    await this.$axios.$post("/like/create", this.basket);
                    console.log("333333");
                    this.$store.dispatch("getBasket");
                }
            } else {
                console.log(this.$store.state.basket);

                if (this.$store.state.basket.length > 0) {
                    this.$store.state.basket.forEach(item => {
                        let color = item.color;
                        let size = item.param.size.size._id;

                        if (
                            this.basket.color == color &&
                            this.basket.size == size
                        ) {
                            isBasket = false;
                        }
                    });
                }

                if (isBasket) {
                    this.basketView.image = this.basket.image;
                    this.basketView.price = this.product.price;
                    this.basketView.name = this.product.name[this.$i18n.locale];
                    this.basketView.brand = this.product.brand.name;
                    this.basketView.color = this.basket.color;
                    this.isCor = !this.isCor;

                    this.$store.commit("change_local", this.basket);

                    this.oneProduct.color = this.basket.color;
                    this.oneProduct.count = this.basket.count;
                    this.oneProduct.image = this.basket.image;
                    this.oneProduct.param._id = this.basket.param;
                    this.oneProduct.param.size.num = this.selectSize.num;
                    this.oneProduct.param.size.size.size = this.selectSize.size.size;
                    this.oneProduct.param.size.size._id = this.selectSize.size._id;
                    this.oneProduct.product.name = this.product.name;
                    this.oneProduct.product.price = this.product.price;
                    this.oneProduct.product.discount = this.product.discount;
                    this.oneProduct.product._id = this.product._id;
                    this.oneProduct.product.brand.name = this.product.name.uz;
                    this.oneProduct.product.category = this.product.category;

                    let a = [];

                    for (let i = 0; i < this.$store.state.basket.length; i++) {
                        a.push(this.$store.state.basket[i]);
                    }
                    console.log("onee", this.oneProduct);
                    a.push(this.oneProduct);
                    console.log("aa", a);
                    this.$store.commit("GET_BASKET", a);

                    this.$router.go();
                }
            }
        },
        orderOne() {
            if (this.$auth.loggedIn) {
                this.oneProduct.color = this.basket.color;
                this.oneProduct.count = this.basket.count;
                this.oneProduct.image = this.basket.image;
                this.oneProduct.param._id = this.basket.param;
                this.oneProduct.param.size.num = this.selectSize.num;
                this.oneProduct.param.size.size.size = this.selectSize.size.size;
                this.oneProduct.param.size.size._id = this.selectSize.size._id;
                this.oneProduct.product.name = this.product.name;
                this.oneProduct.product.price = this.product.price;
                this.oneProduct.product.discount = this.product.discount;
                this.oneProduct.product._id = this.product._id;
                this.oneProduct.product.brand.name = this.product.name.uz;
                this.oneProduct.product.category = this.product.category;

                console.log(this.oneProduct);

                this.$store.commit("one_product", this.oneProduct);

                this.$router.push({
                    name: `order___${this.$i18n.locale}`,
                    query: { product: "one" }
                });
            } else {
                alert("Ro'yxatdan o'ting");
            }
        }
    }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
div.add-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffc600;
    margin: 15px 0px;
    padding: 7px 20px;
    border-radius: 3px;
    div.mobile-left {
        display: flex;
        align-items: center;
        div.img {
            width: 46px;
            height: 46px;
            border-radius: 100%;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }

        h4 {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            /* identical to box height */

            color: #333333;
            margin-bottom: 0px;
            margin-left: 10px;
        }
    }

    button {
        background: #333333;
        border-radius: 3px;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
        padding: 8px 15px;
        color: #ffffff;
        border: none;
    }
}
.busket-id {
    div.similar-products .slick-slide {
        padding: 0px 12px;
    }

    .none {
        display: none;
    }
    .modal-media-add {
        display: block;
        background: #ffc600;
        border-radius: 3px;
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:first-child {
            display: flex;
            align-items: center;
            img {
                width: 55px;
                height: 55px;
                border-radius: 50%;
            }
            p {
                margin-bottom: 0 !important;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                color: #333333;
            }
        }
        div {
            button {
                padding: 8px 18px;
                background: #333333;
                border-radius: 3px;
                font-size: 12px;
                line-height: 15px;
                color: #ffffff;
            }
        }
    }
    .show {
        right: 0 !important;
    }
    .modal-card {
        p {
            margin-bottom: 0;
        }
        div.box-items {
            margin-top: 10px;
            div.item {
                display: flex;
                margin-bottom: 8px;
                h3.key {
                    width: 90px;
                    margin-right: 10px;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 22px;
                    color: #ffffff;
                }
                h3.value {
                    width: calc(100% - 100px);
                    font-size: 18px;
                    line-height: 22px;
                    color: #ffffff;
                }
            }
        }
        // overflow: ;
        // overflow-y: scroll;
        top: 90px;
        z-index: 13;
        position: fixed;
        right: -600px;
        transition: 0.5s;
        width: 450px;
        background: rgba(51, 51, 51, 0.7);
        backdrop-filter: blur(44px);
        color: #ffffff;
        p.mycor {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
        }
        .modal-window {
            padding: 30px 30px 50px 30px;
        }
        .head-modal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                display: flex;
                p {
                    margin-left: 15px;
                    margin-bottom: 0;
                }
            }

            button {
                border: 0;
                background: transparent;
                &:hover {
                    svg {
                        path {
                            stroke: #ffc600;
                        }
                    }
                }
            }
        }

        .buttons {
            margin-top: 30px;
            button {
                padding: 8px 20px;
                border: 0;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                color: #333333;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
            }
            .naz {
                background: #ffffff;
            }
            .cor {
                background: #ffc600;
            }
        }

        .line-modal {
            background: #ffffff;
            height: 2px;
            border-radius: 1px;
            margin-top: 10px;
        }
        .content-modal {
            margin-top: 20px;
            display: flex;
            .left {
                width: 40%;
                margin-right: 20px;
                img {
                    width: 100%;
                }
            }
            .right {
                p.summa {
                    margin-top: 0;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 180%;
                    letter-spacing: 0.5px;
                    color: #ffffff;
                }
                p.name {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 24px;
                    color: #ffffff;
                }
                .aside {
                    display: flex;
                    p.size {
                        background: #ffffff;
                        border-radius: 3px;
                        text-align: center;
                        color: #333333 !important;
                        display: inline-block;
                    }
                    div.color {
                        width: 40px;
                        height: 22px;
                        border-radius: 3px;
                    }
                    div:first-child {
                        margin-right: 30px;
                        p {
                            font-style: normal;
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 22px;
                            color: #ffffff;
                            padding: 0 15px;
                        }
                    }
                }
                .btns {
                    button {
                        border: 0;
                        background: #ffffff;
                        border-radius: 3px;
                    }
                    .buy {
                        padding: 2px 50px;
                    }
                    .edit {
                        padding: 2px 5px;
                    }
                    .delete {
                        padding: 2px 5px;
                    }
                }
            }
        }
    }
    .product-center {
        border-right: 1px solid rgba(51, 51, 51, 0.29);
    }
    div.category-top {
        background: #ececec;
        padding: 14px;
        display: flex;
        justify-content: center;
        ul {
            list-style-type: none;
            margin-bottom: 0px;
            li {
                display: inline-block;
                a {
                    font-weight: 500;

                    font-size: 18px;
                    line-height: 22px;
                    color: #333;
                    display: block;
                }
            }
        }
    }
    div.productby-id {
        margin: 50px 0px;
        .row {
            align-items: flex-start;
        }
        div.image-view {
            width: 100%;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            img {
                max-width: 100%;
                height: 366px;
                pointer-events: none;
                object-fit: cover;
            }
        }

        div.product-name {
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(51, 51, 51, 0.29);
            margin-bottom: 10px;
            h1 {
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                margin-bottom: 0px;
                color: #333333;
            }
        }
        p.desc {
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            color: #333333;
            margin-bottom: 10px;
        }
        div.prices {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
            h2.price-sale {
                font-weight: bold;
                font-size: 18px;
                line-height: 180%;
                margin-bottom: 0px;
                letter-spacing: 0.5px;
                color: #ff0000;
                margin-right: 20px;
            }
            h2.price-old {
                font-weight: normal;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 0.5px;
                text-decoration-line: line-through;
                color: #9098b1;
                margin-bottom: 0px;
            }
            // h2.sale {
            //     font-weight: bold;
            //     font-size: 18px;
            //     line-height: 150%;
            //     margin-bottom: 0px;
            //     letter-spacing: 0.5px;
            //     color: #ffd600;
            // }
        }

        div.box-items {
            div.item {
                display: flex;
                margin-bottom: 8px;
                h3.key {
                    width: 90px;
                    margin-right: 10px;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 0px;
                    color: #000000;
                }
                h3.value {
                    width: calc(100% - 100px);
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 0px;
                    color: #000000;
                }

                div.color-box {
                    display: flex;
                    flex-wrap: wrap;
                    width: calc(100% - 100px);
                    button.item-color {
                        width: 40px;
                        height: 22px;
                        border-radius: 3px;
                        border: 1px solid transparent;
                        margin-right: 7px;
                        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
                        margin-bottom: 7px;
                    }
                    button.select-color {
                        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
                        transform: scaleY(1.2);
                    }
                }

                select {
                    border: 2px solid #f1f3f4;
                    border-radius: 5px;
                    width: 120px;
                    height: 37px;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    padding-left: 8px;
                    color: #333333;
                    &:focus {
                        outline: none;
                        border: 2px solid #8d8d8d;
                    }
                }
            }
        }

        div.count {
            padding: 10px 0px;
            border-top: 1px solid rgba(51, 51, 51, 0.3);
            border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            margin-bottom: 25px;

            div.count-box {
                background: #ffffff;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                padding: 10px 0px;
                border-radius: 5px;
                display: inline-flex;
                align-items: center;
                button {
                    padding: 2px 15px;
                    border: none;
                    background-color: transparent;
                }
                button.first {
                    border-right: 1px solid rgba(51, 51, 51, 0.3);
                }
                button.last {
                    border-left: 1px solid rgba(51, 51, 51, 0.3);
                }
                b {
                    display: block;
                    width: 50px;
                    text-align: center;
                }
            }
        }

        div.action-buttons {
            display: flex;
            justify-content: space-between;
            .media-btn-show {
                display: none;
            }
            button {
                width: calc((100% - 10px) / 2);
                display: flex;
                font-weight: 700;
                font-size: 20px;
                justify-content: center;
                line-height: 24px;
                padding: 10px;
                color: #333333;
                background: #ffffff;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                border: 1px solid transparent;
            }
            button.buy {
                width: calc((100% - 10px) / 2);
                display: flex;
                justify-content: center;
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
                padding: 10px;
                background: #ffc600;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                color: #333333;
                text-decoration: none !important;
            }
        }
    }
    div.title-z {
        margin-bottom: 50px;

        h1 {
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            color: #333333;
            text-align: center;
        }
    }
    div.product-right {
        padding-left: 30px;
        div.right-item {
            margin-bottom: 80px;
            div.item-top {
                display: flex;
                justify-content: space-between;
                padding-bottom: 12px;
                border-bottom: 1px solid #495057;
                p {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    color: #333333;
                }
                b {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    margin-left: 30px;
                    color: #333333;
                }
                a {
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    b {
                        text-decoration-line: underline;
                    }
                }
            }
        }
    }
    div.similar-products {
        margin-bottom: 100px;
    }
    // carousel-img
    div.carousel-img {
        div.item-img {
            padding-right: 10px;
            cursor: pointer;
            height: 110px;
            .select-img {
                border: 2px solid #ffc600;
                border-radius: 3px;
            }
            div {
                border: 2px solid transparent;
            }
            img {
                pointer-events: none;
                width: 100%;
                max-height: 100%;
            }
        }
    }
}

@media (max-width: 1025px) {
    .busket-id {
        div.product-right div.right-item[data-v-86f2de84] {
            margin-bottom: 10px !important;
        }
    }
}
@media (max-width: 576px) {
    .carousel-product {
        overflow-x: hidden;
    }
    .category-top {
        padding: 5px 0 !important;
        ul {
            li {
                a {
                    font-size: 12px !important;
                }
            }
        }
    }
    .busket-id {
        .media-btn-show {
            display: block !important;
            padding: 0 !important;
            width: auto !important;
            border: 0 !important;
            box-shadow: none !important;
        }
        .media-btn-hide {
            display: none !important;
        }
        div.product-right div.right-item[data-v-86f2de84] {
            margin-bottom: 30px !important;
        }
        .slick-dots li button:before {
            font-size: 10px !important;
        }
        .slick-dots li.slick-active button:before {
            color: #ffc600 !important;
        }
        div.productby-id {
            margin-bottom: 0 !important;
        }
        div.similar-products {
            margin-bottom: 54px !important;
        }
        .modal-card {
            top: 46px !important;
            width: 100% !important;
            padding: 20px !important;

            .buttons button {
                font-size: 14px !important;
                padding: 8px 10px;
            }
            .modal-window {
                padding: 0;
            }
            .pro-modal {
                .right {
                    width: 50% !important;
                    p {
                        font-size: 16px !important;
                    }
                    .box-items {
                        h3 {
                            font-size: 14px !important;
                        }
                    }
                }
            }
            .aside {
                .item {
                    .value {
                        .size {
                            padding: 0 10px !important;
                        }
                    }
                }
            }
        }
        div.product-item {
            // padding: 0 7px !important;
        }

        .buttons {
            width: 100%;
            button {
                width: 50%;
            }
            button:nth-child(2) {
                width: 48%;
            }
        }
        div.image-view {
            display: none !important;
        }
        .item-img {
            height: auto !important;
        }
        .product-right {
            margin-top: 50px;
            padding-left: 0 !important;
        }
        .product-center {
            margin-top: 40px !important;
            border-right: 0 !important;
        }
        .title-z {
            margin-bottom: 10px !important;
            h1 {
                font-size: 24px !important;
            }
        }
    }
}
</style>
