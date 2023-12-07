<template>
    <section class="services-sect">
        <h1 class="services__heading">Dj Services provided</h1>
        <div class="services">
            <div class="service">
                <img src="../assets/img/roadshow-img.jpg" alt="roadshow" />
                <div class="service__text">
                    <h3 class="text__head">Roadshows</h3>
                    <p class="text__desc">
                        Experience the pulsating beats and electrifying vibes of
                        DJXboy as he takes your show on the road! Our roadshows
                        are not just events; they're immersive musical journeys
                        that transcend boundaries and create unforgettable
                        memories.
                    </p>
                </div>
            </div>
            <div class="service">
                <img src="../assets/img/birthday.jpg" alt="birthday party" />
                <div class="service__text">
                    <h3 class="text__head">Birthday Party</h3>
                    <p class="text__desc">
                        Embark on an unforgettable musical journey with [DJ's
                        Name], not just at clubs and festivals, but right in the
                        heart of your celebrations! Elevate your birthday party
                        to new heights with our exclusive DJ services.
                    </p>
                </div>
            </div>
            <div class="service">
                <img src="../assets/img/cooperate.jpg" alt="coperate event" />
                <div class="service__text">
                    <h3 class="text__head">Coperate Events</h3>
                    <p class="text__desc">
                        We specialize in transforming corporate gatherings into
                        vibrant, energetic experiences. Elevate your corporate
                        events to a whole new level with the seamless blend of
                        professionalism and pulsating beats brought to you by
                        DJXboy.
                    </p>
                </div>
            </div>
            <div class="service">
                <img src="../assets/img/kids-party.jpg" alt="kids party" />
                <div class="service__text">
                    <h3 class="text__head">Kids Parties</h3>
                    <p class="text__desc">
                        Turn your child's special day into a magical musical
                        adventure with DJXboy! We bring the same passion and
                        energy to kids' parties, creating an atmosphere filled
                        with joy, laughter, and, of course, fantastic music.
                    </p>
                </div>
            </div>
            <div class="service">
                <img src="../assets/img/wedding.jpg" alt="wedding" />
                <div class="service__text">
                    <h3 class="text__head">Weddings</h3>
                    <p class="text__desc">
                        Celebrate love in style with [DJ's Name] as the maestro
                        of your wedding day! Our wedding DJ services are
                        designed to make your special day even more memorable,
                        with carefully curated playlists that capture the
                        essence of your love story.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    img {
        width: 100%;
    }

    .services-sect {
        padding: 2em;
    }

    .service {
        display: flex;
        margin: 3em 0;
    }

    .service img {
        max-width: 500px;
    }

    .service__text {
        padding: 0 2em;
    }

    @media (max-width: 35em) {
        .service {
            flex-direction: column;
            margin: 1.5em 0;
        }

        .service__text {
            padding: 1em 0;
        }
    }
</style>
