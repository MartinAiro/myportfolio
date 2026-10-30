document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.querySelector("#nav-toggle");

    document.querySelectorAll(".site-nav a").forEach(link => {
        link.addEventListener("click", () => {
            if (navToggle) {
                navToggle.checked = false;
            }
        });
    });


    const welcomeButton = document.querySelector("#welcome-btn");
    const welcomeMessage = document.querySelector("#welcome-message");

    if (welcomeButton && welcomeMessage) {

        welcomeButton.addEventListener("click", () => {

            const hour = new Date().getHours();
            let greeting;

            if (hour < 12) {
                greeting = "Good morning";
            } else if (hour < 18) {
                greeting = "Good afternoon";
            } else {
                greeting = "Good evening";
            }

            welcomeMessage.textContent =
                greeting + "! Welcome to my portfolio.";

        });
    }


    
    const contactForm = document.querySelector("#contact-form");
    const feedback = document.querySelector("#form-feedback");

    if (contactForm && feedback) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {

                feedback.textContent = "Please fill in all fields.";

            } else if (!emailPattern.test(email)) {

                feedback.textContent = "Please enter a valid email.";

            } else if (message.length < 10) {

                feedback.textContent = "Message must have at least 10 characters.";

            } else {

                feedback.textContent =
                    "Thank you " + name + "! Your message passed validation.";

                contactForm.reset();
            }
        });
    }


    const year = document.querySelector("#current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});