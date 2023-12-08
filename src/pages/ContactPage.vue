<script setup>
    import {ref} from 'vue'

    const validateForm = () => {}

</script>

<template>
    <section>
        <div class="foot__heading">
            <h1>Contact Me</h1>
        </div>
        <div class="contact__section">
            <div class="section__wrapper">
                <div class="contact__text">
                    <h3>Talk to Xboy</h3>                    
                    <p>Please email email@gmail.com for event bookings</p>                      
                    <p>Please contact Xboy at info@xboy.com</p>
                </div>
                <div class="contact__form">
                    <h3>Contact Form</h3>
                    <form action="" @submit.prevent="validateForm">
                        <div class="form-control">
                            <input type="text" id="name" placeholder="Name" />
                        </div>
                        <div class="form-control">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div class="form-control">
                            <input
                                type="number"
                                id="number"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div class="form-control">
                            <textarea
                                name="message"
                                id="message"
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .foot__heading {
        background: url(../assets/img/contact-me.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 500px;
    }

    h1 {
        color: white;
        text-align: center;
        padding: 2em 0;
        font-size: 3rem;
    }

    .section__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2em 0;
        max-width: 1200px;
        margin: auto;
    }

    .form-control input,
    .form-control textarea {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        padding: 1em;
    }

    button {
        margin-top: 1em;
        color: #eb1616;
        font-size: 1rem;
        background-color: white;
        padding: 0.7em 1.5em;
        cursor: pointer;
        border: 2px solid #eb1616;
    }

    button:hover {
        border: none;
        border-bottom: 2px solid #eb1616;
    }

    @media (max-width: 35em) {
        .section__wrapper {
            grid-template-columns: 1fr;
            padding: 1em;
            gap: 1.5em;
        }
    }
</style>
