<script setup>
    import { reactive, ref } from "vue";

    const name = reactive({
        val: "",
        isValid: true,
    });

    const email = reactive({
        val: "",
        isValid: true,
    });

    const message = reactive({
        val: "",
        isValid: true,
    });

    const number = reactive({
        val: "",
        isValid: true,
    });

    const formIsValid = ref(true);

    const validateForm = () => {
        formIsValid.value = true;
        if (name.val === "") {
            name.isValid = false;
            formIsValid.value = false;
        }
        if (email.val === "" || !email.val.includes("@")) {
            email.isValid = false;
            formIsValid.value = false;
        }
        if (message.val === "") {
            message.isValid = false;
            formIsValid.value = false;
        }
        if (number.val === "") {
            number.isValid = false;
            formIsValid.value = false;
        }
    };

    const clearValidity = (input) => {
        input.isValid = true;
    };

    const submitForm = () => {
        validateForm();
        const formData = {
            name: name,
            email: email,
            number: number,
            message: message,
        };
        console.log(formData);
    };
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
                    <p>
                        Please email me at
                        <a
                            class="fancy-link one"
                            href="mailto:djxboythextreme@gmail.com"
                            >djxboythextreme@gmail.com</a
                        >
                        for enquiries and bookings.
                    </p>
                    <p>
                        You can also call or whatsapp me on
                        <a
                            class="fancy-link two"
                            href="https://wa.me/254742583269?text=Hello%20DJXboy"
                            >+254742583269</a
                        >
                    </p>
                </div>
                <div class="contact__form">
                    <h3>Contact Form</h3>
                    <form action="" @submit.prevent="submitForm">
                        <div
                            class="form-control"
                            :class="{ invalid: !name.isValid }"
                        >
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                v-model="name.val"
                                @blur="clearValidity(name)"
                            />
                            <p class="err-msg" v-if="!name.isValid">
                                Name cannot be empty
                            </p>
                        </div>
                        <div
                            class="form-control"
                            :class="{ invalid: !email.isValid }"
                        >
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                v-model="email.val"
                                @blur="clearValidity(email)"
                            />
                            <p class="err-msg" v-if="!email.isValid">
                                Please enter a valid email
                            </p>
                        </div>
                        <div
                            class="form-control"
                            :class="{ invalid: !number.isValid }"
                        >
                            <input
                                type="number"
                                id="number"
                                placeholder="Phone Number"
                                v-model.number="number.val"
                                @blur="clearValidity(number)"
                            />
                            <p class="err-msg" v-if="!number.isValid">
                                Number cannot be empty
                            </p>
                        </div>
                        <div
                            class="form-control"
                            :class="{ invalid: !message.isValid }"
                        >
                            <textarea
                                name="message"
                                id="message"
                                rows="3"
                                v-model="message.val"
                                @blur="clearValidity(message)"
                            ></textarea>
                            <p class="err-msg" v-if="!message.isValid">
                                Message cannot be empty
                            </p>
                        </div>
                        <p class="err-msg" v-if="!formIsValid">
                            Please fix the above errors and submit again
                        </p>
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
        height: 550px;
    }

    h1 {
        color: white;
        text-align: center;
        padding: 2em 0;
        font-size: 4rem;
        font-family: "Space Mono", monospace;
    }

    .fancy-link {
        text-decoration: none;
        color: #eb1616;
        position: relative;
    }

    .fancy-link::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: currentColor;

        transform: scaleX(0.4);
        transform-origin: left;
        transition: transform 350ms ease-in;
    }

    .fancy-link:hover::after {
        transform: scaleX(1);
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
        font-size: 1rem;
    }

    button {
        margin-top: 1em;
        color: #eb1616;
        font-size: 1rem;
        background-color: white;
        padding: 0.7em 1.5em;
        cursor: pointer;
        border: 1px solid #eb1616;
    }

    button:hover {
        border: none;
        border-bottom: 1px solid #eb1616;
    }

    .invalid input {
        border-bottom: 1px solid salmon;
        background-color: rgb(255, 187, 179);
    }

    .err-msg {
        color: salmon;
        font-size: 0.7rem;
    }

    @media (max-width: 35em) {
        .section__wrapper {
            grid-template-columns: 1fr;
            padding: 1em;
            gap: 1.5em;
        }
    }
</style>
