<template>
    <div class="shop-info" v-if="info.length > 0">
        <div class="info-links">
            <div class="container-info">
                <div class="tab-link">
                    <button @click="clickTab(1)">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="20"
                                viewBox="0 0 24 20"
                                fill="none"
                            >
                                <path
                                    d="M20.5355 10.7976H18.6794C18.8686 11.3065 18.972 11.8556 18.972 12.4279V19.3192C18.972 19.5578 18.9297 19.7869 18.8528 19.9999H21.9213C23.0675 19.9999 24 19.0838 24 17.9578V14.2011C24 12.3244 22.4459 10.7976 20.5355 10.7976Z"
                                    fill="#333333"
                                />
                                <path
                                    d="M5.02806 12.428C5.02806 11.8556 5.13142 11.3065 5.3206 10.7977H3.46454C1.55419 10.7977 0 12.3245 0 14.2012V17.9579C0 19.0839 0.932486 20 2.07872 20H5.14726C5.07034 19.7869 5.02806 19.5579 5.02806 19.3193V12.428Z"
                                    fill="#333333"
                                />
                                <path
                                    d="M14.1216 9.02449H9.87841C7.96806 9.02449 6.41387 10.5513 6.41387 12.428V19.3193C6.41387 19.6952 6.72409 20 7.10678 20H16.8933C17.276 20 17.5862 19.6952 17.5862 19.3193V12.428C17.5862 10.5513 16.032 9.02449 14.1216 9.02449Z"
                                    fill="#333333"
                                />
                                <path
                                    d="M12 0C9.70258 0 7.83348 1.83617 7.83348 4.09318C7.83348 5.62408 8.6936 6.96112 9.96382 7.66309C10.5663 7.99603 11.2609 8.18631 12 8.18631C12.7392 8.18631 13.4337 7.99603 14.0362 7.66309C15.3065 6.96112 16.1666 5.62404 16.1666 4.09318C16.1666 1.83621 14.2975 0 12 0Z"
                                    fill="#333333"
                                />
                                <path
                                    d="M4.68367 3.81513C2.96546 3.81513 1.56764 5.18832 1.56764 6.87625C1.56764 8.56419 2.96546 9.93737 4.68367 9.93737C5.11951 9.93737 5.53454 9.84868 5.91156 9.68926C6.5634 9.41356 7.10087 8.92553 7.43345 8.31423C7.66689 7.88519 7.79969 7.39573 7.79969 6.87625C7.79969 5.18836 6.40187 3.81513 4.68367 3.81513Z"
                                    fill="#333333"
                                />
                                <path
                                    d="M19.3164 3.81513C17.5982 3.81513 16.2004 5.18832 16.2004 6.87625C16.2004 7.39578 16.3332 7.88524 16.5666 8.31423C16.8992 8.92558 17.4366 9.41361 18.0885 9.68926C18.4655 9.84868 18.8805 9.93737 19.3164 9.93737C21.0346 9.93737 22.4324 8.56419 22.4324 6.87625C22.4324 5.18832 21.0346 3.81513 19.3164 3.81513Z"
                                    fill="#333333"
                                />
                            </svg>

                            <b>{{ $t("about") }}</b>
                        </span>

                        <span
                            :class="activeTab == 1 ? 'angle rotate' : 'angle'"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1.07129 10.5L5.57129 6L1.07129 1.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </button>

                    <div
                        v-if="activeTab == 1"
                        class="accordion-body"
                        v-html="info[0].description[$i18n.locale]"
                    ></div>

                    <span class="line"></span>

                    <button @click="clickTab(2)">
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

                            <b>{{ $t("dostavka") }}</b>
                        </span>

                        <span
                            :class="activeTab == 2 ? 'angle rotate' : 'angle'"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1.07129 10.5L5.57129 6L1.07129 1.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </button>

                    <div
                        v-if="activeTab == 2"
                        class="accordion-body"
                        v-html="info[1].description[$i18n.locale]"
                    ></div>

                    <span class="line"></span>

                    <button @click="clickTab(3)">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="32"
                                viewBox="0 0 24 32"
                                fill="none"
                            >
                                <path
                                    d="M12.7039 18.5681C12.5636 18.5663 12.4237 18.579 12.2873 18.6054V15.0406C13.0411 15.2789 13.8292 15.3996 14.6392 15.3996C18.669 15.3996 21.9476 12.3588 21.9476 8.62113C21.9476 4.88344 18.6691 1.84269 14.6392 1.84269C10.6094 1.84269 7.33082 4.8835 7.33082 8.62119C7.33082 9.90712 7.72024 11.1528 8.45644 12.2342V16.1436C8.16162 15.9968 7.8288 15.9241 7.48365 15.9359C6.57158 15.966 5.81193 16.6198 5.66375 17.4479C5.36253 17.2922 5.02048 17.2154 4.66481 17.2269C3.92633 17.2512 3.28771 17.6844 2.99276 18.2882C2.65819 18.076 2.26094 17.9682 1.84598 17.9823C0.82811 18.0159 0 18.8264 0 19.789L0.000134698 23.7862C0.000134698 24.0455 0.193853 23.5 0.473304 23.5C1.07818 23.5 1.01214 26.5 1.01201 21.5693V19.789C1.01201 19.3259 1.40231 18.9362 1.88196 18.9203C2.39504 18.9037 2.81877 19.2824 2.81877 19.7576C2.81877 20.0169 3.04532 20.2269 3.32477 20.2269C3.60422 20.2269 3.83077 20.0168 3.83077 19.7576V19.0336C3.83077 18.5704 4.22101 18.1807 4.70073 18.1649C4.94898 18.1562 5.18349 18.2399 5.36138 18.3993C5.53949 18.5587 5.63753 18.7728 5.63753 19.0023C5.63753 19.2615 5.86409 19.4716 6.14354 19.4716C6.42299 19.4716 6.64954 19.2614 6.64954 19.0023V17.7426C6.64954 17.2794 7.03977 16.8897 7.5195 16.8739C8.03507 16.8579 8.4563 17.2377 8.4563 17.7112C8.4563 17.9704 8.68285 18.1805 8.96231 18.1805C9.24176 18.1805 9.46831 17.9704 9.46831 17.7112C9.46831 16.9722 9.46831 13.1261 9.46831 11.3772C9.46831 10.9042 9.88893 10.5237 10.4051 10.5399C10.8848 10.5557 11.2751 10.9454 11.2751 11.4086V18.7784C11.2751 19.3293 11.8521 19.7061 12.4102 19.5445C12.5004 19.5183 12.5952 19.5063 12.691 19.5067C13.1743 19.5123 13.5827 19.9105 13.5827 20.3762V24.1902C13.5827 25.215 13.2177 26.231 12.5551 27.0511C12.054 27.6909 11.7603 27.9764 11.4205 28.5693H2.64255C2.6381 28.5593 2.63379 28.5491 2.62928 28.5392L1.42852 25.9067C0.938893 24.8479 1.02124 23.8853 1.01214 23.7862C1.01214 23.527 0.785589 23.3169 0.506138 23.3169C0.226687 23.3169 0.000134698 23.5271 0.000134698 23.7862C0.0144206 23.9374 -0.0968341 24.9893 0.497513 26.2746L1.62691 28.7507C1.22016 28.9753 0.94617 29.3861 0.94617 29.8561V30.7131C0.94617 31.4227 1.56862 32 2.33372 32H11.5359C12.301 32 12.9235 31.4227 12.9235 30.7131V29.8561C12.9235 29.4526 12.7219 29.0923 12.4075 28.8561C12.6573 28.4566 12.8172 28.3053 13.3653 27.614C14.1583 26.6326 14.5951 25.4166 14.5951 24.1901V20.3762C14.595 19.408 13.729 18.58 12.7039 18.5681ZM10.4413 9.60181C9.67781 9.57694 9.01985 9.96344 8.68744 10.5294C8.46041 9.92025 8.34289 9.27681 8.34289 8.62119C8.34289 5.40106 11.1674 2.78137 14.6392 2.78137C18.111 2.78137 20.9355 5.40106 20.9355 8.62119C20.9355 11.8412 18.111 14.4609 14.6392 14.4609C13.8234 14.4609 13.0338 14.3191 12.2873 14.0394V11.6409C12.3237 11.6903 12.3707 11.7341 12.428 11.7688C13.0746 12.161 13.5124 12.2723 14.0878 12.2987V12.7822C14.0878 13.0414 14.3143 13.2515 14.5938 13.2515C14.8732 13.2515 15.0998 13.0414 15.0998 12.7822V12.2499C16.1813 12.0299 16.8137 11.1927 16.9556 10.4096C17.1412 9.38556 16.5637 8.49519 15.4845 8.14137C15.358 8.09994 15.2289 8.05675 15.0998 8.01188V5.86088C15.429 5.946 15.6242 6.09931 15.6426 6.11419C15.8482 6.28681 16.1658 6.27381 16.3542 6.08444C16.5437 5.89387 16.5307 5.59694 16.3253 5.42125C16.2977 5.39769 15.8443 5.01925 15.0998 4.90069V4.46019C15.0998 4.20094 14.8733 3.99088 14.5938 3.99088C14.3144 3.99088 14.0878 4.201 14.0878 4.46019V4.92006C14.0031 4.93638 13.9165 4.95644 13.8281 4.98112C13.1168 5.17987 12.5854 5.74431 12.4411 6.45425C12.2034 7.62406 12.9264 8.17069 14.0879 8.64444V11.3593C13.6723 11.3354 13.4213 11.2497 12.9821 10.9832C12.7481 10.8414 12.4347 10.9021 12.2816 11.1191C12.276 11.1271 12.2713 11.1353 12.2663 11.1434C12.1311 10.3013 11.3642 9.63225 10.4413 9.60181ZM15.0998 9.01062C15.7865 9.23769 16.0586 9.69694 15.9576 10.254C15.885 10.6545 15.5937 11.0793 15.0998 11.2674V9.01062ZM14.0878 7.60288C13.6154 7.36894 13.3238 7.17812 13.4355 6.628C13.492 6.35012 13.6933 6.01513 14.0878 5.89025V7.60288ZM11.9114 30.7131C11.9114 30.9051 11.7429 31.0613 11.5359 31.0613H2.33372C2.12664 31.0613 1.95824 30.9051 1.95824 30.7131V29.8561C1.95824 29.6634 2.12738 29.5079 2.33372 29.5079H11.5359C11.7399 29.5079 11.9114 29.662 11.9114 29.8561V30.7131Z"
                                    fill="#333333"
                                />
                                <path
                                    d="M14.7048 0C9.57941 0 5.40968 3.86744 5.40968 8.62119C5.40968 10.2577 5.90652 11.8504 6.84642 13.2269C6.99588 13.4458 7.30849 13.5111 7.54461 13.3722C7.78073 13.2336 7.85088 12.9436 7.70135 12.7247C6.86421 11.4986 6.42169 10.0797 6.42169 8.62125C6.42169 4.38506 10.1375 0.938688 14.7048 0.938688C19.2722 0.938688 22.988 4.38506 22.988 8.62125C22.988 12.8574 19.2722 16.3038 14.7048 16.3038C14.5271 16.3038 14.3471 16.2985 14.1697 16.288C13.8892 16.2706 13.6503 16.4678 13.6324 16.7264C13.6146 16.9851 13.8262 17.2082 14.1051 17.2247C14.3039 17.2365 14.5056 17.2425 14.7048 17.2425C19.8302 17.2425 24 13.3751 24 8.62131C24 3.86756 19.8302 0 14.7048 0Z"
                                    fill="#333333"
                                />
                            </svg>

                            <b>{{ $t("oplata") }}</b>
                        </span>

                        <span
                            :class="activeTab == 3 ? 'angle rotate' : 'angle'"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1.07129 10.5L5.57129 6L1.07129 1.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </button>

                    <div
                        v-if="activeTab == 3"
                        class="accordion-body"
                        v-html="info[2].description[$i18n.locale]"
                    ></div>

                    <span class="line"></span>

                    <button @click="clickTab(4)">
                        <span class="left-svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="22"
                                viewBox="0 0 18 22"
                                fill="none"
                            >
                                <path
                                    d="M9 21C9 21 17 17 17 11V4L9 1L1 4V11C1 17 9 21 9 21Z"
                                    stroke="#333333"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <b>{{ $t("politika") }}</b>
                        </span>

                        <span
                            :class="activeTab == 4 ? 'angle rotate' : 'angle'"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1.07129 10.5L5.57129 6L1.07129 1.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </button>

                    <div
                        v-if="activeTab == 4"
                        class="accordion-body"
                        v-html="info[3].description[$i18n.locale]"
                    ></div>
                </div>
            </div>
        </div>

        <div class="info-body">
            <aside
                v-if="activeTab == 1"
                v-html="info[0].description[$i18n.locale]"
            ></aside>
            <aside
                v-if="activeTab == 2"
                v-html="info[1].description[$i18n.locale]"
            ></aside>
            <aside
                v-if="activeTab == 3"
                v-html="info[2].description[$i18n.locale]"
            ></aside>
            <aside
                v-if="activeTab == 4"
                v-html="info[3].description[$i18n.locale]"
            ></aside>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 1,

            info: [],
            tag: ""
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
    async mounted() {
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();
        // });

        this.activeTab = this.$route.query.page;

        let cat1 = await this.$axios.$get("pages/rus");
        this.slug1 = cat1.data[0];
        let cat2 = await this.$axios.$get("pages/123123");
        this.slug2 = cat2.data[0];
        let cat3 = await this.$axios.$get("pages/oplata");
        this.slug3 = cat3.data[0];
        let cat4 = await this.$axios.$get("pages/politika-konfidencialnosti");
        this.slug4 = cat4.data[0];

        this.info.push(this.slug1, this.slug2, this.slug3, this.slug4);

        console.log("info", this.info);

        this.tag = this.info[this.activeTab].title[this.$i18n.locale];

        // this.$nuxt.$loading.finish();
    },
    methods: {
        clickTab(index) {
            this.activeTab = index;
            this.tag = this.info[this.activeTab - 1].title[this.$i18n.locale];
        }
    }
};
</script>

