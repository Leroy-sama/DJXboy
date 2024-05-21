<script setup>
    import { Icon } from "@iconify/vue";
</script>

<template>
    <footer>
        <div class="footer__wrapper">
            <div class="footer1">
                <div class="footer__head">
                    <h2>Follow</h2>
                </div>
                <div class="footer__links">
                    <a href="https://m.facebook.com/pg/djxboythextreme">
                        <Icon icon="ic:baseline-facebook" width="40" color="#7e1717" />
                    </a>
                    <a href="https://hearthis.at/dj-xboy-254-mixes/">
                        <Icon icon="simple-icons:hearthisdotat" width="40" color="#7e1717"/>
                    </a>
                    <a href="https://deezer.com/show/3456572">
                        <Icon icon="bxl:deezer" width="40" color="#7e1717" />
                    </a>
                    <a href="https://www.mixcloud.com/DjXboy254/">
                        <Icon icon="cib:mixcloud" width="40" color="#7e1717" />
                    </a>
                    <a href="https://t.me/djxboykenya">
                        <Icon icon="mingcute:telegram-fill" color="#7e1717" width="40" />
                    </a>
                    <a href="https://audiomack.com/dj-xboy-the-xtreme">
                        <Icon icon="simple-icons:audiomack" color="#7e1717" width="40" />
                    </a>
                </div>
            </div>
            <div class="footer2">
                <div class="copyright">
                    <p>
                        Copyright &#169 2024 DjXboy
                    </p>
                    <p>All right reserved</p>
                </div>
                <div class="design">
                    <p>
                        Design crafted by
                        <a href="https://d-lowaw.verwcel.apphh/">Riroi</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: rgb(2, 2, 12);
        margin-top: 2em;
    }

    .footer__head {
        padding-top: 1em;
    }

    .footer__wrapper {
        max-width: 1200px;
        display: flex;
        margin-inline: auto;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
    }

    .footer__links {
        display: flex;
        gap: 1em;
        padding: 2em;
    }

    .footer__links a {
        transition: 0.5s;
    }

    .footer__links a:hover {
        scale: 1.3;
    }

    .footer2 {
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10em;
        padding: 1em 0;
    }

    .design a {
        color: white;
    }

    .design a:hover {
        color: #7e1717;
    }

    @media (max-width: 35em) {
        .footer__links {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5em;
        }

        .footer2 {
            flex-direction: column;
            gap: 1em;
        }
    }

</style>
