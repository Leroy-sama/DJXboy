<template>
    <div class="foot__heading">
        <h1>Contact Me</h1>
    </div>
    <div class="contact__section">
        <div class="contact__text">
            <h3>Talk to Xboy</h3>
            <ul>
                <li>
                    <p>Please email email@gmail.com for event bookings</p>
                </li>
                <li>
                    <p>Please contact Xboy at info@xboy.com</p>
                </li>
            </ul>
        </div>
        <div class="contact__form">
            <h3>Contact Form</h3>
            <form action="">
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
                    <textarea name="message" id="message" rows="3"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .foot__heading {
        background: url(../assets/img/contact-me.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 400px;
    }

    h1 {
        color: white;
        text-align: center;
        padding: 2em 0;
        font-size: 3rem;
    }

    .contact__section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2em 0;
    }

    .form-control input,
    .form-control textarea {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        padding: 1em 0;
    }
</style>