<style lang="scss">
.accordion-body {
    display: none;
    padding: 30px 0px;
    p {
        span {
            word-break: break-word;
        }
    }
}

div.container-info {
    padding: 0px 30px;
    max-width: 1110px;
    margin: 0 auto;
}

div.shop-info {
    margin-bottom: 50px;
    div.info-body {
        padding: 50px 30px;
    }
    div.info-links {
        padding: 15px 0px;
        background-color: #ececec;
        div.tab-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            button {
                border: none;
                background-color: transparent;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                b {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 22px;
                    margin-left: 25px;
                    color: #333333;
                    margin-right: 35px;
                    max-width: 200px;
                    text-align: left;
                }
                span.angle {
                    background-color: #495057;
                    width: 18px;
                    height: 18px;
                    border-radius: 100%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                span.rotate {
                    background-color: #ffc600;
                    svg {
                        transform: rotate(90deg);
                        path {
                            stroke: #333;
                        }
                    }
                }
            }
            span.line {
                height: 35px;
                width: 1px;
                display: inline-block;
                background-color: #333;
                margin: 0px 10px;
            }
        }
    }
}

@media (max-width: 1040px) {
    .left-svg {
        width: 166px;
        text-align: left !important;
    }
    .accordion-body {
        display: block;
    }
    div.shop-info {
        div.info-body {
            display: none;
        }
        div.info-links {
            padding: 0px;
            background-color: transparent;
            div.tab-link {
                display: block;

                button {
                    width: 100%;
                    justify-content: space-between;
                    border-bottom: 1px solid #495057;
                    padding: 10px 0px;
                    b {
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        margin-left: 25px;
                        color: #333333;
                        margin-right: 50px;
                        max-width: 200px;
                        text-align: left;
                    }
                }
                span.line {
                    display: none;
                }
            }
        }
    }
}
</style>
