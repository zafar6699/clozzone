export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: true,
    target: "server",
    head: {
        title: "clozzone",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1.0, maximum-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "https://cdn.envybox.io/widget/cbk.css" }
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
                type: "text/javascript"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/sass/style.scss",
        "vue-slick-carousel/dist/vue-slick-carousel.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "@/plugins/vue-slick-carousel.js", ssr: false },
        { src: "@/plugins/vue-carousel.js", ssr: false },
        { src: "@/plugins/persistate.js", ssr: false },
        { src: "@/plugins/uzcard.js", ssr: false },
        { src: "~/plugins/vue-swiper.js", ssr: false },
        { src: "@/plugins/spinner.js", ssr: false },
        { src: "@/plugins/v-mask.js", ssr: false },
        { src: "@plugins/axios.js", ssr: false },
        { src: "@plugins/vuelidate.js", ssr: false }

        // { src: "~/plugins/loading-util.client.js" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        "~/components/",
        { path: "~/components/product/", prefix: "product" }
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/auth-next",
        "@nuxtjs/i18n"
    ],
    i18n: {
        locales: [
            {
                code: "uz",
                file: "uz.js"
            },
            {
                code: "ru",
                file: "ru.js"
            }
        ],
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
        defaultLocale: "ru"
    },
    loading: "~/components/Loader.vue",
    auth: {
        // redirect: {
        //     login: "/auth/login",
        //     logout: "/auth/login",
        //     callback: "/auth/login",
        //     home: "/"
        // },
        strategies: {
            local: {
                token: {
                    property: "token"
                    // required: true,
                    // type: 'Bearer'
                    // name: "token"
                },
                user: {
                    property: "data",
                    autoFetch: true
                },
                endpoints: {
                    login: { url: "/user/login", method: "post" },
                    user: { url: "/user/me", method: "get" }
                }
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "https://uzecom.com/api/"
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vue-slick"]
    }
};
