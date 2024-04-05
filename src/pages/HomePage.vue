import { RouterLink } from 'vue-router'; import { RouterLink } from
'vue-router';
<template>
    <section id="home">
        <div class="home__intro">
            <div class="home__text">
                <h1 class="text__heading">
                    Making unforgettable
                    <span class="grad">moments</span> through
                    <span class="red">music</span>
                </h1>
                <p class="text__description">
                    Experience the magic of unforgettable moments, woven
                    together by the mix-mastery of music.
                </p>
                <RouterLink to="/mixtapes" class="cta__btn">Explore</RouterLink>
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
                    <img
                        src="../assets/img/benefits-one-img.jpg"
                        alt="yess sirr"
                    />

                    <h3 class="text__title">Elevated Atmosphere</h3>
                    <p class="text__desc">
                        Transform any occasion with DJXboy, creating an
                        extraordinary atmosphere through carefully curated
                        playlists and seamless mixes.
                    </p>
                    <RouterLink class="text-link" to="/mixtapes"
                        >Explore Mixtapes</RouterLink
                    >
                </div>
                <div class="benefit2">
                    <img
                        src="../assets/img/benefits-two-img.jpg"
                        alt="tailored musical journy"
                    />
                    <h3 class="text__title">Tailored Musical Journey</h3>
                    <p class="text__desc">
                        Experience a personalized musical journey with DJXboy,
                        where each track is thoughtfully selected to complement
                        your event's mood, ensuring a distinctive and memorable
                        celebration
                    </p>
                    <RouterLink class="text-link" to="/mixtapes"
                        >Explore Mixtapes <Icon icon="maki:arrow" width="30"
                    /></RouterLink>
                </div>
            </div>
        </div>

        <div class="services">
            <div class="services__wrapper">
                <div class="service">
                    <h3>Service 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, ex illo ipsam sed molestiae incidunt obcaecati
                        laborum commodi quos numquam voluptate, unde quibusdam
                        repellat dicta similique tempore ducimus possimus
                        necessitatibus.
                    </p>
                    <a href="#">Book</a>
                </div>
                <div class="service">
                    <h3>Service 2</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, a! Aperiam aliquam optio itaque
                        similique quaerat sint quasi quas nemo, esse adipisci
                        officia provident aut, dolore eaque praesentium,
                        consequuntur aliquid!
                    </p>
                    <a href="#">Book</a>
                </div>
                <div class="service">
                    <h3>Service 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora voluptate recusandae rem? Itaque ipsa corporis
                        sint aut nihil, voluptate placeat assumenda? Consectetur
                        illum quo inventore debitis voluptatum ad saepe
                        accusamus.
                    </p>
                    <a href="#">Book</a>
                </div>
            </div>
        </div>

        <div class="last__cta">
            <h1 class="cta">
                Ready to elevate your event or party with mixmastery? Book
                DJXboy, NOW!
            </h1>
            <RouterLink class="last__btn" to="/contact">Contact</RouterLink>
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

    .grad {
        color: blue;
    }

    .red {
        background-color: #eb1616;
        color: white;
        font-family: "Space Mono", monospace;
        line-height: 1.5;
    }

    .text__heading,
    .text__description,
    .benefits {
        color: rgb(2, 2, 12);
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
        text-decoration: none;
    }

    .cta__btn:hover {
        color: white;
        background-color: #eb1616;
    }

    .benefits__wrapper {
        padding: 2em 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2em;
    }

    .text__title {
        font-size: 2rem;
        color: var(--darkReddish);
    }

    .text__desc {
        color: var(--myBlack);
        font-size: 1.1rem;
        padding: 1em 0;
    }

    .text-link {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--myBlack);
        font-weight: 700;
        position: relative;
    }

    .text-link::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--darkReddish);

        transform: scaleX(0.4);
        transform-origin: left;
        transition: transform 350ms ease-in;
    }

    .text-link:hover::after {
        transform: scaleX(1);
    }

    .benefits__head {
        display: flex;
        justify-content: center;
        padding: 2em 0;
    }

    .the-experience {
        text-align: center;
        position: relative;
        font-size: 2rem;
        text-transform: uppercase;
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

    .services__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;
    }

    .service {
        border: 1px solid rgb(122, 0, 0);
        padding: 2em;
    }

    .service h3 {
        color: rgb(122, 0, 0);
    }

    .service p {
        margin-bottom: 2em;
    }

    .service a {
        border: 1px solid rgb(122, 0, 0);
        text-decoration: none;
        color: white;
        background-color: rgb(122, 0, 0);
        padding: 0.5em 1em;
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

        .cta {
            font-size: 1.5rem;
        }
    }
</style>
