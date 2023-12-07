<script setup>
    const toggleNavMenu = () => {};
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/" class="logo">DJXboy</RouterLink>
            <ul class="nav-links">
                <li>
                    <RouterLink to="/home">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/services">Services</RouterLink>
                </li>
                <li>
                    <RouterLink to="/mixtapes">MixTapes</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
            <div class="burger" @click="toggleNavMenu">
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
        padding: 2em;
    }
    nav ul li {
        list-style: none;
    }

    nav a {
        color: #092635;
        text-decoration: none;
    }

    nav ul li a::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #7e1717;
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
        color: #7e1717;
    }

    .nav-links {
        position: fixed;
        z-index: 1000;
        inset: 0 0 0 30%;
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: min(30vh, 10rem) 2em;
        transform: translateX(100%);
        transition: transform 350ms ease-out;
    }

    .burger {
        cursor: pointer;
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
