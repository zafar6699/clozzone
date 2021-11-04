<template>
    <div>
        <header id="header">
            <div
                class="activate-box"
                v-if="$auth.loggedIn && !$auth.user.isActive"
            >
                <h6>{{ $t("profilactive") }}</h6>

                <button @click="clickActivate">{{ $t("active") }}</button>
            </div>

            <div class="container-z">
                <div class="header">
                    <div class="left">
                        <nuxt-link to="/" class="logo">
                            <img src="@/assets/img/clozzz.png" alt="" />
                        </nuxt-link>
                        <div class="menu" v-if="category != null">
                            <ul class="menu-ul">
                                <li
                                    class="menu-li"
                                    v-for="(cat, index) in category"
                                    :key="index"
                                >
                                    <nuxt-link
                                        class="menu-a"
                                        :to="{
                                            name: 'filter___' + $i18n.locale,
                                            query: { category: cat._id }
                                        }"
                                        @click="clickCat(cat._id)"
                                        >{{ cat.name[$i18n.locale] }}
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1 9L5 5L1 1"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                /></svg></span
                                    ></nuxt-link>
                                    <div class="category-man">
                                        <div class="row">
                                            <div
                                                class="col-3"
                                                v-for="(i,
                                                index2) in cat.children"
                                                :key="index2"
                                            >
                                                <nuxt-link
                                                    :to="{
                                                        name:
                                                            'filter___' +
                                                            $i18n.locale,
                                                        query: {
                                                            category: i._id
                                                        }
                                                    }"
                                                    >{{
                                                        i.name[$i18n.locale]
                                                    }}</nuxt-link
                                                >
                                                <ul>
                                                    <li
                                                        v-for="(j,
                                                        index3) in i.children"
                                                        :key="index3"
                                                    >
                                                        <nuxt-link
                                                            :to="{
                                                                name:
                                                                    'filter___' +
                                                                    $i18n.locale,
                                                                query: {
                                                                    category:
                                                                        j._id
                                                                }
                                                            }"
                                                            >{{
                                                                j.name[
                                                                    $i18n.locale
                                                                ]
                                                            }}</nuxt-link
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        v-if="index > 1"
                                        class="category-man det"
                                    >
                                        <div class="row child-out">
                                            <div class="col-3">
                                                <ul class="det-ul">
                                                    <li
                                                        class="child-link"
                                                        v-for="(tab,
                                                        index4) in cat.children"
                                                        :key="index4"
                                                        :data-target="
                                                            'cat-children' +
                                                                index4
                                                        "
                                                    >
                                                        <nuxt-link
                                                            :to="{
                                                                name:
                                                                    'filter___' +
                                                                    $i18n.locale,
                                                                query: {
                                                                    category:
                                                                        tab._id
                                                                }
                                                            }"
                                                            @click="
                                                                clickCat(
                                                                    tab._id
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                tab.name[
                                                                    $i18n.locale
                                                                ]
                                                            }}
                                                        </nuxt-link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <aside
                                                v-for="(tab,
                                                index5) in cat.children"
                                                :key="index5"
                                                :class="
                                                    index5 == 0
                                                        ? 'col-9  active-child'
                                                        : 'col-9'
                                                "
                                                :id="'cat-children' + index5"
                                            >
                                                <div class="row">
                                                    <div
                                                        class="col-3"
                                                        v-for="(i,
                                                        index6) in tab.children"
                                                        :key="index6"
                                                    >
                                                        <nuxt-link
                                                            :to="{
                                                                name:
                                                                    'filter___' +
                                                                    $i18n.locale,
                                                                query: {
                                                                    category:
                                                                        i._id
                                                                }
                                                            }"
                                                            >{{
                                                                i.name[
                                                                    $i18n.locale
                                                                ]
                                                            }}</nuxt-link
                                                        >
                                                        <ul>
                                                            <li
                                                                v-for="(j,
                                                                index7) in i.children"
                                                                :key="index7"
                                                            >
                                                                <nuxt-link
                                                                    :to="{
                                                                        name:
                                                                            'filter___' +
                                                                            $i18n.locale,
                                                                        query: {
                                                                            category:
                                                                                j._id
                                                                        }
                                                                    }"
                                                                    >{{
                                                                        j.name[
                                                                            $i18n
                                                                                .locale
                                                                        ]
                                                                    }}</nuxt-link
                                                                >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="search">
                            <input
                                type="search"
                                v-model="search"
                                autocomplete="off"
                                name="searchds"
                                :placeholder="$t('inputsearch')"
                                @keyup.enter="searchEvent"
                            />
                            <span @click="searchEvent"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    /></svg
                            ></span>
                        </div>
                    </div>

                    <div class="right">
                        <nuxt-link
                            v-if="likeCount > 0 && $auth.loggedIn"
                            :to="{ name: `products___${$i18n.locale}` }"
                            class="heart"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                            >
                                <path
                                    d="M18.0837 2.50292C17.6195 2.02645 17.0683 1.64848 16.4616 1.39061C15.8549 1.13273 15.2046 1 14.5479 1C13.8912 1 13.2409 1.13273 12.6342 1.39061C12.0275 1.64848 11.4763 2.02645 11.0121 2.50292L10.0486 3.4913L9.08509 2.50292C8.14733 1.54094 6.87545 1.0005 5.54926 1.0005C4.22306 1.0005 2.95118 1.54094 2.01342 2.50292C1.07566 3.46491 0.548828 4.76964 0.548828 6.1301C0.548828 7.49055 1.07566 8.79528 2.01342 9.75727L2.97691 10.7457L10.0486 18L17.1203 10.7457L18.0837 9.75727C18.5482 9.28102 18.9167 8.71557 19.1681 8.0932C19.4194 7.47084 19.5488 6.80377 19.5488 6.1301C19.5488 5.45642 19.4194 4.78935 19.1681 4.16699C18.9167 3.54463 18.5482 2.97917 18.0837 2.50292Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span class="like-count">
                                {{ likeCount }}
                            </span>
                        </nuxt-link>

                        <nuxt-link
                            v-else
                            :to="{ name: `products___${$i18n.locale}` }"
                            class="heart"
                        >
                            <span v-if="$auth.loggedIn"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="19"
                                    viewBox="0 0 21 19"
                                    fill="none"
                                >
                                    <path
                                        d="M18.0818 2.50292C17.6175 2.02645 17.0663 1.64848 16.4596 1.39061C15.8529 1.13273 15.2027 1 14.546 1C13.8893 1 13.239 1.13273 12.6323 1.39061C12.0256 1.64848 11.4744 2.02645 11.0101 2.50292L10.0466 3.4913L9.08314 2.50292C8.14538 1.54094 6.8735 1.0005 5.5473 1.0005C4.22111 1.0005 2.94923 1.54094 2.01147 2.50292C1.0737 3.46491 0.546875 4.76964 0.546875 6.1301C0.546875 7.49055 1.0737 8.79528 2.01147 9.75727L2.97496 10.7457L10.0466 18L17.1183 10.7457L18.0818 9.75727C18.5463 9.28102 18.9147 8.71557 19.1661 8.0932C19.4175 7.47084 19.5469 6.80377 19.5469 6.1301C19.5469 5.45642 19.4175 4.78935 19.1661 4.16699C18.9147 3.54463 18.5463 2.97917 18.0818 2.50292V2.50292Z"
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    /></svg
                            ></span>
                        </nuxt-link>

                        <div class="lang">
                            <div class="til" @click="changeLang">
                                <button>
                                    <span v-if="$i18n.locale == 'uz'">O'z</span>
                                    <span v-if="$i18n.locale == 'ru'">Ру</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="6"
                                        viewBox="0 0 8 6"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.95898 1.56258L7.31315 0.916748L4.00065 4.22925L0.688151 0.916748L0.0423178 1.56258L4.00065 5.50008L7.95898 1.56258Z"
                                            fill="#1E6BDD"
                                        />
                                    </svg>
                                </button>

                                <div class="til-menu" v-if="isLangMenu">
                                    <div class="">
                                        <ul
                                            class="classLang"
                                            style="list-style:none"
                                        >
                                            <li>
                                                <h6 @click.prevent="clickUz">
                                                    O'z
                                                </h6>
                                            </li>

                                            <li>
                                                <h6 @click.prevent="clickRu">
                                                    Ру
                                                </h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- <button>
                                En
                                <span
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="6"
                                        viewBox="0 0 8 6"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 1.41142L4 4.58789L7 1.41142"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        /></svg
                                ></span>
                            </button> -->
                        </div>
                        <div class="korzina">
                            <button @click="$store.commit('CHANGE_MENU')">
                                <span
                                    ><svg
                                        :class="
                                            basketCount > 0
                                                ? 'svg white'
                                                : 'svg'
                                        "
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="18"
                                        viewBox="0 0 19 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.2854 4.24684L18.2853 4.24687L18.2896 4.25408C18.4148 4.46679 18.4867 4.70844 18.4983 4.95744C18.5099 5.20505 18.4614 5.45141 18.3577 5.67463L15.1424 12.2286C15.1423 12.2288 15.1422 12.2289 15.1421 12.2291C15.101 12.312 15.0388 12.3804 14.9637 12.4278C14.8887 12.475 14.8032 12.4998 14.7165 12.5002H5.88694H5.87821L5.86949 12.5005C5.76338 12.5042 5.65811 12.4713 5.57078 12.4054C5.48326 12.3394 5.41852 12.2437 5.38927 12.1328L5.38922 12.1326L2.68123 1.87292L2.58294 1.50052H2.19779H0.981156C0.856643 1.50052 0.735266 1.4502 0.644268 1.35746C0.552955 1.26439 0.5 1.13619 0.5 1.00055C0.5 0.864923 0.552955 0.736715 0.644268 0.643651C0.735266 0.550909 0.856643 0.500586 0.981156 0.500586H2.94347H2.95219L2.96091 0.500282C3.06702 0.496578 3.17229 0.529486 3.25962 0.595348L3.55623 0.202072L3.25962 0.595348C3.34656 0.660914 3.41102 0.75575 3.44054 0.865763L4.00883 3.12258L4.10399 3.50049H4.4937H17.0481C17.2977 3.50525 17.5424 3.57549 17.7587 3.70519C17.9762 3.83559 18.158 4.0219 18.2854 4.24684ZM6.36809 16.5C6.36809 17.0613 5.92412 17.5 5.39636 17.5C4.86859 17.5 4.42462 17.0613 4.42462 16.5C4.42462 15.9388 4.86859 15.5001 5.39636 15.5001C5.92412 15.5001 6.36809 15.9388 6.36809 16.5ZM16.1797 16.5C16.1797 17.0613 15.7357 17.5 15.2079 17.5C14.6802 17.5 14.2362 17.0613 14.2362 16.5C14.2362 15.9388 14.6802 15.5001 15.2079 15.5001C15.7357 15.5001 16.1797 15.9388 16.1797 16.5Z"
                                            stroke="white"
                                        /></svg
                                ></span>

                                <span
                                    v-show="basketCount > 0"
                                    class="like-count"
                                >
                                    {{ basketCount }}
                                </span>
                            </button>
                        </div>
                        <button
                            class="login"
                            @click="visibleForm = true"
                            v-if="!$auth.loggedIn"
                        >
                            {{ $t("kirish") }}
                        </button>

                        <div class="profil" v-else>
                            <button
                                class="kalla-btn"
                                @click="isProfilMenu = !isProfilMenu"
                            >
                                <span>
                                    <svg
                                        :class="isProfilMenu ? 'black' : ''"
                                        width="20"
                                        height="23"
                                        viewBox="0 0 20 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.99926 11.2485C12.9228 11.2485 15.293 8.73046 15.293 5.62428C15.293 2.51804 14.5148 0 9.99926 0C5.48372 0 4.7054 2.51804 4.7054 5.62428C4.7054 8.73046 7.0756 11.2485 9.99926 11.2485Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M0.00104224 19.836C-0.000762974 19.7827 0.000139634 19.6466 0.00104224 19.836V19.836Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M19.9985 19.984C19.9995 19.6243 20.0014 19.9321 19.9985 19.984V19.984Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M19.9863 19.6089C19.8883 14.1979 19.0803 12.656 12.8979 11.6801C12.8979 11.6801 12.0276 12.6501 9.99915 12.6501C7.9707 12.6501 7.10028 11.6801 7.10028 11.6801C0.985277 12.6454 0.128223 14.1644 0.0155321 19.4332C0.0062914 19.8634 0.00269505 19.886 0.00104224 19.836C0.00141788 19.9296 0.0011826 20.1027 0.0011826 20.4045C0.0011826 20.4045 1.47308 23 9.99915 23C18.5251 23 19.9971 20.4045 19.9971 20.4045C19.9971 20.2106 19.9973 20.0758 19.9975 19.984C19.9958 20.0149 19.9925 19.9551 19.9863 19.6089Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <!-- {{ $auth.user.name }} -->
                            <div v-if="isProfilMenu" class="profil-menu">
                                <div class="yopish">
                                    <button
                                        @click="isProfilMenu = !isProfilMenu"
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M21.0735 23.4978C21.7429 24.1672 22.8284 24.1672 23.4978 23.4978C24.1672 22.8284 24.1672 21.7429 23.4978 21.0735L14.4243 12L23.4978 2.92648C24.1672 2.257 24.1672 1.17159 23.4978 0.502121C22.8284 -0.167347 21.7429 -0.167347 21.0735 0.502121L12 9.57562L2.92646 0.502102C2.25699 -0.167367 1.17157 -0.167367 0.502102 0.502102C-0.167367 1.17157 -0.167367 2.25699 0.502102 2.92646L9.57562 12L0.5021 21.0735C-0.167367 21.7429 -0.167367 22.8284 0.5021 23.4978C1.17157 24.1674 2.25699 24.1674 2.92646 23.4978L12 14.4243L21.0735 23.4978Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <ul class="isProfil">
                                    <li>
                                        <a
                                            href="#"
                                            @click="isMiddle = !isMiddle"
                                        >
                                            <p>{{ $t("myzakaz") }}</p>
                                            <button>
                                                <span
                                                    ><svg
                                                        :class="
                                                            isMiddle
                                                                ? 'middle'
                                                                : ' '
                                                        "
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="9"
                                                            cy="9"
                                                            r="9"
                                                            transform="rotate(-90 9 9)"
                                                            fill="#495057"
                                                        />
                                                        <path
                                                            d="M7 13L11 9L7 5"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </a>
                                        <ul
                                            v-if="isMiddle"
                                            @click="
                                                isProfilMenu = !isProfilMenu
                                            "
                                        >
                                            <li>
                                                <nuxt-link
                                                    :to="{
                                                        name: `myorder___${$i18n.locale}`
                                                    }"
                                                    >{{
                                                        $t("zakazsite")
                                                    }}</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    :to="{
                                                        name: `url___${$i18n.locale}`
                                                    }"
                                                >
                                                    {{
                                                        $t("zakazsite2")
                                                    }}</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>

                                    <li @click="isProfilMenu = !isProfilMenu">
                                        <nuxt-link
                                            :to="{
                                                name: `buy___${$i18n.locale}`
                                            }"
                                        >
                                            {{ $t("zakazsilka") }}</nuxt-link
                                        >
                                    </li>
                                    <li @click="isProfilMenu = !isProfilMenu">
                                        <nuxt-link
                                            :to="{
                                                name: `profile___${$i18n.locale}`
                                            }"
                                            >{{ $t("izmprofil") }}</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <a href="#" @click="logout">{{
                                            $t("exitprofil")
                                        }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="auth-relative">
                <div class="auth-register" v-if="visibleForm">
                    <div class="auth-top">
                        <button @click="formHide">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                                    stroke="#FFC600"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <div class="auth-inner" v-if="loginTab == 1">
                        <div class="form-group">
                            <h2>{{ $t("phone") }}</h2>
                            <input
                                type="text"
                                v-model="login.phone"
                                @change="setPhoneLogin($event.target.value)"
                            />
                            <h6
                                class="error-text"
                                v-if="!$v.login.phone.required && check2"
                            >
                                {{ $t("tolshart") }}
                            </h6>

                            <h6
                                class="error-text"
                                v-if="!$v.login.phone.minLength && check2"
                            >
                                {{ $t("toldir") }}
                            </h6>
                        </div>
                        <div class="form-group">
                            <h2>{{ $t("password") }}</h2>
                            <div class="input-relative">
                                <input
                                    :type="isShow ? 'text' : 'password'"
                                    v-model="login.password"
                                    @change="
                                        setPasswordLogin($event.target.value)
                                    "
                                />

                                <button class="eye" @click="toggleShow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="text-action">
                            <h3 @click="loginTab = 4">{{ $t("register") }}</h3>
                            <h4 @click="loginTab = 2">
                                {{ $t("zabiliparol") }}
                            </h4>
                        </div>

                        <h6 class="error-text" v-if="invalid">
                            {{ $t("mistake") }}
                        </h6>

                        <div class="button-send">
                            <button @click="loginUser" class="enter-btn">
                                {{ $t("kirish") }}
                            </button>
                        </div>
                    </div>

                    <div class="auth-inner" v-if="loginTab == 2">
                        <h1 class="title">
                            {{ $t("re") }}
                        </h1>

                        <p class="text">
                            {{ $t("entercode") }}
                        </p>
                        <div class="form-group">
                            <input
                                type="text"
                                v-model="reset.phone"
                                @change="setPhoneReset($event.target.value)"
                            />

                            <h6
                                class="error-text"
                                v-if="!$v.reset.phone.required && check3"
                            >
                                {{ $t("tolshart") }}
                            </h6>

                            <h6
                                class="error-text"
                                v-if="!$v.reset.phone.minLength && check3"
                            >
                                {{ $t("toldir") }}
                            </h6>

                            <h6 class="error-text" v-if="invalidPhone">
                                {{ $t("wrongphone") }}
                            </h6>
                        </div>

                        <div class="button-send">
                            <button @click="sendNumber">{{ $t("sms") }}</button>
                        </div>
                    </div>

                    <div class="auth-inner" v-if="loginTab == 3">
                        <h1 class="title">
                            {{ $t("re") }}
                        </h1>

                        <p class="text">
                            {{ $t("writecode") }}
                        </p>
                        <div class="form-group">
                            <input type="number" v-model="resetCode" />
                        </div>

                        <div class="text-action">
                            <div>
                                <h6 class="error-text" v-if="errorCode">
                                    {{ $t("wrongcode") }}
                                </h6>
                            </div>
                            <h4 @click="loginTab = 2">{{ $t("recode") }}</h4>
                        </div>

                        <div class="button-send">
                            <button @click="sendCode">{{ $t("okey") }}</button>
                        </div>
                    </div>

                    <div class="auth-inner" v-if="loginTab == 6">
                        <h1 class="title">
                            {{ $t("re") }}
                        </h1>

                        <p class="text">
                            {{ $t("writecode") }}
                        </p>
                        <div class="form-group">
                            <input type="number" v-model="resetCode2" />
                        </div>

                        <div class="text-action">
                            <div>
                                <h6 class="error-text" v-if="errorCode2">
                                    {{ $t("wrongcode") }}
                                </h6>
                            </div>
                        </div>

                        <div class="button-send">
                            <button @click="sendCodeUser">
                                {{ $t("okey") }}
                            </button>
                        </div>
                    </div>

                    <div class="auth-inner" v-if="loginTab == 5">
                        <h1 class="title">
                            {{ $t("newparol") }}
                        </h1>

                        <div class="form-group">
                            <input
                                :type="isShow ? 'text' : 'password'"
                                @change="setPasswordNew($event.target.value)"
                                v-model="newPassword"
                            />

                            <h6
                                class="error-text"
                                v-if="!$v.newPassword.required && check4"
                            >
                                {{ $t("tolshart") }}
                            </h6>

                            <h6
                                class="error-text"
                                v-if="!$v.newPassword.minLength && check4"
                            >
                                {{ $t("toldir") }}
                            </h6>
                        </div>

                        <div class="button-send">
                            <button @click="sendPassword">
                                {{ $t("okey") }}
                            </button>
                        </div>
                    </div>

                    <div class="auth-inner" v-if="loginTab == 4">
                        <div class="form-group">
                            <h2>{{ $t("name") }}</h2>
                            <input type="text" v-model="register.name" />
                            <h6
                                class="error-text"
                                v-if="!$v.register.name.required && check"
                            >
                                {{ $t("toldir") }}
                            </h6>
                        </div>

                        <div class="form-group">
                            <h2>{{ $t("phone") }}</h2>
                            <input
                                type="text"
                                v-model="register.phone"
                                @change="setPhone($event.target.value)"
                            />

                            <h6
                                class="error-text"
                                v-if="!$v.register.phone.required && check"
                            >
                                {{ $t("tolshart") }}
                            </h6>

                            <h6
                                class="error-text"
                                v-if="!$v.register.phone.minLength && check"
                            >
                                {{ $t("toldir") }}
                            </h6>
                        </div>
                        <div class="form-group">
                            <h2>{{ $t("newparol") }}</h2>
                            <div class="input-relative">
                                <input
                                    :type="isShow ? 'text' : 'password'"
                                    v-model="register.password"
                                />

                                <button class="eye" @click="toggleShow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <h2>{{ $t("repassword") }}</h2>
                            <div class="input-relative">
                                <input
                                    :type="isShow ? 'text' : 'password'"
                                    @change="setPassword($event.target.value)"
                                    v-model="register.passwordConfirm"
                                />

                                <button class="eye" @click="toggleShow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h6
                            class="error-text"
                            v-if="
                                !$v.register.passwordConfirm.required && check
                            "
                        >
                            {{ $t("tolshart") }}
                        </h6>
                        <h6
                            class="error-text"
                            v-if="
                                !$v.register.passwordConfirm.minLength && check
                            "
                        >
                            {{ $t("parolsimvol") }}
                        </h6>

                        <div class="confirm-check">
                            <span class="checkbox">
                                <label class="cont">
                                    <input
                                        type="checkbox"
                                        :value="true"
                                        v-model="register.check"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </span>

                            <p>
                                {{ $t("rozi") }}
                                <nuxt-link to="/">{{
                                    $t("rozitwo")
                                }}</nuxt-link>
                            </p>
                        </div>

                        <h6
                            class="error-text"
                            v-if="!$v.register.check.checked && check"
                        >
                            {{ $t("tolshart") }}
                        </h6>

                        <div class="button-send">
                            <button @click="registerUser">
                                {{ $t("register") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div
            :class="isMobile ? 'fixvh-mobile close-fixvh' : 'fixvh-mobile'"
            @click="openMenu"
        ></div>

        <div
            :class="isMobile ? 'mobile-nav-menu close-nav' : 'mobile-nav-menu'"
        >
            <div class="nav-input">
                <input
                    type="text"
                    v-model="search"
                    :placeholder="$t('inputsearch')"
                    @keyup.enter="searchEvent"
                />
                <span @click="searchEvent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                    >
                        <path
                            d="M19 15.5005L14.65 11.9081M17 7.24204C17 10.8909 13.4183 13.8488 9 13.8488C4.58172 13.8488 1 10.8909 1 7.24204C1 3.59321 4.58172 0.635254 9 0.635254C13.4183 0.635254 17 3.59321 17 7.24204Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </div>

            <div class="ul-mobile" v-if="category != null">
                <ul
                    class="tree-list"
                    v-for="(item, index) in category"
                    :key="index"
                    :tree="item"
                >
                    <node-tree :node="item"></node-tree>
                </ul>
            </div>
        </div>

        <div class="bottom-menu">
            <div class="bot-menu">
                <button
                    @click="openMenu"
                    :class="isMobile ? 'one golden' : 'one'"
                >
                    <span>
                        <svg
                            width="60"
                            height="35"
                            viewBox="0 0 60 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.5"
                                y="0.5"
                                width="59"
                                height="6"
                                rx="1.5"
                                stroke="white"
                            />
                            <rect
                                x="0.5"
                                y="14.5"
                                width="29"
                                height="6"
                                rx="1.5"
                                stroke="white"
                            />
                            <rect
                                x="0.5"
                                y="28.5"
                                width="49"
                                height="6"
                                rx="1.5"
                                stroke="white"
                            />
                        </svg>
                    </span>
                    {{ $t("menu") }}
                </button>
                <button @click="clickCor">
                    <span>
                        <svg
                            width="38"
                            height="35"
                            viewBox="0 0 38 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.0089 8.03032L37.0088 8.03036L37.0132 8.03761C37.3035 8.51716 37.4693 9.06014 37.4961 9.6181C37.5229 10.1746 37.4106 10.7291 37.169 11.2326L30.7355 23.982C30.7353 23.9823 30.7352 23.9825 30.7351 23.9828C30.6141 24.2203 30.4288 24.4207 30.1992 24.5613C29.9695 24.702 29.7045 24.7772 29.4338 24.7781C29.4336 24.7781 29.4334 24.7781 29.4332 24.7781L11.7739 24.7781H11.7654L11.7569 24.7784C11.4256 24.7896 11.1007 24.6893 10.8351 24.4946C10.5696 24.2999 10.3793 24.0226 10.2941 23.7084L10.2941 23.7083L4.87811 3.7589L4.77793 3.3899H4.39558H1.96231C1.57301 3.3899 1.20057 3.23662 0.926675 2.96523C0.652939 2.694 0.5 2.32711 0.5 1.94552C0.5 1.56394 0.652939 1.19704 0.926675 0.925809C1.20057 0.65442 1.57301 0.50114 1.96231 0.50114H5.88694H5.89542L5.9039 0.500853C6.23523 0.489607 6.56015 0.589901 6.82573 0.784627L7.11973 0.383659L6.82573 0.784628C7.09051 0.978775 7.28048 1.25514 7.36599 1.56831L8.50336 5.95965L8.60039 6.33428H8.98739H34.1009C34.6922 6.34437 35.2706 6.50583 35.7799 6.80266C36.2902 7.10012 36.7135 7.52324 37.0089 8.03032ZM13.2362 32.0834C13.2362 33.4137 12.1465 34.5 10.7927 34.5C9.43889 34.5 8.34925 33.4137 8.34925 32.0834C8.34925 30.7531 9.43889 29.6669 10.7927 29.6669C12.1465 29.6669 13.2362 30.7531 13.2362 32.0834ZM32.8593 32.0834C32.8593 33.4137 31.7697 34.5 30.4158 34.5C29.062 34.5 27.9724 33.4137 27.9724 32.0834C27.9724 30.7531 29.062 29.6669 30.4158 29.6669C31.7697 29.6669 32.8593 30.7531 32.8593 32.0834Z"
                                stroke="white"
                            />
                        </svg>
                    </span>
                    {{ $t("mycor") }}
                </button>
                <nuxt-link
                    :to="{ name: 'info___' + $i18n.locale, query: { page: 1 } }"
                >
                    <span
                        @click="
                            isGold = false;
                            $store.commit('falseMobile');
                        "
                        ><svg
                            width="28"
                            height="35"
                            viewBox="0 0 28 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 16.5656C28 14.6615 27.1837 12.9559 25.9011 11.7991C25.5775 5.26001 20.3235 0 13.9959 0C7.67589 0 2.42187 5.26035 2.09827 11.7998C0.816014 12.9562 0 14.6618 0 16.5656C0 20.0417 2.70881 22.8693 6.0383 22.8693C6.46103 22.8693 6.80393 22.5117 6.80393 22.0698L6.80426 11.062C6.80426 10.8496 6.72377 10.6467 6.58013 10.4968C6.4365 10.3469 6.24149 10.2625 6.03863 10.2625C5.22589 10.2625 4.45143 10.4333 3.74306 10.7383C4.53683 5.58276 8.86229 1.59873 14.0038 1.59873C19.138 1.59873 23.4628 5.58276 24.2566 10.7383C23.5482 10.4333 22.7741 10.2625 21.9617 10.2625C21.539 10.2625 21.1961 10.6201 21.1961 11.062V22.0698C21.1961 22.5117 21.539 22.8693 21.9617 22.8693C22.7754 22.8693 23.5512 22.6982 24.2602 22.3922C23.6134 26.6231 20.5885 30.1263 16.5696 31.1898C16.1083 30.2933 15.1326 29.6679 13.9962 29.6679C12.4182 29.6679 11.1346 30.864 11.1346 32.334C11.1346 33.8039 12.4182 35 13.9962 35C15.4133 35 16.5846 34.0328 16.8101 32.7708C21.9015 31.4897 25.637 26.8079 25.904 21.33C27.185 20.1729 28 18.4683 28 16.5656ZM5.27235 21.2026C3.15117 20.8218 1.53158 18.8873 1.53158 16.5656C1.53158 14.2438 3.15117 12.31 5.27268 11.9292L5.27235 21.2026ZM13.9962 33.4013C13.263 33.4013 12.6662 32.9224 12.6662 32.334C12.6662 31.7455 13.263 31.2667 13.9962 31.2667C14.7295 31.2667 15.3259 31.7455 15.3259 32.334C15.3259 32.9224 14.7295 33.4013 13.9962 33.4013ZM22.7276 11.9292C24.8488 12.31 26.4684 14.2438 26.4684 16.5656C26.4684 18.8873 24.8488 20.8218 22.7276 21.2026V11.9292Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                    {{ $t("help") }}
                </nuxt-link>
                <nuxt-link
                    @click="
                        isGold = false;
                        $store.commit('changeMobile');
                    "
                    :to="{ name: 'products___' + $i18n.locale }"
                >
                    <span
                        ><svg
                            width="43"
                            height="36"
                            viewBox="0 0 43 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M38.8385 4.00585C37.8367 3.05291 36.6472 2.29697 35.3381 1.78121C34.0289 1.26546 32.6257 1 31.2086 1C29.7914 1 28.3882 1.26546 27.079 1.78121C25.7699 2.29697 24.5804 3.05291 23.5786 4.00585L21.4995 5.98261L19.4204 4.00585C17.3968 2.08187 14.6522 1.001 11.7904 1.001C8.92861 1.001 6.18403 2.08187 4.16043 4.00585C2.13684 5.92982 1 8.53929 1 11.2602C1 13.9811 2.13684 16.5906 4.16043 18.5145L6.23955 20.4913L21.4995 35L36.7594 20.4913L38.8385 18.5145C39.8408 17.562 40.6359 16.4311 41.1783 15.1864C41.7208 13.9417 42 12.6075 42 11.2602C42 9.91285 41.7208 8.5787 41.1783 7.33398C40.6359 6.08925 39.8408 4.95834 38.8385 4.00585V4.00585Z"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    {{ $t("heart") }}
                </nuxt-link>
                <button
                    @click="clickProfil"
                    :class="isProfilMenu || visibleForm ? 'button-active' : ''"
                >
                    <span>
                        <img src="@/assets/img/kalla.png" alt="" />
                    </span>
                    {{ $t("myaccount") }}
                </button>
            </div>
        </div>

        <div
            :class="isMenu ? 'modal-card show' : 'modal-card'"
            v-if="busket != null"
        >
            <div class="modal-window">
                <div v-if="busket.length > 0">
                    <div class="div">
                        <div class="head-modal">
                            <p class="mycor">{{ $t("mycor") }}</p>
                            <button @click="$store.commit('CHANGE_MENU')">
                                <svg
                                    width="32"
                                    height="32"
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
                        <div class="vh">
                            <div
                                class="pro-modal"
                                v-for="(item, index) in busket"
                                :key="index"
                            >
                                <div class="line-modal"></div>
                                <div class="content-modal">
                                    <div class="left">
                                        <img
                                            :src="
                                                $store.state.uploads +
                                                    item.image
                                            "
                                            alt=""
                                        />
                                    </div>
                                    <div class="right">
                                        <p class="summa">
                                            {{ regex(item.product.price) }}
                                            {{ $t("sum") }}
                                        </p>
                                        <p class="name">
                                            {{
                                                item.product.name[$i18n.locale]
                                            }}
                                        </p>

                                        <div class="aside-z">
                                            <div class="item">
                                                <h3>{{ $t("brand") }}</h3>
                                                <h4>
                                                    {{
                                                        item.product.brand.name
                                                    }}
                                                </h4>
                                            </div>
                                            <div class="item">
                                                <h3>{{ $t("size") }}</h3>
                                                <span class="size"
                                                    ><b>{{
                                                        item.param.size.size
                                                            .size
                                                    }}</b>
                                                </span>
                                            </div>
                                            <div class="item">
                                                <h3>{{ $t("color") }}</h3>
                                                <span
                                                    class="color"
                                                    :style="
                                                        'background-color:' +
                                                            item.color
                                                    "
                                                >
                                                </span>
                                            </div>
                                        </div>

                                        <div class="btns">
                                            <button
                                                @click="clickOneOrder(item._id)"
                                                class="buy"
                                            >
                                                {{ $t("oformit") }}
                                            </button>
                                            <nuxt-link
                                                :to="{
                                                    name: `busket-id___${$i18n.locale}`,
                                                    params: {
                                                        id: item.product._id
                                                    }
                                                }"
                                                class="edit"
                                            >
                                                <span
                                                    ><svg
                                                        width="15"
                                                        height="18"
                                                        viewBox="0 0 15 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.2306 1.98225L9.84307 1.66627L9.84307 1.66627L10.2306 1.98225ZM11.6569 1.21407L11.6063 0.71663L11.6569 1.21407ZM13.9769 3.10578L14.4743 3.05521L13.9769 3.10578ZM13.5115 4.65754L13.899 4.97352L13.5115 4.65754ZM4.48236 15.7306L4.66203 16.1972C4.74324 16.1659 4.81487 16.114 4.86986 16.0466L4.48236 15.7306ZM0.501025 17.2637L0.00780941 17.1816C-0.0216486 17.3586 0.0459904 17.5378 0.185049 17.6512C0.324107 17.7646 0.513262 17.7948 0.680704 17.7303L0.501025 17.2637ZM1.20146 13.0553L0.813954 12.7393C0.758965 12.8067 0.722527 12.8874 0.708242 12.9732L1.20146 13.0553ZM10.6181 2.29823C10.7522 2.13369 10.9175 1.99719 11.1044 1.89652L10.6303 1.01608C10.3277 1.17902 10.0602 1.39996 9.84307 1.66627L10.6181 2.29823ZM11.1044 1.89652C11.2913 1.79584 11.4963 1.73298 11.7075 1.7115L11.6063 0.71663C11.2645 0.75139 10.9328 0.853144 10.6303 1.01608L11.1044 1.89652ZM11.7075 1.7115C11.9187 1.69002 12.1321 1.71036 12.3354 1.77135L12.6227 0.813499C12.2936 0.714786 11.9482 0.68187 11.6063 0.71663L11.7075 1.7115ZM12.3354 1.77135C12.5388 1.83234 12.7282 1.93278 12.8927 2.06695L13.5246 1.29194C13.2583 1.07479 12.9518 0.912211 12.6227 0.813499L12.3354 1.77135ZM12.8927 2.06695C13.0572 2.20112 13.1937 2.36638 13.2944 2.5533L14.1748 2.07913C14.0119 1.77659 13.791 1.5091 13.5246 1.29194L12.8927 2.06695ZM13.2944 2.5533C13.3951 2.74022 13.4579 2.94514 13.4794 3.15636L14.4743 3.05521C14.4395 2.71334 14.3378 2.38167 14.1748 2.07913L13.2944 2.5533ZM13.4794 3.15636C13.5009 3.36758 13.4806 3.58096 13.4196 3.78432L14.3774 4.07158C14.4761 3.74244 14.509 3.39707 14.4743 3.05521L13.4794 3.15636ZM13.4196 3.78432C13.3586 3.98767 13.2581 4.17703 13.124 4.34157L13.899 4.97352C14.1161 4.70721 14.2787 4.40073 14.3774 4.07158L13.4196 3.78432ZM4.30268 15.264L0.321346 16.7971L0.680704 17.7303L4.66203 16.1972L4.30268 15.264ZM0.99424 17.3458L1.69467 13.1374L0.708242 12.9732L0.00780941 17.1816L0.99424 17.3458ZM1.58896 13.3713L9.64059 3.49699L8.86558 2.86504L0.813954 12.7393L1.58896 13.3713ZM9.64059 3.49699L10.6181 2.29823L9.84307 1.66627L8.86558 2.86504L9.64059 3.49699ZM13.124 4.34157L11.9807 5.74367L12.7557 6.37562L13.899 4.97352L13.124 4.34157ZM11.9807 5.74367L4.09485 15.4146L4.86986 16.0466L12.7557 6.37562L11.9807 5.74367ZM8.91374 3.54823L12.0288 6.42686L12.7075 5.69243L9.59242 2.8138L8.91374 3.54823Z"
                                                            fill="#333333"
                                                        />
                                                    </svg>
                                                </span>
                                            </nuxt-link>
                                            <button
                                                class="delete"
                                                @click="
                                                    deleteBasket(
                                                        item._id,
                                                        index
                                                    )
                                                "
                                            >
                                                <span
                                                    ><svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 3.8H2.55556M2.55556 3.8H15M2.55556 3.8V13.6C2.55556 13.9713 2.71944 14.3274 3.01117 14.5899C3.30289 14.8525 3.69855 15 4.11111 15H11.8889C12.3014 15 12.6971 14.8525 12.9888 14.5899C13.2806 14.3274 13.4444 13.9713 13.4444 13.6V3.8H2.55556ZM4.88889 3.8V2.4C4.88889 2.0287 5.05278 1.6726 5.3445 1.41005C5.63622 1.1475 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.1475 10.6555 1.41005C10.9472 1.6726 11.1111 2.0287 11.1111 2.4V3.8M6.44444 7.3V11.5M9.55556 7.3V11.5"
                                                            stroke="#333333"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    @click="clickOneOrder(item._id)"
                                    class="buy btn-show"
                                >
                                    {{ $t("oformit") }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="all">
                        <div>
                            <p>{{ $t("all") }}</p>
                            <span>
                                {{ regex(busketPrice) }} {{ $t("sum") }}
                            </span>
                        </div>

                        <button @click="clickOrder">
                            {{ $t("alloformit") }}
                        </button>
                    </div>
                </div>

                <div class="zero" v-else>
                    <div class="head-modal">
                        <p class="mycor">{{ $t("pust") }}</p>
                        <button @click="$store.commit('CHANGE_MENU')">
                            <svg
                                width="32"
                                height="32"
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
                        <img
                            class="pustoy"
                            src="@/assets/img/pustoycorzina.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

Vue.directive("click-outside", {
    bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    }
});

import { required, minLength, between } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            isLangMenu: false,
            isGold: false,
            mediaMenu: false,
            isMiddle: false,
            isProfilMenu: false,
            visibleForm: false,
            category: null,
            check: false,
            check2: false,
            invalidPhone: false,
            check3: false,
            check4: false,
            idList: [],
            loginTab: 1,
            invalid: false,
            errorCode: false,
            errorCode2: false,
            isShow: false,
            resetCode: "",
            resetCode2: "",
            hash: "",

            register: {
                name: "",
                phone: "",
                password: "",
                passwordConfirm: "",
                check: false
            },
            login: {
                phone: "",
                password: ""
            },
            reset: {
                phone: ""
            },
            newPassword: "",

            search: ""
        };
    },
    validations: {
        register: {
            name: {
                required
            },
            check: {
                checked: value => value === true
            },
            phone: {
                required,
                minLength: minLength(13)
            },
            passwordConfirm: {
                required,
                minLength: minLength(6)
            }
        },
        login: {
            phone: {
                required,
                minLength: minLength(13)
            },
            password: {
                required,
                minLength: minLength(6)
            }
        },
        reset: {
            phone: {
                required,
                minLength: minLength(13)
            }
        },
        newPassword: {
            required,
            minLength: minLength(6)
        }
    },

    async mounted() {
        // var new_scroll_position = 0;
        // var last_scroll_position;
        // var header = document.getElementById("header");

        // window.addEventListener("scroll", function(e) {
        //     last_scroll_position = window.scrollY;

        //     // Scrolling down
        //     if (
        //         new_scroll_position < last_scroll_position &&
        //         last_scroll_position > 80
        //     ) {
        //         // header.removeClass('slideDown').addClass('slideUp');
        //         header.classList.remove("slideDown");
        //         header.classList.add("slideUp");

        //         // Scrolling up
        //     } else if (new_scroll_position > last_scroll_position) {
        //         // header.removeClass('slideUp').addClass('slideDown');
        //         header.classList.remove("slideUp");
        //         header.classList.add("slideDown");
        //     }

        //     new_scroll_position = last_scroll_position;
        // });

        let category = await this.$store.state.category;

        console.log("cat->", category);

        this.category = category;

        $(document).ready(function() {
            $(".child-link").hover(function() {
                let data = $(this).attr("data-target");
                $(".child-out aside").removeClass("active-child");
                $(".child-out aside#" + data).addClass("active-child");
            });
        });

        console.log("bus", this.busket);

        this.$store.commit("COUNT_UP", this.$store.state.like.length);
        this.$store.commit("COUNT_BASKET", this.$store.state.basket.length);
    },

    computed: {
        likeCount() {
            return this.$store.state.likeCount;
        },
        basketCount() {
            return this.$store.state.basket.length;
        },
        isMobile() {
            return this.$store.state.isMobile;
        },
        busket() {
            return this.$store.state.basket;
        },
        busketPrice() {
            let basket = this.$store.state.basket;

            let s = 0;
            basket.forEach(item => {
                s = s + item.product.price;
            });

            return s;
        },
        isMenu() {
            return this.$store.state.isMenu;
        }
    },
    methods: {
        clickProfil() {
            if (this.$auth.loggedIn) {
                this.isProfilMenu = !this.isProfilMenu;
            } else {
                this.visibleForm = true;
            }

            this.$store.commit("changeMobileFalse");

            this.isGold = false;
        },
        changeLang() {
            this.isLangMenu = !this.isLangMenu;
        },
        clickCor() {
            this.isGold = false;
            this.isProfilMenu = false;
            this.$store.commit("changeMobileFalse");
            this.$store.commit("CHANGE_MENU");
        },
        logout() {
            this.$store.commit("COUNT_UP", 0);
            this.$store.commit("COUNT_BASKET", 0);
            this.$store.commit("GET_BASKET", []);
            this.$auth.logout();
        },

        openMenu() {
            this.isGold = !this.isGold;
            this.isProfilMenu = false;
            this.$store.commit("changeMobile");
            this.visibleForm = false;
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
        },
        async deleteBasket(id, index) {
            if (this.$auth.loggedIn) {
                await this.$axios.$delete("asket/" + id).then(async res => {
                    this.$store.dispatch("getBasket");
                });
            } else {
                if (this.$store.state.basket.length > 0) {
                    this.$store.commit("delete_basket", index);
                }
            }
        },
        searchEvent() {
            this.$store.commit("changeMobile");

            this.$router.push({
                name: `filter___${this.$i18n.locale}`,
                query: { search: this.search }
            });
        },
        clickOrder() {
            if (this.$auth.loggedIn) {
                this.$router.push({ name: `order___${this.$i18n.locale}` });
                this.$store.commit("CHANGE_MENU");
            } else {
                this.visibleForm = true;
                this.loginTab = 1;
            }
        },

        clickUz() {
            this.$i18n.setLocale("uz");
            this.isRu = false;
        },

        clickRu() {
            this.$i18n.setLocale("ru");
            this.isRu = true;
        },
        setPassword(value) {
            this.register.passwordConfirm = value;
            this.$v.register.passwordConfirm.$touch();
        },
        setPhone(value) {
            this.register.phone = value;
            this.$v.register.phone.$touch();
        },
        setPhoneReset(value) {
            this.invalidPhone = false;
            this.reset.phone = value;
            this.$v.reset.phone.$touch();
        },

        setPasswordNew(value) {
            this.newPassword = value;
            this.$v.newPassword.$touch();
        },

        setPasswordLogin(value) {
            this.login.password = value;
            this.$v.login.password.$touch();
        },
        setPhoneLogin(value) {
            this.login.phone = value;
            this.$v.login.phone.$touch();
        },
        // click activate

        clickActivate() {
            console.log("user", this.$auth.user);
            this.visibleForm = true;

            this.loginTab = 6;

            this.$axios.$post("/user/activate", {
                method: "sms",
                phone: this.$auth.user.phone
            });
        },

        sendCodeUser() {
            this.$axios
                .$post("/user/activate", {
                    method: "edit",
                    code: this.resetCode2,
                    phone: this.$auth.user.phone
                })
                .then(res => {
                    console.log(res);

                    this.visibleForm = false;

                    this.loginTab = 1;
                })
                .catch(err => {
                    this.errorCode2 = true;
                });
        },

        //auth methods
        async registerUser() {
            this.$v.register.$touch();
            this.check = true;

            if (!this.$v.register.$invalid) {
                if (this.register.password == this.register.passwordConfirm) {
                    this.$axios
                        .$post("/user/register", {
                            name: this.register.name,
                            phone: this.register.phone,
                            password: this.register.password
                        })
                        .then(async res => {
                            console.log(res);
                            if (res.success) {
                                try {
                                    let response = await this.$auth.loginWith(
                                        "local",
                                        {
                                            data: {
                                                phone: this.register.phone,
                                                password: this.register.password
                                            }
                                        }
                                    );

                                    this.$router.go();
                                    console.log("login", response);
                                } catch (err) {
                                    console.log(err);
                                }
                            }
                        });
                } else {
                    alert("Parolni tasdiqlang");
                }
            }
        },

        //login method
        async loginUser() {
            this.$v.login.$touch();
            this.check2 = true;

            if (!this.$v.login.$invalid) {
                try {
                    let response = await this.$auth.loginWith("local", {
                        data: {
                            phone: this.login.phone,
                            password: this.login.password
                        }
                    });

                    if (response.data.success) {
                        if (this.$store.state.localBasket.length > 0) {
                            await this.$axios
                                .$post("/like/rm")
                                .then(async res => {
                                    // this.$store.commit("GET_BASKET", []);

                                    await this.$store.state.localBasket.forEach(
                                        async item => {
                                            await this.$axios.$post(
                                                "/like/create",
                                                item
                                            );
                                        }
                                    );

                                    await this.$store.dispatch("getBasket");

                                    this.$store.commit("remove_local");
                                });
                        }
                        this.$router.go();
                    }

                    if (!response.data.success) {
                        this.invalid = true;
                    }

                    console.log("login", response);
                } catch (err) {}
            }
        },

        //Reset send phone
        sendNumber() {
            this.$v.reset.$touch();
            this.check3 = true;

            if (!this.$v.reset.$invalid) {
                this.$axios
                    .$post("/user/reset/check", {
                        method: "checkUser",
                        phone: this.reset.phone
                    })
                    .then(res => {
                        if (res.success) {
                            this.loginTab = 3;
                        }
                    })
                    .catch(err => {
                        this.invalidPhone = true;
                    });
            }
        },

        //Send code
        sendCode() {
            this.$axios
                .$post("/user/reset/check", {
                    method: "checkCode",
                    code: this.resetCode,
                    phone: this.reset.phone
                })
                .then(res => {
                    console.log(res);

                    this.hash = res.data;

                    this.loginTab = 5;
                })
                .catch(err => {
                    this.errorCode = true;
                });
        },

        //Send new password
        sendPassword() {
            this.$v.newPassword.$touch();
            this.check4 = true;

            if (!this.$v.newPassword.$invalid) {
                this.$axios
                    .$post("/user/reset/" + this.hash, {
                        code: this.resetCode,
                        phone: this.reset.phone,
                        password: this.newPassword
                    })
                    .then(res => {
                        console.log(res);

                        this.loginTab = 1;
                    });
            }
        },

        toggleShow() {
            this.isShow = !this.isShow;
        },

        changeTabIndex(index) {
            this.tabIndex = index + 1;
        },

        formHide() {
            this.visibleForm = false;
            this.loginTab = 1;
        },
        clickOneOrder(id) {
            this.$router.push({
                name: `order___${this.$i18n.locale}`,
                query: { id: id }
            });
            this.$store.commit("CHANGE_MENU");
        }
    }
};
</script>

