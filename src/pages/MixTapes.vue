<template>
    <section>
        <div class="sect-title">
            <h1>Mixtapes</h1>
        </div>
        <div class="mixtapes__wrapper">
            <div class="mixtapes">
                <div class="mixtape">
                    <img src="../assets/img/lovers-rock-mix-2.jpg" alt="lovers rock/reggae">
                    <p>Lovers Rock/Reggae</p>
                    <a href="https://hearthis.at/dj-xboy-254-mixes/best-of-lovers-rock-and-reggae-pop-mixes-dj-xboy-254/">Listen</a>
                </div>
                <div class="mixtape">
                    <img src="../assets/img/crazy-dancehall-mix-2.jpg" alt="crazy dancehall 2">
                    <p>Crazy Dancehall Mix 02</p>
                    <a href="https://hearthis.at/dj-xboy-254-mixes/crazy-dancehall-bounce-2-dj-xboy-254/">Listen</a>
                </div>
                <div class="mixtape">
                    <img src="../assets/img/crazy-dancehall-mix-3jpg.jpg" alt="crazy dancehall 3">
                    <p>Crazy Dancehall Mix 03</p>
                    <a href="https://hearthis.at/dj-xboy-254-mixes/crazy-dancehall-mix-003urban-love/">Listen</a>
                </div>
            </div>
            <a href="https://hearthis.at/dj-xboy-254-mixes/">Explore More</a>
        </div>
    </section>
</template>

<style scoped>

    img {
        width: 100%;
    }

    .sect-title {
        background: url(../assets/img/mixtapes.jpg);
        height: 500px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sect-title h1 {
        color: white;
        font-size: 2rem;
    }

    .mixtapes__wrapper {
        max-width: 1200px;
        padding: 2em 0;
        margin: auto;
    }

    .mixtapes {
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;
    }
</style>
