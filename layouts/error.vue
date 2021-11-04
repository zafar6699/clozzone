<template>
    <div>
        <div class="container">
            <div class="error">
                <h2>{{ $t("notdound") }}</h2>

                <p>{{ $t("sahifanot") }}</p>

                <nuxt-link to="/">{{ $t("glavni") }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&display=swap");
.error {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 125px 0;
    font-family: "IBM Plex Sans", sans-serif;
    text-align: center;
    img {
        pointer-events: none;
    }
    h2 {
        // font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 49px;
        color: #333333;
        margin: 25px 0;
    }
    p {
        // font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
        color: #8d8d8d;
        margin: 25px 0;
    }
    a {
        text-decoration: none;
        background: #ffc600;
        color: #fff;
        padding: 10px 40px;
        border-radius: 100px;
        &:hover {
            text-decoration: none;
            color: #333333;
        }
    }
}

@media (min-width: 576px) and (max-width: 950px) {
}
@media (min-width: 340px) and (max-width: 575px) {
    .error {
        padding: 20px 0;
        h2 {
            font-size: 25px;
        }
        p {
            font-size: 20px;
        }
    }
}
</style>
