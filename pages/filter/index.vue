<template>
    <div ref="filter" :class="openFilter ? 'close-filter' : ''">
        <!-- <pre> {{ idList }} </pre> -->

        <div class="container-filter">
            <div class="filter-content">
                <div :class="isMenu ? 'filter-nav active-nav' : 'filter-nav'">
                    <div class="filter-top2">
                        <button class="filter-icon" @click="clickClose">
                            <img src="@/assets/img/filter-option.png" alt="" />
                            {{ $t("filter") }}
                        </button>

                        <button class="refresh" @click="resetFilter">
                            {{ $t("sbros") }}
                            <svg
                                @click="clickClose"
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1 11L6 6L1 1"
                                    stroke="#333333"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <div class="filter-box">
                        <div class="filter-item">
                            <button class="item-click" @click="acc1 = !acc1">
                                <b> {{ $t("sortpo") }}</b>
                                <img
                                    :class="acc1 ? '' : 'rotate'"
                                    src="@/assets/img/angle-up.png"
                                    alt=""
                                />
                            </button>

                            <div :class="acc1 ? '' : 'none'">
                                <div class="flex-box">
                                    <label class="btn-item">
                                        <input
                                            type="radio"
                                            value="priceDown"
                                            name="filter"
                                            v-model="filter.sort"
                                            checked
                                        />
                                        <b>{{ $t("voz") }}</b>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="btn-item">
                                        <input
                                            type="radio"
                                            value="priceUp"
                                            name="filter"
                                            v-model="filter.sort"
                                        />
                                        <b>{{ $t("uli") }}</b>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="btn-item">
                                        <input
                                            type="radio"
                                            value="new"
                                            name="filter"
                                            v-model="filter.sort"
                                        />
                                        <b>{{ $t("newsam") }}</b>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="btn-item">
                                        <input
                                            type="radio"
                                            value="popular"
                                            name="filter"
                                            v-model="filter.sort"
                                        />
                                        <b>{{ $t("popular") }}</b>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-item">
                            <button class="item-click" @click="acc2 = !acc2">
                                <b>{{ $t("brands") }}</b>
                                <img
                                    :class="acc2 ? '' : 'rotate'"
                                    src="@/assets/img/angle-up.png"
                                    alt=""
                                />
                            </button>

                            <div :class="acc2 ? '' : 'none'">
                                <div class="flex-box">
                                    <label
                                        class="btn-item"
                                        v-for="(item, index) in brands"
                                        :key="index"
                                    >
                                        <input
                                            type="checkbox"
                                            :value="item._id"
                                            v-model="filter.brand"
                                        />
                                        <b> {{ item.name }} </b>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-item ">
                            <button class="item-click" @click="acc3 = !acc3">
                                <b>{{ $t("sena") }}</b>
                                <img
                                    :class="acc3 ? '' : 'rotate'"
                                    src="@/assets/img/angle-up.png"
                                    alt=""
                                />
                            </button>

                            <div :class="acc3 ? '' : 'none'">
                                <div class="price-range" key="slider1">
                                    <vue-slider
                                        v-model="filter.price.end"
                                        v-bind="options"
                                    />
                                </div>
                                <div class="range-count">
                                    <div class="btn-count">
                                        0 {{ $t("sum") }}
                                    </div>
                                    <span
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="1"
                                            viewBox="0 0 12 1"
                                            fill="none"
                                        >
                                            <line
                                                y1="0.5"
                                                x2="12"
                                                y2="0.5"
                                                stroke="#333333"
                                            /></svg
                                    ></span>
                                    <input
                                        class="btn-count"
                                        type="number"
                                        max="5000000"
                                        step="10000"
                                        min="0"
                                        v-model="filter.price.end"
                                        @keyup="keyupPrice"
                                    />
                                </div>
                                <!-- <p>{{ filter.price.end }} {{ $t("sum") }}</p> -->

                                <div class="price-numbers"></div>
                            </div>
                        </div>

                        <button @click="resetFilter" class="btn-black">
                            {{ $t("sbros") }}
                        </button>

                        <button @click="changeFilter" class="btn-filter">
                            {{ $t("primenit") }}
                        </button>
                    </div>
                </div>

                <div
                    :class="isMenu ? 'fixvh active-fixvh' : 'fixvh'"
                    @click="isMenu = false"
                ></div>

                <div class="filter-right ">
                    <div
                        class="category-top2"
                        v-if="categoryList.length != null"
                    >
                        <button class="filter-media" @click="isMenu = true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="15"
                                viewBox="0 0 20 15"
                                fill="none"
                            >
                                <rect
                                    x="6.66797"
                                    y="10.1348"
                                    width="13.3316"
                                    height="1.57289"
                                    fill="white"
                                />
                                <path
                                    d="M3.72248 13.755C5.10347 14.132 6.51233 13.2923 6.87928 11.8969C7.24623 10.5016 6.43819 9.05665 5.05721 8.67963C3.67623 8.30261 2.26737 9.14233 1.90042 10.5377C1.53347 11.933 2.3415 13.3779 3.72248 13.755Z"
                                    stroke="white"
                                    stroke-width="0.7"
                                />
                                <rect
                                    y="10.1348"
                                    width="1.66645"
                                    height="1.57289"
                                    fill="white"
                                />
                                <rect
                                    x="13.332"
                                    y="4.86914"
                                    width="13.3316"
                                    height="1.57289"
                                    transform="rotate(-180 13.332 4.86914)"
                                    fill="white"
                                />
                                <path
                                    d="M16.2736 1.24894C14.8926 0.871921 13.4838 1.71164 13.1168 3.10697C12.7499 4.5023 13.5579 5.94725 14.9389 6.32427C16.3199 6.7013 17.7287 5.86158 18.0957 4.46625C18.4626 3.07091 17.6546 1.62596 16.2736 1.24894Z"
                                    stroke="white"
                                    stroke-width="0.7"
                                />
                                <rect
                                    x="19.9961"
                                    y="4.86914"
                                    width="1.66645"
                                    height="1.57289"
                                    transform="rotate(-180 19.9961 4.86914)"
                                    fill="white"
                                />
                            </svg>

                            <b>{{ $t("filter") }}</b>
                        </button>

                        <div class="filter-top3">
                            <button class="filter-icon" @click="clickOpen">
                                <img
                                    src="@/assets/img/filter-option.png"
                                    alt=""
                                />
                                {{ $t("filter") }}
                            </button>

                            <button class="refresh" @click="resetFilter">
                                {{ $t("sbros") }}
                                <svg
                                    @click="clickOpen"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                >
                                    <path
                                        d="M1 11L6 6L1 1"
                                        stroke="#333333"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <ul>
                            <div v-if="categoryList.length > 0">
                                <li
                                    v-for="(item, index) in categoryList"
                                    :key="index"
                                >
                                    <nuxt-link
                                        :to="{
                                            name: 'filter___' + $i18n.locale,
                                            query: { category: item.id }
                                        }"
                                    >
                                        {{ item.name.uz }} /
                                    </nuxt-link>
                                </li>
                            </div>

                            <div v-else>
                                <li>
                                    <nuxt-link
                                        :to="{
                                            name: `index___${$i18n.locale}`
                                        }"
                                    >
                                        {{ $t("glavni") }}
                                    </nuxt-link>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div class="row-z" v-if="products != null">
                        <div
                            class="col-50"
                            v-for="(item, index) in products"
                            :key="index"
                        >
                            <ProductCard
                                :product="item"
                                :image="item.param[0].image"
                                type="filter"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
    components: {
        VueSlider
    },
    data() {
        return {
            idList: [],
            value: 0,
            acc1: true,
            acc2: true,
            acc3: true,
            isMenu: false,
            limit: 12,
            page: 1,
            openFilter: true,
            categoryTag: "",

            brands: [],

            filter: {
                category: [],
                brand: [],
                search: "",
                price: {
                    start: 0,
                    end: 5000000
                },
                page: 1,
                limit: 12,
                sort: ""
            },

            value: 1,

            products: null,

            categoryList: [],

            isLoading: true,
            options: {
                dotSize: 10,
                height: 2,
                min: 0,
                max: 5000000,
                interval: 10000,
                disabled: false,
                clickable: true,
                duration: 0.2,
                adsorb: false,
                lazy: false
            }
        };
    },

    head() {
        return {
            title: this.categoryTag,
            meta: [
                {
                    hid: this.categoryTag,
                    name: this.categoryTag,
                    content: this.categoryTag
                }
            ]
        };
    },

    async mounted() {
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();
        // });
        let category = await this.$store.state.category;
        this.category = category;

        if (this.$route.query.brand) {
            this.filter.brand = [this.$route.query.brand];
            this.categoryTag = "Filter";
        }

        if (this.$route.query.search) {
            this.filter.search = this.$route.query.search;
            this.categoryTag = this.$route.query.search;
        }

        if (this.$route.query.category) {
            this.getChildren(this.$route.query.category, this.category);
            this.filter.category = this.idList;

            this.categoryList = this.getCat(
                this.category,
                this.$route.query.category
            );

            console.log("cccc", this.categoryList);
            this.categoryTag = this.categoryList[
                this.categoryList.length - 1
            ].name[this.$i18n.locale];
        }

        let count = await this.$axios.$post("product/count", {
            category: this.idList,
            brand: this.filter.brand,
            search: this.filter.search,
            price: this.filter.price
        });
        window.addEventListener("scroll", this.handleScroll);

        console.log("count", count);

        let b = await this.$axios.$get("brands/test/ui");

        this.getBrand(b.data, count.brands);

        await this.getProducts(this.filter);

        // this.$nuxt.$loading.finish();
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll);
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
        keyupPrice() {
            if (this.filter.price.end > 5000000) {
                this.filter.price.end = 5000000;
            }
        },
        clickClose() {
            this.openFilter = true;
        },
        clickOpen() {
            this.openFilter = false;
        },
        async handleScroll() {
            if (window.scrollY - this.$refs.filter.clientHeight > -850) {
                if (this.isLoading) {
                    this.isLoading = false;

                    this.filter.page = this.filter.page + 1;
                    let p = await this.$axios.$post(
                        "product/filter",
                        this.filter
                    );

                    this.products = this.products.concat(p.data);
                    this.isLoading = true;
                }
            }
        },

        resetFilter() {
            this.filter.sort = "";
            this.filter.brand = [];
            this.filter.page = 1;
            this.filter.price.end = 5000000;

            this.getProducts(this.filter);
        },
        async changeFilter() {
            // this.$nextTick(() => {
            //     this.$nuxt.$loading.start();
            // });

            this.isMenu = false;
            this.filter.price.end = parseInt(this.filter.price.end);

            this.filter.page = 1;
            await this.getProducts(this.filter);

            // this.$nuxt.$loading.finish();
        },
        async getProducts(filter) {
            let p = await this.$axios.$post("product/filter", filter);

            this.products = p.data;

            console.log("prrrr", this.products);
        },

        getBrand(brands, idList) {
            if (brands && idList) {
                brands.forEach(item => {
                    let find = idList.find(i => i == item._id);

                    if (find) {
                        this.brands.push(item);
                    }
                });
            }
        },

        getCat(category, id) {
            for (let cat of category) {
                if (cat._id == id) {
                    return [
                        {
                            id: cat._id,
                            name: cat.name
                        }
                    ];
                } else {
                    if (cat.children.length) {
                        let item = this.getCat(cat.children, id);

                        if (item) {
                            return [
                                {
                                    id: cat._id,
                                    name: cat.name
                                },
                                ...item
                            ];
                        }
                    }
                }
            }
        },

        // get find all children

        getChild(category) {
            category.forEach(item => {
                this.idList.push(item._id);

                if (item.children.length > 0) {
                    this.getChild(item.children);
                }
            });
        },

        // find id category
        getChildren(id, category) {
            category.forEach(item => {
                if (item._id == id) {
                    this.idList.push(item._id);
                    if (item.children.length > 0) {
                        this.getChild(item.children);
                    }
                } else if (item.children.length > 0 && item._id != id) {
                    this.getChildren(id, item.children);
                }
            });
        }
    }
};
</script>

