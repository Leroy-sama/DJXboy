<template>
    <section id="home">
        <div class="home__intro">
            <div class="home__text">
                <h1 class="text__heading">
                    Making unforgettable moments through music
                </h1>
                <p class="text__description">
                    Experience the magic of unforgettable moments, woven
                    together by the mix-mastery of music.
                </p>
                <button class="cta__btn">Explore</button>
            </div>
            <div class="image">
                <img
                    src="../assets/img/landing-page-img.jpg"
                    alt="landing page img"
                />
            </div>
        </div>
        <div class="benefits">
            <div class="benefit1">
                <div class="befits__text">
                    <h2 class="text__title">Elevated Atmosphere</h2>
                    <p class="text__desc">
                        Transform any occasion with DJXboy, creating an
                        extraordinary atmosphere through carefully curated
                        playlists and seamless mixes.
                    </p>
                </div>
                <div class="befits__img">
                    <img
                        src="../assets/img/benefits-one-img.jpg"
                        alt="yesa[]"
                    />
                </div>
            </div>
            <div class="benefit2">
                <div class="befits__img">
                    <img src="../assets/img/benefits-two-img.jpg" alt="" />
                </div>
                <div class="befits__text">
                    <h2 class="text__title">Tailored Musical Journey</h2>
                    <p class="text__desc">
                        Experience a personalized musical journey with DJXboy,
                        where each track is thoughtfully selected to complement
                        your event's mood, ensuring a distinctive and memorable
                        celebration
                    </p>
                </div>
            </div>
        </div>
        <div class="testimonials">
            <div class="testimonial1">
                <p class="testi__desc">
                    DJXboy exceeded our expectations, creating an incredible
                    vibe for our event. The music selection was spot-on,
                    seamlessly transitioning from one track to the next. The
                    atmosphere was electric, and our guests couldn't stop raving
                    about the unforgettable experience. Highly recommended for
                    anyone seeking a top-notch DJ.
                </p>
                <div class="details">
                    <span class="name">Satoru Gojo</span>
                    <span class="position">Shibuya Inc.</span>
                </div>
            </div>
            <div class="testimonial2">
                <p class="testi__desc">
                    At my party, DJXboy came and turned the party up. The
                    attendees could not get enough of his spectacular skills.
                </p>
                <div class="details">
                    <span class="name">Yuvinalis</span>
                    <span class="position">Artiste</span>
                </div>
            </div>
            <div class="testimonial3">
                <p class="testi__desc">
                    Working with DJXboy was an absolute pleasure. Their
                    attention to detail and ability to read the crowd set the
                    perfect tone for our wedding. The dance floor was packed all
                    night, and the seamless mix of genres kept everyone
                    entertained. We couldn't have asked for a better DJ to make
                    our special day truly unforgettable.
                </p>
                <div class="details">
                    <span class="name">Nikola Jokic</span>
                    <span class="position">NBA star</span>
                </div>
            </div>
        </div>
        <div class="last__cta">
            <h1 class="cta">
                Ready to elevate your event or party with mixmastery? Book
                DJXboy, NOW!
            </h1>
            <RouterLink class="last__btn" to="/">Services</RouterLink>
        </div>
    </section>
</template>

<style scoped>
    * {
        line-height: 1.5;
    }

    .befits__img {
        display: grid;
        place-content: center;
    }

    .home__intro {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2em;
        gap: 2em;
        /* margin: 1em 0; */
        /* background: linear-gradient(30deg, black, transparent),
            url(@/assets/img/homepage-img1.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; */
    }

    h1 {
        color: black;
        font-size: 2rem;
    }

    img {
        width: 100%;
        max-width: 400px;
    }

    .cta__btn {
        color: #7e1717;
        background-color: white;
        padding: 0.5em 1.6em;
        border: 1px solid #7e1717;
        cursor: pointer;
    }

    .cta__btn:hover {
        color: white;
        background-color: #7e1717;
    }

    .benefits {
        padding: 2em;
        display: grid;
        gap: 4em;
    }

    .benefit1,
    .benefit2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2em;
    }

    .befits__img img {
        margin: auto;
    }

    .befits__text {
        padding: 2em;
    }

    .testimonials {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;
        padding: 4em;
    }

    .last__cta {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .cta {
        max-width: 500px;
        text-align: center;
    }

    .last__btn {
        color: #7e1717;
        text-decoration: none;
        padding: 0.5em 1.6em;
        border: 1px solid #7e1717;
    }

    .last__btn:hover {
        color: white;
        background-color: #7e1717;
    }
</style>
