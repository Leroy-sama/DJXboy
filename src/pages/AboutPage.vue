<template>
    <section id="about">
        <div class="intro">
            <h1>About DJXboy</h1>
        </div>
        <div class="about__section">
            <div class="section__wrapper">
                <h2 class="question">Who am I?</h2>
                <div class="main-about">
                    <p class="main-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, autem dignissimos qui placeat nemo dolorem
                        suscipit ratione reprehenderit illum amet iure. Ipsam
                        unde vitae pariatur nulla tenetur quibusdam quas sit?
                    </p>
                    <img src="" alt="" />
                </div>
                <div class="other-about">
                    <p class="other-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum enim, repellendus pariatur tempore assumenda
                        voluptates, ducimus numquam cumque quod consequatur
                        reprehenderit tenetur aliquam velit porro sequi nostrum
                        laudantium quia ratione.
                    </p>
                    <img src="" alt="" />
                </div>
                <div class="other-about">
                    <p class="other-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum consectetur eveniet ducimus, facere eaque possimus
                        quis assumenda ab esse nesciunt. Explicabo doloribus
                        optio saepe natus deserunt eius voluptate praesentium
                        assumenda.
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
    img {
        width: 100%;
    }

    #about {
        max-width: 1200px;
        width: 100%;
        margin: auto;
    }

    .section__wrapper {
        padding: 1em;
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
        font-size: 2rem;
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