<style lang="scss">
.container-filter {
    margin: 0 auto;
}
@media (min-width: 1440px) {
    .container-filter {
        max-width: 1440px;
    }
}

.vue-slider-dot-tooltip {
    display: none !important;
}
.range-count {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: stretch;
    span {
        display: inline-flex;
        align-items: center;
    }
    .btn-count {
        width: 85px;
        background: rgba(211, 211, 211, 0.75);
        border-radius: 3px;
        padding: 7px;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        color: #333333;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        border: none;
        &:focus {
            outline: none;
        }
    }
}
input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffc600;
    margin-top: -4px;
}

input[type="range"]:focus {
    outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ccc;
}

input[type="range"]::-webkit-range-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}

input[type="range"]::-webkit-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffc600;
}

/*hide the outline behind the border*/
input[type="range"]:-webkit-focusring {
    outline: 1px solid white;
    outline-offset: -1px;
}

input[type="range"]:focus::-webkit-range-track {
    background: #ccc;
}
button.filter-media {
    background: #333333;
    border-radius: 3px;
    padding: 7px 10px;
    margin-right: 10px;
    border: none;
    display: none;
    b {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;

        color: #ffffff;
        margin-left: 10px;
    }
}
div.fixvh {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 4000;
    display: none;
}
div.filter-top2 {
    padding: 10px 10px 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(51, 51, 51, 0.3);
    box-sizing: border-box;
    border-radius: 0px 3px 3px 0px;
    width: 100%;
    button {
        background: transparent;
        border: none;
    }
    button.filter-icon {
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;

        color: #000000;

        img {
            margin-right: 10px;
        }
    }

    button.refresh {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;

        color: #0070f0;

        svg {
            margin-left: 10px;
            transform: rotate(90deg);
        }
    }
}
div.filter-top3 {
    padding: 10px 10px 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(51, 51, 51, 0.3);
    box-sizing: border-box;
    border-radius: 0px 3px 3px 0px;
    width: 255px;
    display: none;
    button {
        background: transparent;
        border: none;
    }
    button.filter-icon {
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;

        color: #000000;

        img {
            margin-right: 10px;
        }
    }

    button.refresh {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;

        color: #0070f0;

        svg {
            margin-left: 10px;
        }
    }
}
div.filter-content {
    padding: 8px 0px;
    display: flex;
    .slider-process {
        background-color: #f4b81e !important;
    }
    .slider-dot {
        background-color: #f4b81e !important;
    }
    .slider {
        background-color: #e5e5e5;
    }
    div.filter-nav {
        width: 255px;
        transition: 0.5s;
        button {
            background: transparent;
            border: none;
        }

        div.filter-box {
            padding: 12px 15px 12px 30px;
            border-right: 1px solid rgba(51, 51, 51, 0.3);
            button.btn-filter {
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                width: 100%;
                color: #333333;
                padding: 12px 15px;
                background: #ffc600;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
            }
            button.btn-black {
                background: #333333;
                border-radius: 3px;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                /* identical to box height */
                padding: 7px;
                color: #ffffff;
                margin-bottom: 10px;

                width: 100%;
                display: none;
            }
            .rotate {
                transform: rotate(-180deg);
            }
            div.filter-item {
                margin-bottom: 15px;
                button.item-click {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 10px;

                    b {
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 15px;
                        color: #333333;
                    }
                }

                div.flex-box {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    label.btn-item {
                        width: calc((100% - 30px) / 2);
                        background: #f3f4f5;
                        border-radius: 3px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 10px;
                        cursor: pointer;
                        position: relative;
                        b {
                            position: relative;
                            z-index: 2;
                            display: block;
                            text-align: center;
                            width: 100%;
                            font-weight: normal;
                            font-size: 10px;
                            line-height: 12px;
                            padding: 8px 5px;
                            color: #333333;
                        }
                        input {
                            position: absolute;
                            z-index: 2;
                            height: 0;
                            width: 0;
                            opacity: 0 !important;
                        }
                        .checkmark {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                            border-radius: 3px;
                        }
                    }
                    label.btn-item input:checked ~ .checkmark {
                        background: #dedede;
                    }
                }
            }
        }

        .none {
            display: none;
        }
    }

    div.filter-right {
        width: calc(100% - 255px);
        padding: 0px 50px;
        div.category-top2 {
            padding: 5px 0px;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            ul {
                list-style-type: none;
                margin-bottom: 0px;

                li {
                    display: inline-block;
                    a {
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 15px;
                        text-decoration: none;
                        color: #000000;

                        &:hover {
                            color: #ffc600;
                        }
                    }
                }
            }
        }

        div.row-z {
            display: flex;
            flex-wrap: wrap;
            margin: 0px -25px;

            div.col-50 {
                width: calc(100% / 3);
                padding: 0px 25px;
                margin-bottom: 30px;
            }
        }
    }

    @media (max-width: 850px) {
        button.filter-media {
            display: block;
        }
        div.filter-top3 {
            display: none !important;
        }
        div.filter-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 300px;
            display: block !important;
            z-index: 5111;
            width: 255px;
            background-color: #fff;
            height: 100vh;
            padding-top: 20px;
            transform: translate(-100%);
            div.filter-top2 {
                display: none;
            }
        }
        div.active-nav {
            transform: translate(0);
        }
        div.active-fixvh {
            display: block;
        }
        div.filter-box {
            button.btn-black {
                display: block !important;
            }

            button.btn-filter {
                border-radius: 3px !important;
                font-weight: 500 !important;
                font-size: 14px !important;
                line-height: 17px !important;
                /* identical to box height */
                padding: 7px !important;
                width: 100%;
            }
        }

        div.filter-right {
            width: 100%;
            padding: 5px;
            div.category-top2 {
                margin-bottom: 20px;
            }
            div.row-z {
                display: flex;
                flex-wrap: wrap;
                margin: 0px -5px;
                div.col-50 {
                    width: calc(100% / 4);
                    padding: 0px 5px;
                    margin-bottom: 15px;
                }
            }
        }
    }

    @media (max-width: 500px) {
        .col-50 {
            margin-bottom: 0 !important;
        }
        .filter-media {
            padding: 5px 10px !important;
            border-radius: 0px 3px 3px 0px;
            b {
                font-size: 12px !important;
            }
        }
        div.filter-right {
            div.row-z {
                display: flex;
                flex-wrap: wrap;
                margin: 0px -5px;
                div.col-50 {
                    width: calc(100% / 2) !important;
                    padding: 0px 5px !important;
                    margin-bottom: 0px !important;
                }
            }
        }
    }
}

div.close-filter {
    div.filter-content {
        padding-top: 0 !important;
        div.filter-nav {
            display: none;
            overflow: hidden;
        }
        div.filter-right {
            width: 100%;
            padding: 0px !important;
            ul {
                width: calc(100% - 131px);
                margin-left: 10px !important;
            }
            div.filter-top3 {
                display: flex;
            }
            div.row-z {
                display: flex;
                flex-wrap: wrap;
                margin: 0px !important;
                width: 100% !important;
                margin-top: 15px !important;

                div.col-50 {
                    width: calc(100% / 4);
                    padding: 0px 20px;
                    margin-bottom: 15px;
                }
            }
        }
    }
}
</style>
