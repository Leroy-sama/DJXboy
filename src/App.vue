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
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
        line-height: 1.5;
    }
</style>
