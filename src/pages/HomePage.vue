<template>
    <section id="home">
        <div class="home__intro">
            <div class="home__text">
                <h1 class="text__heading">
                    Making unforgettable moments through
                    <span class="red">music</span>
                </h1>
                <p class="text__description">
                    Experience the magic of unforgettable moments, woven
                    together by the mix-mastery of music.
                </p>
                <button class="cta__btn">Explore</button>
            </div>
            <div class="image">
                <img src="../assets/img/the-guy.jpg" alt="landing page img" />
            </div>
        </div>
        <div class="benefits">
            <div class="benefits__head">
                <h2 class="the-experience">The Experience</h2>
            </div>
            <div class="benefits__wrapper">
                <div class="benefit1">
                    <div class="befits__img">
                        <img
                            src="../assets/img/benefits-one-img.jpg"
                            alt="yess sirr"
                        />
                    </div>
                    <div class="befits__text">
                        <h3 class="text__title">Elevated Atmosphere</h3>
                        <p class="text__desc">
                            Transform any occasion with DJXboy, creating an
                            extraordinary atmosphere through carefully curated
                            playlists and seamless mixes.
                        </p>
                    </div>
                </div>
                <div class="benefit2">
                    <div class="befits__img">
                        <img
                            src="../assets/img/benefits-two-img.jpg"
                            alt="tailored musical journy"
                        />
                    </div>
                    <div class="befits__text">
                        <h3 class="text__title">Tailored Musical Journey</h3>
                        <p class="text__desc">
                            Experience a personalized musical journey with
                            DJXboy, where each track is thoughtfully selected to
                            complement your event's mood, ensuring a distinctive
                            and memorable celebration
                        </p>
                    </div>
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

    .home__intro {
        /* height: 90vh; */
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
        /* padding-bottom: 1em;  */
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

    .benefits__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .benefits__head {
        display: flex;
        justify-content: center;
    }

    .the-experience {
        text-align: center;
        position: relative;
    }

    .the-experience::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: red;
    }

    .befits__img::after {
        content: "";
        position: absolute;
        left: 2em;
        bottom: 4em;
        z-index: -1;
        border: 2px solid red;
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
        .home__intro {
            flex-direction: column-reverse;
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
            padding: 0;
        }

        .testimonials {
            padding: 1em;
        }

        .cta {
            font-size: 1.5rem;
        }
    }
</style>
