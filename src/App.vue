<script setup>
    import TheHeader from "./layout/TheHeader.vue";
    import TheFooter from "./layout/TheFooter.vue";
</script>

<template>
    <section>
        <TheHeader />
        <RouterView />
        <TheFooter />
    </section>
</template>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        line-height: 1.5;
    }

    :root {
        --myBlack: rgb(2, 2, 12);
        --myRed: #eb1616;
        --darkReddish: rgb(100, 18, 9);
        --iconsRed: #7e1717;
        ---color1: #eee5e9;
        ---color2: #7c7c7c;
    }

    img {
        width: 100%;
    }
</style>
