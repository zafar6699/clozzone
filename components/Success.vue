<template>
    <div>
        <div class="success">
            <span
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                    style="enable-background:new 0 0 50 50;"
                    xml:space="preserve"
                >
                    <circle style="fill:#25AE88;" cx="25" cy="25" r="25" />
                    <polyline
                        style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                        points="  38,15 22,33 12,25 "
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g></svg
            ></span>
            <h3>{{ $t("successtext") }}</h3>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.success {
    color: #439767;
    position: fixed;
    z-index: 100001;
    top: 130px;
    left: 50%;
    transform: translate(-50%);
    width: 450px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    background: #eafaed;
    padding: 10px 30px;
    border-radius: 3px;
    h3 {
        margin-left: 20px;
        margin-bottom: 0;
    }
    span {
        svg {
            width: 30px;
            height: 30px;
            path {
                stroke: #ffc600;
            }
        }
    }
}

@media (max-width: 576px) {
    .success {
        width: 100% !important;
        top: 39px;
        h3 {
            font-size: 14px;
        }
    }
}
</style>
