<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="notfound">
        <div class="wrapper">
            <h1>Page not found</h1>
            <p>go to <RouterLink to="/home">HomePage</RouterLink></p>
        </div>
    </div>
</template>

<style scoped>
    .notfound {
        min-height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-family: "Space Mono", monospace;
    }
</style>
