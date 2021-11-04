<template>
    <div v-if="category != null" :class="isMenu ? 'layout-nuxt' : ''">
        <div class="catModal" v-if="gender == undefined">
            <div
                v-for="item in category"
                :key="item._id"
                @click="clickCat(item._id)"
                class="dont"
            >
                <div class="drop">
                    <!-- <img src="@/assets/img/woman.png" /> -->
                    <a>{{ item.name[$i18n.locale] }}</a>
                </div>
            </div>

            <!--
      <a @click="clickCat('id2')">asd</a>
      <a @click="clickCat('id3')">asd</a> -->
        </div>

        <div v-else>
            <Header />
            <div class="top"></div>
            <div class="vh">
                <Nuxt :key="$route.fullPath" />
            </div>
            <Footer />
        </div>

        <Loader />
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
    components: { Header, Footer },
    data() {
        return {
            isSelect: false,
            gender: "",
            category: null
        };
    },

    computed: {
        isMenu() {
            return this.$store.state.isMenu;
        }
    },

    async mounted() {
        await this.$store.dispatch("getCategory");
        await this.$store.dispatch("getBasket");
        await this.$store.dispatch("getLike");

        let category = this.$store.state.category;

        console.log("getcat2323", category);

        this.category = category;

        this.gender = localStorage.getItem("gender");

        if (this.$auth.loggedIn) {
            if (this.$store.state.localBasket.length > 0) {
                await this.$axios.$post("/like/rm").then(async res => {
                    // this.$store.commit("GET_BASKET", []);

                    await this.$store.state.localBasket.forEach(async item => {
                        await this.$axios.$post("/like/create", item);
                    });

                    await this.$store.dispatch("getBasket");

                    this.$store.commit("remove_local");
                });
            }
        }
    },
    methods: {
        clickCat(item) {
            this.gender = item;

            localStorage.setItem("gender", item);
        }

        // get find all children
    }
};
</script>
<style lang="scss">
.layout-nuxt {
    overflow: hidden;
    height: 100vh;
    width: calc(100% - 20px);
}
.vh {
    min-height: calc(100vh - 353px);
}
.catModal {
    width: 90%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(40px);
    position: fixed;
    div.dont {
        cursor: pointer;
        width: 100%;
        height: 200px;
        position: relative;
        background: rgba(51, 51, 51, 0.3);
        box-sizing: border-box;
        background-image: url("@/assets/img/woman.jpg");
        &:nth-child(2) {
            background-image: url("@/assets/img/man.jpg");
        }
        &:nth-child(3) {
            background-image: url("@/assets/img/kids.jpg");
        }
        div.drop {
            width: 100%;
            height: 100%;
            backdrop-filter: blur(40px);
            // background: url("@/assets/img/woman.png");
        }
        a {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: 500;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #ffffff !important;
            text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.75) !important;
        }

        img {
            width: 100%;
            height: 190px;
        }
    }
    .dont:hover {
        .drop {
            backdrop-filter: blur(0px);
            a {
                color: #ffc600 !important;
                text-shadow: 1px 1px 20px rgba(255, 198, 0, 0.75) !important;
            }
        }
    }
}
.top {
    width: 100%;
    height: 91px;
}

@media (max-width: 850px) {
    .top {
        width: 100%;
        height: 46px;
    }
}
@media (min-width: 340px) and (max-width: 576px) {
    .top {
        width: 100%;
        height: 39px !important;
    }
    .catModal {
        .dont {
            height: 90px !important;
            background-image: url("@/assets/img/women mob.jpg") !important;
            &:nth-child(2) {
                background-image: url("@/assets/img/man mob.jpg") !important;
            }
            &:nth-child(3) {
                background-image: url("@/assets/img/kids mob.jpg") !important;
            }
            .drop {
                a {
                    font-size: 24px !important;
                }
            }
        }
    }
}
</style>
