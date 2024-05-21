<template>
    <section>
        <div class="sect-title">
            <h1>Mixtapes</h1>
        </div>
        <div class="mixtapes__wrapper">
            <div class="mixtapes">
                <div class="mixtape">
                    <img
                        src="../assets/img/lovers-rock-mix-2.jpg"
                        alt="lovers rock/reggae"
                    />
                    <div class="mixtape__text">
                        <p>Lovers Rock/Reggae</p>
                        <a
                            href="https://hearthis.at/dj-xboy-254-mixes/best-of-lovers-rock-and-reggae-pop-mixes-dj-xboy-254/"
                            >Listen</a
                        >
                    </div>
                </div>
                <div class="mixtape">
                    <img
                        src="../assets/img/crazy-dancehall-mix-2.jpg"
                        alt="crazy dancehall 2"
                    />
                    <div class="mixtape__text">
                        <p>Crazy Dancehall Mix 02</p>
                        <a
                            href="https://hearthis.at/dj-xboy-254-mixes/crazy-dancehall-bounce-2-dj-xboy-254/"
                            >Listen</a
                        >
                    </div>
                </div>
                <div class="mixtape">
                    <img
                        src="../assets/img/crazy-dancehall-mix-3jpg.jpg"
                        alt="crazy dancehall 3"
                    />
                    <div class="mixtape__text">
                        <p>Crazy Dancehall Mix 03</p>
                        <a
                            href="https://hearthis.at/dj-xboy-254-mixes/crazy-dancehall-mix-003urban-love/"
                            >Listen</a
                        >
                    </div>
                </div>
            </div>
            <div class="explore">
                <a href="https://hearthis.at/dj-xboy-254-mixes/"
                    >Explore More</a
                >
            </div>
        </div>
    </section>
</template>

<style scoped>
    img {
        width: 100%;
    }

    .sect-title {
        background: url(../assets/img/mixtapes.jpg);
        height: 400px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sect-title h1 {
        color: white;
        font-family: "Space Mono", monospace;
        font-size: 4rem;
    }

    .mixtapes__wrapper {
        /* max-width: 1200px; */
        padding: 2em 0;

        background-color: hsl(0 0% 90%);
    }

    .mixtapes {
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;
    }

    .mixtape {
        background-color: white;
    }

    .mixtape p {
        margin-bottom: 1.5em;
    }

    .mixtape__text {
        padding: 1.5em;
    }

    .mixtape a {
        color: var(--iconsRed);
        padding: 0.5em 1em;
        text-decoration: none;
        border: 1px solid var(--iconsRed);
    }

    .explore {
        display: flex;
        justify-content: center;
        margin-top: 2em;
    }

    .explore a {
        text-decoration: none;
        color: #fff;
        background-color: var(--iconsRed);
        padding: 0.7em 1.4em;
    }

    @media (max-width: 35em) {
        .mixtapes {
            grid-template-columns: 1fr;
            padding: 0 1em;
        }

        .sect-title h1 {
            font-size: 2rem;
        }
    }
</style>
