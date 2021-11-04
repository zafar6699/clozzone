<template>
    <div v-if="banner.length > 0 && isGet">
        <div class="banner">
            <div class="container-one">
                <h1>{{ $t("actual") }}</h1>
            </div>

            <div class="container-one box-row">
                <div class="wrapper">
                    <div class="box a">
                        <a
                            target="_blank"
                            :href="one.url"
                            v-if="one != undefined"
                        >
                            <img
                                :src="$store.state.uploads + one.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box b">
                        <a
                            target="_blank"
                            :href="two.url"
                            v-if="two != undefined"
                        >
                            <img
                                :src="$store.state.uploads + two.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box c">
                        <a
                            target="_blank"
                            :href="three.url"
                            v-if="three != undefined"
                        >
                            <img
                                :src="$store.state.uploads + three.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box d">
                        <a
                            target="_blank"
                            :href="four.url"
                            v-if="four != undefined"
                        >
                            <img
                                :src="$store.state.uploads + four.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box e">
                        <a
                            target="_blank"
                            :href="five.url"
                            v-if="five != undefined"
                        >
                            <img
                                :src="$store.state.uploads + five.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box f">
                        <a
                            target="_blank"
                            :href="six.url"
                            v-if="six != undefined"
                        >
                            <img
                                :src="$store.state.uploads + six.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box g">
                        <a
                            target="_blank"
                            :href="seven.url"
                            v-if="seven != undefined"
                        >
                            <img
                                :src="$store.state.uploads + seven.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box h">
                        <a
                            target="_blank"
                            :href="eigth.url"
                            v-if="eigth != undefined"
                        >
                            <img
                                :src="$store.state.uploads + eigth.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                    <div class="box i">
                        <a
                            target="_blank"
                            :href="nine.url"
                            v-if="nine != undefined"
                        >
                            <img
                                :src="$store.state.uploads + nine.image"
                                style="width:100%"
                            />
                        </a>

                        <a v-else href="#">
                            <img src="@/assets/img/notfound.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        banner: {
            type: Array
        }
    },
    data() {
        return {
            one: null,
            two: null,
            three: null,
            four: null,
            five: null,
            six: null,
            seven: null,
            eigth: null,
            nine: null,

            isGet: false
        };
    },

    mounted() {
        this.one = this.banner.find(item => item.type == 1);

        this.two = this.banner.find(item => item.type == 2);
        this.three = this.banner.find(item => item.type == 3);
        this.four = this.banner.find(item => item.type == 4);
        this.five = this.banner.find(item => item.type == 5);
        this.six = this.banner.find(item => item.type == 6);
        this.seven = this.banner.find(item => item.type == 7);
        this.eigth = this.banner.find(item => item.type == 8);
        this.nine = this.banner.find(item => item.type == 9);

        this.isGet = true;
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.banner {
    margin-top: 50px;
}
.box-row {
    .wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        background-color: #fff;
        color: #444;
    }

    .box {
        background-color: #444;
        color: #fff;
        border-radius: 5px;
        // padding: 20px;
        font-size: 150%;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .a {
        grid-column: auto / span 2;
    }
    .e {
        grid-column: auto / span 2;
    }
    .c {
        grid-row: auto / span 2;
    }
    .f {
        grid-row: auto / span 2;
    }

    .k {
        grid-column: auto / span 3;
    }

    .h {
        grid-column: auto / span 2;
        grid-row: auto / span 2;
    }
}
// .grid-template {
//     display: grid;
//     grid-gap: 5px;
//     grid-template:
//         "one one two three " auto
//         "four five five three" auto
//         "four five five seven" auto
//         "six seven nine nine" auto
//         "six eight nine nine" / auto !important;
//     p {
//         margin: 0;
//         &.one {
//             grid-area: one;
//         }
//         &.two {
//             grid-area: two;
//         }
//         &.three {
//             grid-area: three;
//         }
//         &.four {
//             grid-area: four;
//         }
//         &.five {
//             grid-area: five;
//         }
//         &.six {
//             grid-area: six;
//         }
//         &.seven {
//             grid-area: seven;
//         }
//         &.eight {
//             grid-area: eight;
//         }
//         &.nine {
//             grid-area: nine;
//         }
//     }
// }
.banner {
    margin-bottom: 50px;
    width: auto !important;

    h1 {
        font-weight: bold;
        font-size: 32px;
        text-align: center;
        line-height: 39px;
        color: #333333;
        margin-bottom: 40px;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }
    .center-row {
        margin-top: 20px;
        img {
            height: 304px;
        }
    }
    .woman {
        img {
            width: 88%;
        }
    }
    .down-row {
        margin-top: 20px;
        img {
            height: 666px;
        }
        .middle-two {
            img {
                height: 300px;
            }
            img:nth-child(1) {
                height: 336px;
                margin-bottom: 30px;
            }
        }
    }
    .man {
        img {
            height: 600px;
        }
    }
}

/* Create four equal columns that sits next to each other */
// @media (min-width: 1576px) and (max-width: 2000px) {
//     .wrapper {
//         display: grid;
//         grid-gap: 10px;
//         grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)) !important;
//         background-color: #fff;
//         color: #444;
//     }
// }
@media (min-width: 577px) and (max-width: 1290px) {
    .banner {
        margin-top: 30px;
    }
    .wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        background-color: #fff;
        color: #444;
    }

    .box {
        background-color: #444;
        color: #fff;
        border-radius: 5px;
        // padding: 20px;
        font-size: 150%;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .a:nth-of-type(1) {
        order: 1;
        grid-column: auto / span 2;
    }
    .b:nth-of-type(2) {
        order: 3;
        grid-column: auto / span 1;
    }

    .d:nth-of-type(4) {
        order: 3;
        grid-column: auto / span 1;
    }
    .g:nth-of-type(7) {
        order: 7;
        grid-column: auto / span 1;
    }
    .i:nth-of-type(9) {
        order: 8;
        grid-column: auto / span 1;
    }

    .e:nth-of-type(5) {
        order: 4;
        grid-row: auto / span 2;
    }
    .h:nth-of-type(8) {
        order: 9;
    }
    .c:nth-of-type(3) {
        order: 2;
        grid-row: auto / span 2;
    }
    .f:nth-of-type(6) {
        order: 6;
        grid-row: auto / span 1;
    }
}
@media (max-width: 576px) {
    .banner {
        margin-top: 0px;
        margin-bottom: 0px;
        h1 {
            margin-bottom: 15px;
        }
    }
    .wrapper {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
        grid-gap: 5px !important;
    }

    .a:nth-of-type(1) {
        order: 1;
        grid-column: auto / span 2;
    }
    .b:nth-of-type(2) {
        order: 2;
        grid-column: auto / span 1;
    }

    .d:nth-of-type(4) {
        order: 3;
        grid-column: auto / span 1;
    }
    .g:nth-of-type(7) {
        order: 7;
        grid-column: auto / span 1;
    }
    .i:nth-of-type(9) {
        order: 8;
        grid-column: auto / span 1;
    }

    .e:nth-of-type(5) {
        order: 4;
        grid-row: auto / span 2;
    }
    .h:nth-of-type(8) {
        order: 9;
    }
    .c:nth-of-type(3) {
        order: 5;
        grid-row: auto / span 1;
    }
    .f:nth-of-type(6) {
        order: 6;
        grid-row: auto / span 1;
    }
}

@media (max-width: 370px) {
    .b:nth-of-type(2) {
        order: 2;
        grid-column: auto / span 1;
    }
    .d:nth-of-type(4) {
        order: 3;
        grid-column: auto / span 1 !important;
    }
}
</style>
