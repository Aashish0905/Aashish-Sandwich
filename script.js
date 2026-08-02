//  <!-- NAVBAR SECTION START -->

// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

// menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

//  <!-- NAVBAR SECTION END  -->


// EmailJS Initialize
emailjs.init("YOUR_PUBLIC_KEY");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        alert("Failed To Send Message");
        console.error(error);
    });
});
