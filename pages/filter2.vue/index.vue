<template>
    <div>
        <!-- <pre> {{ idList }} </pre> -->
        <!-- <pre> {{ categoryList }} </pre> -->

        <div class="filter-content">
            <div class="filter-nav">
                <div class="filter-top">
                    <button class="filter-icon">
                        <img src="@/assets/img/filter-option.png" alt="" />
                        Фильтр
                    </button>

                    <button class="refresh">
                        Сбросить
                        <svg
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
                            <b>Сортировка по</b>
                            <img src="@/assets/img/angle-up.png" alt="" />
                        </button>

                        <div :class="acc1 ? '' : 'none'">
                            <div class="flex-box">
                                <label class="btn-item">
                                    <input type="radio" name="filter" />
                                    <b>Возрастанию</b>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="btn-item">
                                    <input type="radio" name="filter" />
                                    <b>Убыванию</b>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="btn-item">
                                    <input type="radio" name="filter" />
                                    <b>Новинкам</b>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="btn-item">
                                    <input type="radio" name="filter" />
                                    <b>Популярности</b>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="filter-item">
                        <button class="item-click" @click="acc2 = !acc2">
                            <b>Брэнды</b>
                            <img
                                :class="acc2 ? '' : 'rotate'"
                                src="@/assets/img/angle-up.png"
                                alt=""
                            />
                        </button>

                        <div :class="acc2 ? '' : 'none'">
                            <div class="flex-box">
                                <label class="btn-item">
                                    <input type="checkbox" />
                                    <b>ZARA</b>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="btn-item">
                                    <input type="checkbox" />
                                    <b>ZARA</b>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="btn-item">
                                    <input type="checkbox" />
                                    <b>ZARA</b>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="filter-item ali">
                        <button class="item-click" @click="acc3 = !acc3">
                            <b>Цена</b>
                            <img src="@/assets/img/angle-up.png" alt="" />
                        </button>

                        <div :class="acc3 ? '' : 'none'">
                            <div class="price-range">
                                <input type="range" />
                            </div>

                            <p>1234</p>

                            <div class="price-numbers"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="filter-right">
                <div class="category-top" v-if="categoryList.length > 0">
                    <ul>
                        <li v-for="(item, index) in categoryList" :key="index">
                            <nuxt-link :to="{ name: 'filter' }">Мужчины/ </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Мужчины/</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Мужчины</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="row-z">
                    <div class="col-50">2</div>
                    <div class="col-50">3</div>
                    <div class="col-50">4</div>
                    <div class="col-50">5</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            idList: [],
            catid: "",
            acc1: true,
            acc2: true,
            acc3: true,

            limit: 12,
            page: 1,

            filter: {
                category: [],
                brnad: [],
                search: "",
                price: {
                    start: 0,
                    end: 5000000
                }
            },

            products: null,

            categoryList: []
        };
    },

    async mounted() {
        let category = await this.$axios.$get("/category/all");
        console.log("cat in filter->", category);
        this.category = category.categoryList;
        this.catid = "";

        await this.getChildren(this.$route.query.category, this.category);

        this.categoryList = this.getCat(
            this.category,
            this.$route.query.category
        );

        let products = await this.$axios.$post("product/count", {
            category: this.idList
        });
    },

    methods: {
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

<style lang="scss" scoped>
div.filter-content {
    padding: 8px 0px;
    display: flex;
    div.filter-nav {
        width: 255px;
        button {
            background: transparent;
            border: none;
        }
        div.filter-top {
            padding: 10px 10px 10px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid rgba(51, 51, 51, 0.3);
            box-sizing: border-box;
            border-radius: 0px 3px 3px 0px;
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

        div.filter-box {
            padding: 12px 15px 12px 30px;
            border-right: 1px solid rgba(51, 51, 51, 0.3);
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
                        display: block;
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
                        }
                        .checkmark {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
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
        padding: 0px 40px;
        div.category-top {
            padding: 5px 0px;
            ul {
                list-style-type: none;
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
            }
        }
    }
}
</style>
