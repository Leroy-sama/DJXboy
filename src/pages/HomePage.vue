<template>
    <section id="home">
        <div class="home__intro">
            <div class="home__text">
                <h1 class="text__heading">
                    Making unforgettable moments through <span class="red">music</span>
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
                    seamlessly transitioning from one track to the next. Highly recommended for
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
                    perfect tone for our wedding. We couldn't have asked for a better DJ to make
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

    #home {
        max-width: 1200px;
        margin: auto;
    }

    .befits__img {
        display: grid;
        place-content: center;
    }

    .home__intro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2em;
        gap: 2em;
        margin-bottom: 2em;
    }

    h1 {
        color: black;
        font-size: 2rem;
    }

    img {
        width: 100%;
        max-width: 400px;
    }

    .red {
        background-color: #eb1616;
        color: white;
    }
    
    .text__heading,
    .text__description,
    .benefits {
        color: rgb(2, 2, 12);
    }

    .text__title {
        padding-bottom: 1em;
    }

    .text__description {
        margin: 1em 0;
    }

    .cta__btn {
        color: #eb1616;
        background-color: white;
        padding: 0.5em 1.6em;
        border: 1px solid #eb1616;
        cursor: pointer;
        font-size: 1rem;
    }

    .cta__btn:hover {
        color: white;
        background-color: #eb1616;
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

    .testimonial1,
    .testimonial2,
    .testimonial3 {
        border: 1px solid #eb161680;
        padding: 1.5em;
        color: rgb(2, 2, 12);
    }

    .details {
        padding: 1em 0;
        display: flex;
        flex-direction: column;
    }

    .details .name {
        font-size: 1.2rem;
        font-weight: 700;
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
        color: #eb1616;
        text-decoration: none;
        padding: 0.5em 1.6em;
        border: 1px solid #eb1616;
    }

    .last__btn:hover {
        color: white;
        background-color: #eb1616;
    }

    @media (max-width: 35em) {
        .image img {
            display: none;
        }
        .benefit1 {
            display: flex;
            flex-direction: column;
        }

        .benefit2 {
            display: flex;
            flex-direction: column-reverse;
        }

        .testimonials {
            grid-template-columns: 1fr;
        }

        .befits__text {
            padding: 0
        }

        .testimonials {
            padding: 1em;
        }

        .cta {
            font-size: 1.5rem;
        }
    }
</style>