<style lang="scss" scoped>
.logo {
    img {
        width: 210px;
        path {
            fill: #fff;
        }
    }
}
.golden {
    color: #ffc600 !important;
    span {
        svg {
            rect {
                fill: #fff;
                stroke: #fff;
            }
        }
    }
}
button.enter-btn {
    padding: 8px 55px !important;
}
.yopish {
    display: flex;
    justify-content: flex-end;
}
div.fixvh-mobile {
    top: 45px;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 199;
    background: rgba(51, 51, 51, 0.3);
    display: none;
}
div.mobile-nav-menu {
    width: 265px;
    position: fixed;
    top: 45px;
    left: 0;
    background-color: #ffc600;
    padding: 10px 15px;
    height: calc(100vh - 45px);
    z-index: 2345;
    display: none;
    transition: 0.5s;
    div.nav-input {
        position: relative;
        input {
            background: rgba(255, 255, 255, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-sizing: border-box;
            border-radius: 3px;
            width: 100%;
            padding: 7px 30px 7px 10px;
            &:focus {
                outline: none;
            }
        }
        input::placeholder {
            font-style: italic;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;

            color: #333333;

            opacity: 0.5;
        }
        span {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    div.ul-menu {
    }
}

// @media (max-width: ) {

// }
.menumedia {
    width: 70%;
    display: block !important;
    left: 0px !important;
}
.menu1 {
    width: 70%;
    top: 46px;
    left: -1000px;
    position: absolute;
    height: 100vh;
    background: #ffc600;
    z-index: 9;
    // display: none;
}
.til {
    position: relative;
    // margin: 0px 60px;
    button {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        position: relative;

        color: #333333;
        border: 0;
        background: transparent;
        // padding: 10px 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        span {
            margin-right: 5px;
        }
        svg {
            transition: 0.2s;
        }
        svg.flag {
            width: 26px;
            height: 26px;
            border-radius: 50%;
        }
    }
    svg.bur {
        transform: rotate(-180deg);
    }
    svg:last-child {
        transition: 0.5s;
        transform: rotate(0);
        font-size: 26px;
        width: 10px;
        height: 10px;
        path {
            fill: #fff;
        }
    }
}
// .til:hover {
//     .til-menu {
//         display: block;
//     }
//     button {
//         svg {
//             transform: rotate(-180deg);
//         }
//     }
// }
.til-menu {
    position: absolute;
    box-shadow: 0px 0px 1px;
    overflow: hidden;
    border-radius: 12px;
    // display: none;
    left: 0;
    z-index: 23;
    // padding: 10px;
    ul {
        margin-bottom: 0;
        li:first-child {
            h6:first-child {
                padding-bottom: 8px;
                border-bottom: 1px solid #333;
            }
        }
    }
    div {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 10px;
        padding: 10px 15px;
        h6 {
            text-decoration: none;
            color: #555;
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 8px;
        }
        // h6:first-child {
        //     padding-bottom: 8px;
        //     border-bottom: 1px solid #333;
        // }
        h6:hover {
            color: #000;
        }
    }
}
div.activate-box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;
    h6 {
        font-size: 14px;
        color: #fff;
        margin-bottom: 0px;
    }
    button {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 14px;
    }
}

.profil {
    position: relative;
    padding: 34px 0;
    button {
        span {
            svg.black {
                path {
                    fill: black;
                }
            }
        }
    }
    .profil-menu {
        position: absolute;
        width: 300px;
        background: rgba(51, 51, 51, 0.7);
        backdrop-filter: blur(31px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 0px 0px 0px 3px;
        top: 90px;
        right: 0px;
        position: absolute !important;
        padding: 30px;
        padding-top: 15px;
        ul.isProfil {
            list-style: none;
            ul {
                li {
                    border: 0;
                }
            }
            li {
                padding: 15px 0 10px 0;
                border-bottom: 1px solid #ffffff;
                ul {
                    list-style: none;
                    li {
                        padding: 10px 0px 0 0;
                        border: 0;
                    }
                }

                a {
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    color: #ffffff;
                    &:hover {
                        text-decoration: none;
                        color: #ffc600;
                    }
                    button {
                        span {
                            svg.middle {
                                transform: rotate(90deg);

                                circle {
                                    fill: #ffc600;
                                }
                                path {
                                    stroke: #000;
                                }
                            }
                        }
                    }
                    p {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
.show {
    right: 0 !important;
}
.modal-card {
    // overflow: ;
    // overflow-y: scroll;
    height: calc(100vh - 90px);
    top: 90px;
    z-index: 13;
    position: fixed;
    right: -600px;
    transition: 0.5s;
    width: 520px;
    background: rgba(51, 51, 51, 0.7);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    color: #ffffff;
    height: calc(100vh - 90px) !important;
    .zero {
        padding: 30px;
    }
    .vh {
        max-height: 420px;
        overflow-y: scroll;
    }
    .vh::-webkit-scrollbar {
        display: none;
    }
    p.mycor {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 59px;
    }
    .btn-show {
        display: none !important;
    }
    .modal-window {
        z-index: 12121212;
        .div {
            padding: 0px 20px;
        }

        .pro-modal {
            img.pustoy {
                width: 100%;
            }
        }
    }
    .head-modal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            margin-bottom: 0;
        }
        button {
            border: 0;
            background: transparent;
        }
    }

    .all {
        width: 520px;
        padding: 15px 30px;
        position: fixed;
        background: rgba(51, 51, 51, 0.9);
        // backdrop-filter: blur(88px);
        bottom: 0px;
        // top: 66%;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            p {
                font-weight: 500;
                font-size: 24px;
                line-height: 44px;
                margin-bottom: 0;
                color: #ffffff;
            }
            span {
                font-weight: 600;
                font-size: 24px;
                line-height: 44px;
            }
        }
        button {
            width: 100%;
            border: 0;
            padding: 10px 20px;
            background: #ffc600;
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;

            color: #333333;
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
            width: 35%;
            margin-right: 20px;
            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
        }
        .right {
            p {
                margin-bottom: 10px;
            }
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
            .aside-z {
                div.item {
                    margin-bottom: 10px;
                    display: flex;

                    h3 {
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        margin-bottom: 0px;
                        color: #ffffff;
                        width: 100px;
                    }
                    h4 {
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        margin-bottom: 0px;
                        color: #ffffff;
                    }
                    span.size {
                        background: #ffffff;
                        border-radius: 3px;
                        padding: 0px 15px;
                        height: 22px;
                        b {
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 20px;
                            /* identical to box height */

                            color: #333333;
                        }
                    }
                    span.color {
                        width: 40px;
                        height: 22px;
                        border-radius: 3px;
                    }
                }
            }
            .aside {
                display: flex;
                p.size {
                    background: #ffffff;
                    border-radius: 3px;
                    text-align: center;
                    color: #333333;
                    display: inline-block;
                }
                div.color {
                    width: 48px;
                    height: 22px;
                    background: #ff0000;
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
                    }
                }
            }
            .btns {
                display: flex;

                button,
                a {
                    border: 0;
                    background: #ffffff;
                    border-radius: 3px;
                    display: block;
                    margin: 0px 3px;
                }
                .buy {
                    padding: 0px 50px;
                }
                .edit {
                    width: 25px;
                    height: 25px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .delete {
                    width: 25px;
                    height: 25px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}
.cont {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-top: 5px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.cont input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #9b9b9b;
}

/* On mouse-over, add a grey background color */
.cont:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.cont input:checked ~ .checkmark {
    background-color: #9b9b9b;
    border-radius: 1px;
    border: 0.5px solid #ffffff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.cont input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.cont .checkmark:after {
    left: 6px;
    top: 2px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0px 1px 1px 0;
    transform: rotate(45deg);
}
.error-text {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0px;
    color: #ff0000;
    // text-shadow: 0px 0px 2px rgb(255, 206, 206);
}
div.auth-relative {
    position: relative;
}
div.auth-register {
    background: #565656;
    position: absolute;
    right: 0;
    border-radius: 0px 0px 0px 3px;
    width: 452px;
    padding: 20px 30px 35px 30px;
    div.confirm-check {
        display: flex;
        margin-top: 25px;
        p {
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;

            color: #ffffff;
            a {
                font-weight: normal;
                font-size: 18px;
                line-height: 22px;
                text-decoration-line: underline;

                color: #ffffff;
            }
        }
    }
    p.text {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 30px;
        color: #ffffff;
    }
    h1.title {
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        margin-bottom: 15px;
        letter-spacing: 0.25px;
        font-feature-settings: "pnum" on, "lnum" on;

        color: #ffffff;
    }
    div.button-send {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        button {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;

            color: #333333;
            background: #ffc600;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
            border: 1px solid transparent;
            padding: 8px 35px;
        }
    }
    div.auth-top {
        display: flex;
        justify-content: flex-end;
        button {
            background: transparent;
            border: none;
        }
    }

    div.form-group {
        margin-bottom: 5px;
        h2 {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 10px;
            color: #ffffff;
        }
        div.input-relative {
            position: relative;
        }
        input {
            height: 35px;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(4px);
            border: 1px solid #fff;
            border-radius: 3px;
            width: 100%;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            /* or 200% */
            padding-left: 10px;
            font-feature-settings: "pnum" on, "lnum" on;

            color: #ffffff;
            &:focus {
                outline: none;
                border: 1px solid #ffc600;
            }
        }

        input::-webkit-inner-spin-button {
            appearance: none;
        }
        button.eye {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 12px;
            z-index: 2;
            background: transparent;
            border: none;
        }
    }

    div.text-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        margin-top: 12px;
        h3 {
            font-style: italic;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            cursor: pointer;
            text-decoration-line: underline;
            color: #ffc600;
        }
        h4 {
            font-style: italic;
            font-weight: 500;
            font-size: 16px;
            line-height: 15px;
            cursor: pointer;
            text-decoration-line: underline;
            font-feature-settings: "pnum" on, "lnum" on;

            color: #ffffff;
        }
    }
}

.child-out aside:not(.active-child) {
    display: none;
}
.slideUp {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    transition: transform 0.5s ease-out;
}

.slideDown {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: transform 0.5s ease-out;
}
header {
    margin-bottom: 100px;
    position: fixed;
    z-index: 200;
    width: 100%;
    background: #ffc600;
    top: 0;
    left: 0;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .menu {
                // display: flex;
                ul.menu-ul {
                    display: flex;
                    list-style: none;
                    margin-bottom: 0px;
                    // align-items: center;
                    li.menu-li {
                        border: 0;
                        padding: 34px 0;

                        a.menu-a {
                            margin-left: 32px;
                            cursor: pointer;
                            font-style: normal;
                            font-weight: 600;
                            font-size: 18px;
                            line-height: 22px;
                            color: #ffffff;
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            span {
                                svg {
                                    width: 10px;
                                    height: 6px;
                                    path {
                                        fill: #ffffff !important;
                                        stroke: #ffffff !important;
                                    }
                                }
                            }
                        }
                        .category-man {
                            display: none;
                            padding: 30px 190px;
                            position: absolute;
                            left: 0;
                            top: 90px;
                            width: 100%;
                            background: #333333;
                            a {
                                font-style: normal;
                                font-weight: 500;
                                font-size: 18px;
                                line-height: 22px;
                                color: #ffffff;
                                transition: 0.3s;
                            }
                            a:hover {
                                color: #ffc600;
                                text-decoration: none;
                            }
                            ul {
                                margin-top: 20px;
                                list-style: none;
                            }
                        }
                        .det {
                            padding: 30px 50px;
                            .det-ul {
                                li {
                                    margin-bottom: 15px;
                                    button {
                                        border: 0;
                                        background: transparent;
                                        color: #fff;
                                    }
                                    button:hover {
                                        color: #ffc600;
                                    }
                                }
                            }
                        }
                    }
                    li:hover {
                        a.menu-a {
                            color: #333333;
                            span {
                                svg {
                                    transform: rotate(90deg);
                                    path {
                                        fill: #333333 !important;
                                        stroke: #333333 !important;
                                    }
                                }
                            }
                        }
                        .category-man {
                            display: block !important;
                            ul {
                                li {
                                    a {
                                        font-weight: normal;
                                        font-size: 16px;
                                        line-height: 20px;
                                        color: #ffffff;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .search {
                margin-left: 32px;
                display: inline-block;
                position: relative;
                input {
                    width: 255px;
                    height: 36px;
                    background: rgba(255, 255, 255, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-sizing: border-box;
                    border-radius: 3px;
                    padding: 10px 45px;
                    padding-left: 15px;
                    &::placeholder {
                        font-style: italic;
                    }
                }
                svg {
                    cursor: pointer;
                }
                input:focus-visible {
                    outline: none;
                }
                input::placeholder {
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 15px;
                    color: #333333;
                    opacity: 0.5;
                }
                span {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 16px;
                }
            }
        }
        .right {
            justify-content: space-between;
            display: flex;
            align-items: center;
            .heart {
                margin-right: 28px;
                position: relative;
            }

            .like-count {
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                display: inline-block;
                border-radius: 10px;
                background-color: #333333;
                color: #ffffff;
                width: 16px;
                height: 16px;
                padding: 1px 4px;
                position: absolute;
                right: -4px;
                bottom: -2px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            .lang {
                margin-right: 25px;
            }
            .korzina {
                margin-right: 30px;
                button {
                    position: relative;
                }
                span {
                    svg.white {
                        path {
                            fill: #fff;
                            stroke: #fff;
                        }
                    }
                }
            }
            button {
                display: flex;
                align-items: center;
                cursor: pointer;
                background: transparent;
                border: 0;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                color: #ffffff;
            }
            .login {
                background: #333333;
                border-radius: 3px;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                color: #ffffff;
                padding: 10px 30px;
            }
        }
    }
}

.bot-menu {
    padding: 8px 76px;
    position: fixed;
    z-index: 2555;
    bottom: 0;
    width: 100%;
    background: rgba(51, 51, 51, 0.7);
    backdrop-filter: blur(40px);
    border-radius: 3px;
    display: none;
    justify-content: space-between;
    button,
    a {
        text-decoration: none;
        border: 0;
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.02em;
        color: #ffffff;

        span {
            margin-bottom: 6px;
        }
    }
    a.nuxt-link-exact-active {
        color: #ffc600;
        svg path {
            fill: #fff;
            stroke: #fff;
        }
    }
    button.one {
        align-items: start;
    }
}
@media (max-width: 575px) {
    .button-active {
        color: #ffc600 !important;
        svg path {
            fill: #fff;
            stroke: #fff;
        }
    }
    .modal-window {
        .div {
            padding: 0px 5px !important;
        }
    }
    .til-menu {
        div {
            padding: 10px !important;
        }
    }
    div.auth-register {
        width: 100%;
        padding: 10px;

        div.button-send {
            button {
                width: 100%;
            }
        }
    }
    .pro-modal {
        .delete {
            margin-left: 30px !important;
        }
        .btn-show {
            display: block !important;
            margin: 15px auto;
            display: flex;
            justify-content: center;
            background: #ffffff;
            border-radius: 3px;
            border: 0;
            padding: 9px 50px;
        }
    }

    .profil-menu {
        position: absolute !important;
        width: 100vw !important;
        height: 100vh !important;
        top: -13px !important;
        right: -15px !important;
    }
    .bot-menu {
        display: flex !important;
        padding: 8px 9px 8px 16px !important;
        button,
        a {
            font-weight: normal;
            line-height: 12px;
            letter-spacing: -0.02em;
            color: #ffffff;
            font-size: 10px !important ;
            span {
                svg {
                    max-width: 37px !important;
                }
            }
        }
    }
    header {
        .profil {
            padding: 10px 0 !important;
            position: relative;
            button.kalla-btn {
                display: none !important;
            }
        }
        .header {
            padding: 0 !important;
        }
        .logo {
            padding: 5px 0 !important;
            img {
                width: 137px !important;
            }
        }
        .menu {
            display: none !important;
        }
        .search {
            display: none !important;
        }
        .heart {
            display: none !important;
        }
        .korzina {
            display: none !important;
        }
        .right {
            margin-right: 0px;
            .lang {
                margin-right: 0px !important;
            }
            button.login {
                margin-left: 20px !important;
                padding: 6px 22px !important;
            }
        }
    }
    .modal-card {
        width: 95% !important;
        height: calc(100% - 44px) !important;
        top: 50px !important;
        .zero {
            padding: 20px !important;
        }
        p.summa {
            font-size: 16px !important;
        }
        p.name {
            font-size: 16px !important;
        }

        div.item {
            h3,
            h4 {
                font-size: 14px !important;
            }
        }
        .left {
            width: 55% !important;
            margin-right: 12px !important;
        }
        .right {
            width: 45% !important;
        }
        .vh {
            max-height: 520px !important;
            padding-bottom: 50px;
        }
        .all {
            width: 100% !important;
            button {
                font-size: 18px !important;
            }
        }

        .btns {
            button:first-child {
                display: none !important;
            }
        }
    }
    .aside-z {
        div.item {
            span.size {
                padding: 0 10px !important;
            }
        }
    }
    .show {
        z-index: 121212;
        top: 40px;
        right: 10px !important;
    }
}
@media (min-width: 576px) and (max-width: 950px) {
    .bot-menu {
        display: flex !important;
    }
    .profil {
        padding: 20px 0 !important;
    }
    header {
        .menu {
            display: none !important;
        }
        .search {
            display: none !important;
        }
        .heart {
            display: none !important;
        }
        .korzina {
            display: none !important;
        }
        .right {
            margin-right: 20px !important;
            .lang {
                margin-right: 20px;
            }
        }
    }
}
@media (max-width: 950px) {
    div.fixvh-mobile {
        top: 45px;
        left: 0;
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: 199;
        background: rgba(51, 51, 51, 0.3);
        display: none;
    }
    div.close-fixvh {
        display: block;
    }
    div.mobile-nav-menu {
        width: 290px;
        position: fixed;
        top: 45px;
        left: 0;
        background-color: #ffc600;
        padding: 10px 15px;
        height: calc(100vh - 45px);
        z-index: 2345;
        display: block;
        transform: translateX(-101%);
        div.nav-input {
            position: relative;
            input {
                background: rgba(255, 255, 255, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.5);
                box-sizing: border-box;
                border-radius: 3px;
                width: 100%;
                padding-left: 10px;
                padding-right: 30px;
                height: 35px !important;
                &:focus {
                    outline: none;
                }
            }
            input::placeholder {
                font-style: italic;
                font-weight: 300;
                font-size: 12px;
                line-height: 15px;

                color: #333333;

                opacity: 0.5;
            }
            span {
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        div.ul-mobile {
            margin-top: 20px !important;
            max-height: calc(100vh - 200px);
            overflow-y: scroll;
        }
    }
    div.close-nav {
        transform: translateX(0);
    }
}
</style>
