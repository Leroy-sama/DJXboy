<template>
    <section id="about">
        <div class="intro">
            <h1>About <span class="x-span">DJXboy</span></h1>
        </div>
        <div class="about__section">
            <div class="section__wrapper">
                <h2 class="question">Who am I?</h2>
                <div class="main-about">
                    <p class="main-desc">
                        Dj Xboy The Xtreme is a professional disc jockey , music
                        producer and a visual-Graphic Editor from Kenya well
                        known for his well-crafted audio ,video mixes and
                        interesting intro mashups across most musical genres
                        expanding the horizon of anyone who listens to him.
                    </p>
                    <img src="" alt="" />
                </div>
                <div class="other-about">
                    <p class="other-desc">
                        Born in Bungoma, Kenya, At an early age ,he developed a
                        strong interest in Dancehall ,HipHop, RnB, Kenyan Genge,
                        Bongo, and Pop at a young age and later on Afrobeat,
                        Reggae, House Soul & EDM. The art of deejaying was
                        sparked by listening to reknown deejays and buying CDs
                        from deejays like Dj Kalonje .With this strong interest
                        in Music ,He started learning the craft using Virtual DJ
                        later on in 2017, in 2020 he started Sony Acid & Sony
                        Vegas with other animation softwares like Blender. Some
                        of his key influences at the time were DJ Kalonje, Dj
                        Teeboy ,Dj Bash ,DJ Stone, later on Dj Andie and Dj
                        puffy (from Barbados).
                    </p>
                    <img src="" alt="" />
                </div>
                <div class="other-about">
                    <p class="other-desc">
                        He started sharing mixes via WhatsApp and Telegram.He is
                        also known for mind-blowing word play mashups.He is
                        known for sharing mixes in Movie shops around Muranga
                        Town. His mixes are also available on Mixcloud,
                        Hearthis, Apple Podcasts, and Deezer Podcasts.
                    </p>
                    <img src="" alt="" />
                </div>
                <div class="about-cta">
                    <RouterLink to="/mixtapes">Explore Mixes</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    * {
        line-height: 1.5;
    }

    img {
        width: 100%;
    }

    .section__wrapper {
        padding: 1em;
        max-width: 1200px;
        width: 100%;
        margin: auto;
    }
    .intro {
        background: linear-gradient(45deg, black, transparent),
            url(../assets/img/homepage-img1.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .intro h1 {
        color: #fff;
        text-align: center;
        font-size: 4rem;
        font-family: "Space Mono", monospace;
    }

    .x-span {
        color: salmon;
    }

    .about-cta a {
        text-decoration: none;
        color: #fff;
        background-color: #7e1717;
        padding: 1em 2em;
        margin: 2em 0;
    }

    .about-cta a:hover {
        border-bottom: 2px solid #7e1717;
        border-top: 2px solid #7e1717;
        background-color: #fff;
        color: #7e1717;
    }
</style>
