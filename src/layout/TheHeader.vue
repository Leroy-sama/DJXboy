<script setup>
    import { Icon } from "@iconify/vue";
    import { reactive } from "vue";

    const state = reactive({
        isActive: false,
    });

    const toggleNavMenu = () => {
        state.isActive = !state.isActive;
    };

    const closeNavMenu = () => {
        state.isActive = false;
    };
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/" class="logo"
                ><span>DJ Xboy</span
                ><Icon icon="material-symbols:star" color="#eb1616" width="30"
            /></RouterLink>
            <ul class="nav-links" :class="{ active: state.isActive }">
                <li>
                    <RouterLink to="/home" @click.native="closeNavMenu"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/about" @click.native="closeNavMenu"
                        >About</RouterLink
                    >
                </li>
                <!-- <li>
                    <RouterLink to="/services" @click.native="closeNavMenu"
                        >Services</RouterLink
                    >
                </li> -->
                <li>
                    <RouterLink to="/mixtapes" @click.native="closeNavMenu"
                        >MixTapes</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/contact" @click.native="closeNavMenu"
                        >Contact</RouterLink
                    >
                </li>
            </ul>
            <div
                class="burger"
                @click="toggleNavMenu"
                :class="{ active: state.isActive }"
            >
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
    nav ul li {
        list-style: none;
    }

    nav a {
        color: rgb(2, 2, 12);
        text-decoration: none;
        font-size: 1.2rem;
    }

    nav ul li a::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #eb1616;
        display: block;
        margin: auto;
        transition: 0.5s;
    }

    nav ul li a:hover::after,
    nav ul li a.router-link-active::after {
        width: 100%;
    }

    .logo {
        font-size: 1.3rem;
        font-weight: 700;
        color: #eb1616;
        display: flex;
        /* align-items: center; */
    }

    .nav-links {
        position: fixed;
        z-index: 1000;
        inset: 0 0 0 30%;
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: min(30vh, 10rem) 2em;
        background: hsl(0 0% 100% / 0.7);
        backdrop-filter: blur(1rem);
        transform: translateX(100%);
        transition: transform 350ms ease-out;
    }

    .burger {
        cursor: pointer;
        z-index: 9999;
    }

    .bar {
        width: 25px;
        height: 2px;
        background-color: black;
        display: block;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
    }

    .burger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .burger.active .bar:nth-child(1) {
        transform: rotate(45deg) translateY(10px);
    }

    .burger.active .bar:nth-child(3) {
        transform: rotate(-45deg) translateY(-10px);
    }

    .nav-links.active {
        transform: translateX(0%);
    }

    @media (min-width: 35em) {
        nav {
            padding: 2em;
        }
        .burger {
            display: none;
        }
        .nav-links {
            transform: translateX(0%);
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0;
        }
    }
</style>
