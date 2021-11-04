<template>
    <li class="parent-li">
        <button class="value" @click.prevent="clickButton">
            <nuxt-link
                :to="{
                    name: 'filter___' + $i18n.locale,
                    query: {
                        category: node._id
                    }
                }"
                >{{ node.name[$i18n.locale] }}</nuxt-link
            >

            <div class="actions">
                <span
                    class="angle"
                    v-if="node.children && node.children.length"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                    >
                        <path
                            d="M1 13L7 7L0.999999 1"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </button>

        <ul class="children-ul" v-if="node.children && node.children.length">
            <children
                v-for="(child, index) in node.children"
                :key="index"
                :node="child"
            ></children>
        </ul>
    </li>
</template>

<script>
export default {
    name: "children",
    props: {
        node: Object
    },
    data() {
        return {};
    },
    methods: {
        clickButton(event) {
            console.log(event.target.tagName);
            if (event.target.tagName == "A") {
                this.$store.commit("changeMobile");
            }
            if (
                event.target.nextElementSibling != null &&
                event.target.tagName != "A"
            ) {
                event.target.nextElementSibling.classList.toggle("active");
                event.target.classList.toggle("active-li");
                event.target.lastChild.lastChild.classList.toggle("rotate");
            }

            if (
                event.target.nextElementSibling != null &&
                event.target.tagName != "SPAN"
            ) {
            }
        }
    }
};
</script>
